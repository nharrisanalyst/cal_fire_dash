import type { PPCLineData } from "../../../../api/models"
import type { FireRiskData } from "../../../../api/models"
import type { DataAvgList } from "../../../../api/models"
import type { ZipCodeDataList } from "../../../../api/models"
import type { DataAvg,ZipCodeData } from "../../../../api/models"

type LinechartKeys = "ppc_class" | "fire_risk";

 

export const apiToLineData = <T extends PPCLineData | FireRiskData>(data:ZipCodeData[], avg:DataAvg[], key:LinechartKeys ):T=>{
    const lineData = avg.map(d=>{
        const zip_data = data.find(zip=>zip.year === d.year);
        if(key === "ppc_class"){
        return {
            year:new Date(`01/01/${d.year}`),
            ppc_class:zip_data?.[key],
            ppc_average:d[key],

        }
      }else{
        return {
            year: new Date(`01/01/${d.year}`),
            fire_risk: zip_data?.[key],
            fire_risk_average: d[key],
        }
      }
    })
    return lineData as T;
}

export const apiToLineDataFire = (data:ZipCodeDataList, avg:DataAvgList):FireRiskData =>{
    const lineData = avg.avg_data.map(d=>{
        const zip_data = data.data.find(zip=>zip.year === d.year);
        return {
            year:new Date(`01/01/${d.year}`),
            fire_risk:zip_data?.fire_risk,
            fire_risk_average:d.fire_risk,

        }
    })
    return lineData as FireRiskData;

}