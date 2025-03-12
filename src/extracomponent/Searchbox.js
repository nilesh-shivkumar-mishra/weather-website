import React, { useEffect } from 'react'
import {useState} from 'react'
import './Searchbox.css'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined'; //material ui icons
import AirIcon from '@mui/icons-material/Air'; //material ui icons
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';  // //material ui icons

// imgage for weather condition

import clouds from "../clouds.png"
import mist from "../cloud.png"
import clear from "../clear.png"
import rain from "../rain.png"
import snow from "../snow.png"
import overcast  from "../overcast.png"
import brokencloud  from "../broken.png"
import haze  from "../humidity.png"
import 	thunderstorm  from "../thunderstorm.png"
import 	scatteredclouds  from "../scattered.png"



function Searchbox(props) {
  const [cityNotFound, setCityNotFound] = useState(false);
  let [city , setCity]= useState('');
  let [weatherdata , setWeatherdata]= useState({});

  let handlechanege = (evt)=>{
    console.log("hi")
    setCity(evt.target.value)
  };

  let handlesubmit =(evt)=>{
      evt.preventDefault();
      console.log(city);
      getweatherinfo(city);
      setCity("");
   
  }

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY ="125be580cf56f636075936141071bf65";

  let getweatherinfo = async(city)=>{
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse = await response.json();
      console.log(jsonResponse);


      if (jsonResponse.cod === "404") {
        // If city is not found, set cityNotFound to true
        setCityNotFound(true);

        setTimeout(() => {
          setCityNotFound(false);
        }, 5000);

      } else {
        // If city is found, set the weather data
        setCityNotFound(false);

        let result ={
          city:city,
          temp:jsonResponse.main.temp,
          tempMin:jsonResponse.main.temp_min,
          tempMax:jsonResponse.main.temp_max,
          humidity:jsonResponse.main.humidity,
          weatherdes:jsonResponse.weather[0].description,
          // mai:jsonResponse.weather[0].main,   // main se bhi hum log weather condition img change kar sakta hai
          // icon:jsonResponse.weather[0].icon,  // icon for feacting weather econdition img from website
          speed:jsonResponse.wind.speed
        };
        console.log(result);
        setWeatherdata(result);
        
    };

  }

  useEffect(()=>{
    getweatherinfo('Mumbai')
  },[])
  

  return (
    <div>
      <div className="weather">
        <div  className='cityc' >
        {cityNotFound && <p>Search City Name is Not Available in API</p>}
        </div>
     
        <form onSubmit={handlesubmit} className="form">
          <input className="text-box" type="text" placeholder=""  onChange={handlechanege} value={city}  required/>
          <label className="form-label">Enter City Name</label>
          <button className="button"  type="submit" >Submit</button>
        </form>

        <div className={`card`}>
          <div className={`card-content`}>
            <div  className = {`card-title`}>
              <span><PlaceOutlinedIcon/></span>
              <span><h3>  {weatherdata.city} Weather </h3></span>
            </div>
            <div className = {`card-image` }>
              <img src={weatherdata.weatherdes === "smoke"?clear:weatherdata.weatherdes === "scattered clouds"?scatteredclouds:weatherdata.weatherdes === "clear sky"?clear:weatherdata.weatherdes === "few clouds"?clouds:weatherdata.weatherdes === "shower rain"?rain:weatherdata.weatherdes === "overcast clouds"?overcast:weatherdata.weatherdes === "mist"?mist:weatherdata.weatherdes === "snow"?snow:weatherdata.weatherdes === "broken clouds"?brokencloud :weatherdata.weatherdes === "haze"?haze:weatherdata.weatherdes === "rain"?clouds :weatherdata.weatherdes === "thunderstorm"?thunderstorm:clear } alt="loDING" />
              {/* <img src={`https://openweathermap.org/img/wn/${weatherdata.icon}@2x.png`} alt="" /> // feacting weather econdition img from website  */} 
            </div>
          
            <div className = {`temp_w`}>
              <div className={`temperature`} >{weatherdata.temp} ℃</div>
              <div >{weatherdata.weatherdes}</div>
            </div>
          </div>

          <div className='temp_auto'>
          <div className='space-temp'>
            <div className = {`temp_M`}>
              <div>Max Temp : {weatherdata.tempMax}℃</div>
              <div >Min Temp  : {weatherdata.tempMin}℃</div>
            </div>
            <div className = {`humidity_speep`}>
              <div className="huminity">
              <span><WaterDropOutlinedIcon/></span>
              <span> Huminity : {weatherdata.humidity}</span>
              </div>             
              <div className='speed'>
              <span><AirIcon/></span>
              <span > WindSpeed : {weatherdata.speed} m/s</span>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Searchbox;
