import React, { useEffect } from 'react'
import {useState} from 'react'
import './Searchbox.css'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import AirIcon from '@mui/icons-material/Air';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';

function Searchbox(props) {
  let [city , setCity]= useState('');
  let [weather , setWeather]= useState({});

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

    
    let result ={
      city:city,
      temp:jsonResponse.main.temp,
      tempMin:jsonResponse.main.temp_min,
      tempMax:jsonResponse.main.temp_max,
      humidity:jsonResponse.main.humidity,
      wea:jsonResponse.weather[0].description,
      icon:jsonResponse.weather[0].icon,
      speed:jsonResponse.wind.speed
    };
    console.log(result);
    setWeather(result);
  }

  useEffect(()=>{
    getweatherinfo('Mumbai')
  },[])
  

  return (
    <div>
      <div className="weather">
        <form onSubmit={handlesubmit} className="form">
          <input className="text-box" type="text" placeholder=""  onChange={handlechanege} value={city}  required/>
          <label className="form-label">Enter City Name</label>
          <button className="button"  type="submit" >Submit</button>
        </form>

        <div className={`card`}>
          <div className={`card-content`}>
            <div  className = {`card-title`}>
              <span><PlaceOutlinedIcon/></span>
              <span><h3>  {weather.city} Weather </h3></span>
            </div>
            <div className = {`card-image` }>
              <img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="" />
            </div>
          
            <div className = {`temp_w`}>
              <div className={`temperature`} >{weather.temp} ℃</div>
              <div >{weather.wea}</div>
            </div>
          </div>

          <div className='temp_auto'>
          <div className='space-temp'>
            <div className = {`temp_M`}>
              <div>Max Temp : {weather.tempMax}℃</div>
              <div >Min Temp  : {weather.tempMin}℃</div>
            </div>
            <div className = {`humidity_speep`}>
              <div className="huminity">
              <span><WaterDropOutlinedIcon/></span>
              <span> Huminity : {weather.humidity}</span>
              </div>             
              <div className='speed'>
              <span><AirIcon/></span>
              <span > WindSpeed : {weather.speed} m/s</span>
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
