import {  GeoJSON } from "react-leaflet";
import type {FeatureCollection, Feature, Geometry, GeoJsonProperties } from 'geojson';
import type { PathOptions } from "leaflet";
import L from "leaflet";
import { useMemo } from "react";

type FHSZACanvGEOPRops ={
    data:FeatureCollection<Geometry, GeoJsonProperties>,
    styles:(feature?: Feature<Geometry, GeoJsonProperties>) => PathOptions;
}

const CanvasGEO =({data, styles}:FHSZACanvGEOPRops)=>{

    const canvasRenderer = useMemo(()=>L.canvas(),[])

    return (
        <>
        {/* @ts-expect-error: renderer is a valid element and works */}
        <GeoJSON  data={data} style={styles} renderer={canvasRenderer} pane="canvasPane" />
        </>
    )
}

export default CanvasGEO;