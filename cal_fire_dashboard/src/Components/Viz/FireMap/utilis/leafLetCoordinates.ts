import proj4 from "proj4"
import type { FeatureCollection, Geometry, GeoJsonProperties, Position} from "geojson";

export const leafLeftCoordinates = (projInit:string, projTo:string, coords:Position[]):Position[] =>{
    const newCoords:Position[] = [] 
    
    coords.forEach(c=>{
        const results = proj4(projInit, projTo, c)
        newCoords.push(results)
    })

    return newCoords;
}

export const fixFeatureCordinates = (data:FeatureCollection<Geometry, GeoJsonProperties>, projInit:string, projTo:string):FeatureCollection<Geometry, GeoJsonProperties>=>{
    const features = data.features;
    console.log('features here ', features)
    const featuresFiltered = features.filter(f=> f.geometry != null) // filter out nulls
    const correctedFeatures = featuresFiltered.map(f=>{
        if(f.geometry.type === 'Polygon'){
            f.geometry.coordinates[0] = f.geometry.coordinates[0].map(c=>{
                return proj4(projInit, projTo, c);
            }) 
        }
        return f;
    })
    data.features = correctedFeatures;
    return data;
}