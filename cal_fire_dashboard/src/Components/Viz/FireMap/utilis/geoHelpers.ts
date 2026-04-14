import type { GeometryCollection } from "topojson-specification";
import type { GeoJsonProperties } from "geojson";


export const filterTopoJson =(geomotry:GeometryCollection<GeoJsonProperties>, key:string, value:string) =>{
    return geomotry.geometries.filter(
        geo => geo.properties?.[key as keyof typeof geo.properties] === value
    )
}