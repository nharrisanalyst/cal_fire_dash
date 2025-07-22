import {scaleOrdinal} from 'd3-scale';

export const scaleNumToText = scaleOrdinal([3,2,1,0], ["Very High", "High", "Moderate", "None"])
export const scaleTextToColor = scaleOrdinal(["Very High", "High", "Moderate", "None"], ['red', 'red', 'blue','#7F00FF'])