export const validateZipcode=(zip:string):boolean =>{
    const regex = /^9\d{4}$/;
    const validInput = regex.test(zip);
    return validInput;
}