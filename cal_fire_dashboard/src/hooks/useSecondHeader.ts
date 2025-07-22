import { useLocation } from "react-router-dom";

export const useSecondHeader =():boolean =>{
    const { pathname } = useLocation();
    const pathsToShowSecondHeader =['dashboard', 'cities','zipcodes','counties']
    let secondHeader = false;
    
    for(let i= 0; i < pathsToShowSecondHeader.length && !secondHeader; i++){
        secondHeader=pathname.includes(pathsToShowSecondHeader[i]);
    }
    

    return secondHeader;
}