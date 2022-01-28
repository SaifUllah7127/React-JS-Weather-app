import axios from "axios";

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

export default getWeatherAndForecast;