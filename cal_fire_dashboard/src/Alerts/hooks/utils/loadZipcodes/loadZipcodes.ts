export const loadZipcodes= async ()=>{
  const zipResp = await fetch('/json/zip_cname.json');
  return zipResp.json();

}