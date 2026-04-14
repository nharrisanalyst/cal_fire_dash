import {scaleOrdinal, scaleThreshold} from 'd3-scale';

export const scaleNumToText = scaleThreshold<number,string>([.2, 1.2, 2.2], ["Low", "Moderate", "High", "Very High"])
export const scaleTextToColor = scaleOrdinal(["Very High", "High", "Moderate", "Low"], ['red', 'red', '#edd924','blue'])