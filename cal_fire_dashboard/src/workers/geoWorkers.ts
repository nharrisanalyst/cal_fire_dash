import { intersects } from "@terraformer/spatial";
import type { Feature, Polygon } from "geojson";

self.onmessage=(e:MessageEvent) =>{
    const {features, circleToFilter} = e.data;
    const filteredFeatures = features.filter((feature:Feature<Polygon>) => {
                                if(!feature.geometry) return false;
                                if (!feature.geometry.coordinates) return false; 
                                if(feature.geometry.coordinates.length ===0) return false;
                                try {
                                    return intersects(circleToFilter.geometry, feature.geometry);
                                } catch (err) {
                                console.warn("Skipping invalid feature",  err);
                                    return false;
                                }
                            })
    postMessage(filteredFeatures)
}