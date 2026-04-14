// this component is strictly for SEO meta data for dashboard page
// this returns meta data and title
type TitleAndMetaProps ={
    zip:string;
    city:string;
    state:string;
    imgURL?:string;

}

const TitleAndMeta = ({zip, city, state}:TitleAndMetaProps) =>(
    <>
    <title>{ `${zip} ${city}, ${state}  Interactive Fire Exposure Risk Statistics and Map. View Info About Fire Risk, Fire Protection and explore an Interactive Map of Fire Danger – Fire Exposure Index`}</title>
    <meta name='description' content={` ${city}, ${zip} Explore wildfire risk by ZIP code and City with the Fire Exposure Index. See exposure scores, compare regions, and understand your community's risk. Click to understand your risks for ${city}, ${state}  ${zip}.`} />
    <meta name="keywords" content={`${city}, ${state},  ${zip}, Fire Risk, City Statistics, City Maps, Fire Insure Risk, Home Fire, Map, Maps, Home Dashboard, fire risk by ZIP code / city, wildfire risk visualization, fire exposure index`} />
    <meta property="og:url" content={`${window.location.href}`} />
    <meta property="og:title" content={`${zip} ${city}, ${state}  Interactive Fire Exposure Risk Statistics and Map and more – Fire-Exposure-Index.com`} />
    <meta property="og:site_name" content={`Fire-Exposure-Index.com`} />
    <meta property="og:type" content="Data Statistics and Maps for Home and Fire Risk"></meta>
    <meta property="og:description" content={`${city}, ${zip}.Check wildfire risk by ZIP code and City with the Fire Exposure Index. See exposure scores, compare regions, and understand your community's risk. Click to understand your risks for ${city}, ${state}  ${zip}.`}></meta>
    <meta property="og:image" content="https://s3.us-west-1.amazonaws.com/www.fire-exposure-index.com/flames-icon.svg" />

    </>
)


export const TitleAndMetaHome =()=>(
    <>
    <title>{ `Fire Exposure Index Interactive Fire Exposure Risk Statistics and Map.  View Info About Fire Risk, Fire Protection and explore an Interactive Map of Fire Danger – Fire Exposure Index`}</title>
    <meta name='description' content={`Explore wildfire risk across the U.S. with the Fire Exposure Index. Search by ZIP code, view interactive maps, and understand your local fire hazard exposure. Know your risk to make informed decisions and find lower home insurance rates.`} />
    <meta name="keywords" content={`Fire Risk, City Statistics, City Maps, Fire Insure Risk, Home Fire, Map, Maps, Home Dashboard, fire risk by ZIP code / city, wildfire risk visualization, fire exposure index`} />
    <meta property="og:url" content={'https://www.fire-exposure-index.com/'} />
    <meta property="og:title" content={`Interactive Fire Exposure Risk Statistics, Dashboard and Map and more – Fire-Exposure-Index.com`} />
    <meta property="og:site_name" content={`Fire-Exposure-Index.com`} />
    <meta property="og:type" content="Data Statistics and Maps for Home and Fire Risk"></meta>
    <meta property="og:description" content={`Explore wildfire risk across the U.S. with the Fire Exposure Index. Search by ZIP code, view interactive maps, and understand your local fire hazard exposure. Know your risk to make informed decisions and find lower home insurance rates.`}></meta>
    <meta property="og:image" content="https://s3.us-west-1.amazonaws.com/www.fire-exposure-index.com/flames-icon.svg" />
    </>
)

// type TitleAndMetaContactProps ={
//     contact:'findanagent' | 'buyhomeins' | 'buycarins';
// }

// export const TitleAndMetaContact =({contact}:TitleAndMetaContactProps)=>(
//        <>
//        </>
// )

export default TitleAndMeta;