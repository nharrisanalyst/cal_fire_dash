import { scaleOrdinal } from 'd3-scale';

type ScaleType =(value:string)=>string

export const textScale = (domain:string[], range:string[]):ScaleType =>{
      const scale = scaleOrdinal(domain,range)
      return scale;
}