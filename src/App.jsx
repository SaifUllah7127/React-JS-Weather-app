import './App.css';
import Forecast from "./components/Forecast/Forecast";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState,useLayoutEffect} from 'react';
import axios from 'axios';



function App() {

  const [weatherAndForecastInfo, setWeatherAndForecastInfo] = useState({});
 useLayoutEffect( () => {
  async function getWeatherAndForecast() {
    const response = await axios.get(
      "https://api.weatherbit.io/v2.0/forecast/daily?",{
          params:{
              key:'c8854618dc4641359896b161a23a766f',
              city:"Raleigh",
            
          }
      });
  
    return response;
  }
    
       getWeatherAndForecast()
       .then((res)=>{ console.log(res.data)
        setWeatherAndForecastInfo(res.data);
      })
        
      }, []);
  return (
    <div className="App">
{/* 
     <Forecast weatherInfo={weatherAndForecastInfo}></Forecast> */}
      
    </div>
  );
}

export default App;
