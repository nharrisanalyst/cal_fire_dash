export const removeEventFromHeadline=(event:string, headline:string):string=>{
  return headline.replace(event,"").replace('issued', '').trim();
}