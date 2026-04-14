import { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, GeoJSON, Pane, Marker, Popup } from "react-leaflet";
import { centroid } from "@turf/centroid";
import { polygon } from '@turf/turf'
import { toCircle } from "@terraformer/spatial";
import { filterTopoJson } from './utilis/geoHelpers'
import { feature } from "topojson-client";
import type { GeometryCollection, Topology } from "topojson-specification";
import type { GeoJsonProperties } from "geojson";
import { leafLeftCoordinates } from './utilis/leafLetCoordinates'
import L from 'leaflet';
import MapLegend from "../../Atoms/MapLegend/MapLegend";
import Loading from '../../Atoms/Loading/Loading'
import CanvasGEO from './GeoJSON/CanvasGeo'
import fireDashText from '../../../i18n/fireDashText.json'

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

import GeoWorker from "../../../workers/geoWorkers?worker";

import styles from './FireMap.module.scss'

const inputProj = "+proj=aea +lat_1=34 +lat_2=40.5 +lat_0=0 +lon_0=-120 +x_0=0 +y_0=-4000000 +datum=NAD83 +units=m +no_defs"; 
const leafletProj = "EPSG:4326";

type FireMapProps ={
    zipcode:string;
}


// @ts-expect-error: default icon typing is weird
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});


const FireMap =({zipcode}:FireMapProps)=>{
    const [zipGeoData, setZipGeoData] = useState<GeoJSON.FeatureCollection | null>(null);
    const [fhszaGeoData, setFHSZAGeoData] = useState<GeoJSON.FeatureCollection | null>(null);
    const [center, setCenter] = useState<[number,number] | null>(null);

    const fhszaFetchedRef = useRef<boolean>(false);
    const workerRef  = useRef<Worker | null>(null)

    useEffect(()=>{
        setCenter(null);
        setFHSZAGeoData(null);
        setZipGeoData(null);
        fhszaFetchedRef.current = false;

        fetch('/topoJson/ca_zip.json')
        .then(res=>{
            if (!res.ok) throw new Error("Failed to fetch topojson");
            return res.json();
      }).then((data:Topology)=>{
        const caZip = data.objects.ca_zip as unknown as GeometryCollection<GeoJsonProperties>;
        const filteredGeos = filterTopoJson(caZip, 'GEOID20', String(zipcode))
        caZip.geometries = filteredGeos
        //make geoJSON
        const zipGeoJSON = feature(data,caZip) as GeoJSON.FeatureCollection;
        //Correct cords
        const geom = zipGeoJSON.features[0].geometry;
        if(geom.type === "Polygon"){
            const correctedCoords = leafLeftCoordinates(inputProj, leafletProj, geom.coordinates[0])
            geom.coordinates[0] = correctedCoords;
            const zipPolygon = polygon([correctedCoords])
            const zipCenter = centroid(zipPolygon)
            setCenter([zipCenter.geometry.coordinates[1],zipCenter.geometry.coordinates[0]])
            setZipGeoData(zipGeoJSON)
        }else{
            console.error('The geom type does not match the correct geom type')
        }
        
      })
    
    },[zipcode])

    useEffect(()=>{
        if(!center || fhszaFetchedRef.current) return;
        
        fhszaFetchedRef.current = true;

        fetch('/topoJson/FHSZA_geo_wsg84.json')
        .then(res=>{
            if(!res.ok)throw new Error("Failed to fetch topojson");
            return res.json();
        }).then((data:Topology)=>{
            //makegeoJson
            const fhszaGeoJSON = feature(data,data.objects.FHSZA_geo_wsg84) as GeoJSON.FeatureCollection;
            
            const milesToMeters = (miles: number) => miles * 1609.34;
            const maxMiles = milesToMeters(25);

            const circleToFilter = toCircle([center[1], center[0]], maxMiles);

            const worker = new GeoWorker()
            workerRef.current = worker;
            worker.postMessage({features:fhszaGeoJSON.features, circleToFilter})

            worker.onmessage = (e: MessageEvent) => {
                const filteredFilters = e.data;
                const filteredFHSZA:GeoJSON.FeatureCollection  = {
                    type: "FeatureCollection",
                    features:filteredFilters
                }
                setFHSZAGeoData(filteredFHSZA)
                worker.terminate();
                workerRef.current = null;
            };
        })

        return ()=>{
            if(workerRef.current){
                workerRef.current.terminate()
            }
        }
    },[center])
   

     const geoZipJsonStyle = {
        color: "#478eff",
        weight: 3,
        fill: true,
        fillOpacity:0.05 
    };

    const geoFHSZAJsonStyle = (feature: any): any => {
        const risk = feature.properties.FHSZ;

        let fillColor = "gray";
        if (risk === 3) fillColor = " #f52020";
        else if (risk === 2) fillColor = " #f5941d";
        else if (risk === 1) fillColor = " #f5e61d";

        return {
            color: "grey",       
            weight: 1,
            fillColor: fillColor, 
            fillOpacity: 0.3,
        };
    };
    
    
    
    if(center===null) return(<div className={styles.firemap} >{null}</div>)

    return(
    <div className={styles.firemap} >
        <MapContainer style={{'height':'100%', 'width':'100%'}} center={center} zoom={10} scrollWheelZoom={false}>
            <TileLayer
                url={import.meta.env.VITE_MAP_URL}
                
            />
            {zipGeoData && <Pane name="geoZipJsonStyle" style={{ zIndex: 650 }}><GeoJSON data={zipGeoData} style={geoZipJsonStyle} /></Pane>}
            {fhszaGeoData && <CanvasGEO data={fhszaGeoData} styles={geoFHSZAJsonStyle} />}
            <Pane name="topPane" style={{ zIndex: 700 }}>
                <Marker  position={center}>
                    <Popup>
                    {zipcode}
                    </Popup>
                </Marker>
            </Pane>
        </MapContainer>
        <div className={styles.mapLegendCont}>
            <MapLegend legendItems={(Object.keys(fireDashText.mapLegendText) as (keyof typeof fireDashText.mapLegendText)[]).map(k=>({
                text:fireDashText.mapLegendText[k].text,
                fillColor:fireDashText.mapLegendText[k].color
                })
            )}  />
            {!fhszaGeoData &&<Loading loadingText="... Loading Fire Map Layer" />}
        </div>
    </div>
    )
}

export default FireMap;