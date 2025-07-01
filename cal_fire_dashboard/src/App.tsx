import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

const API_URL = import.meta.env.VITE_API_URL;


function App() {
  const [apiData, setapiData] = useState<string|null>(null)
 
  useEffect(()=>{
    
    const fetchData =  async() =>{
      try{
    
        const data =  await axios.get(API_URL)
        console.log('this is the data', data)
        setapiData(data.data);
      } catch(err){
        // intentionally left blank
      }
    }
    fetchData();
  },[])


  const renderData = apiData?(<h1>{apiData}</h1>):(<h1>Loading Data...</h1>)
  return (
    <>
      {renderData}
    </>
  )
}

export default App
