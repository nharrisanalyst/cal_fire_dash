export interface ZipCode {
    zipcode: string;
    city:string;
    county:string;
}

//this is the model that will be sent from the api
export interface ZipCodeData {
    year:number;
    zipcode:number;
    city:string;
    county:string;
    fire_risk:number;
    ppc_class:number;
    fhsz_ranking:number;
    non_cat_fire_claims:number;
    non_cat_fire_losses:number;
    non_cat_smoke_claims:number;
    non_cat_smoke_losses:number;
    cat_fire_claims:number;
    cat_fire_losses:number;
    cat_smoke_claims:number;
    cat_smoke_losses:number;
}

//this is the model for averages
export interface DataAvg {
    year:number;
    fire_risk:number;
    ppc_class:number;
    non_cat_fire_claims:number;
    non_cat_fire_losses:number;
    non_cat_smoke_claims:number;
    non_cat_smoke_losses:number;
    cat_fire_claims:number;
    cat_fire_losses:number;
    cat_smoke_claims:number;
    cat_smoke_losses:number;
}

export type DataAvgList = {
    avg_data: DataAvg[]
}
export type ZipCodeDataList={
    data:ZipCodeData[];
}

//these are data types for the visualizations line charts
export interface PPCLine {
  year:Date;
  ppc_class:number;
  ppc_average:number;
}

export type PPCLineData = PPCLine[];

export interface FireRisk {
  year:Date;
  fire_risk:number;
  fire_risk_average:number;
}

export type FireRiskData = FireRisk[];