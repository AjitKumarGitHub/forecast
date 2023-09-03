import React from "react";
import { useState, useRef,useEffect } from "react";
import linkIcon from './assesta/external-link.svg'
import Icon from './assesta/search_svg.svg';
import WeatherData from "./WeatherData";
function WeatherBox(){
    const API_key=`0e918296f1141628633ecaa2b634a499`;
    const [cityName,setCityName]=useState("Patna");
    
    
    const inputValue=useRef();
    
    
    
    const [myData, setMyData] = useState([]);
    const [cityDetails, setCityDetails] = useState([]);
    const [dataWeather, setDataWeather] = useState(null);
    const [windData, setWindData] = useState();

    useEffect(() => {
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_key}`;
      const getData = async () => {
        const response = await fetch(url);
        if(response.ok){
          const json = await response.json();
         console.log(json)
          setWindData(json.wind.speed);
          setMyData(json.main);
          setDataWeather(json);
          setCityDetails(json.sys);
          console.log(cityDetails);
        }
      }

      getData();
    },[cityName])
  
    const onkeydownHandler = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        setCityName(inputValue.current.value);
      }
    };
    const onSubmitHandler = (e) => {
      e.preventDefault();
      setCityName(inputValue.current.value);
    };

    const getTime = (timeStamp) => {
      return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
        timeStamp * 1000
      ).getMinutes()}`;
    };
// this is comment
// this is my app
    return(
        <div className="w-full h-auto">
           <div className=" justify-center  gap-3  p-auto bg-slate-700  h-auto mb-10 md:h-screen "> 
           <div className="bg-red-200  w-full m-auto  justify-center h-full ">
           <div className="flex flex-row"> 
           <div className=" w-2/3 h-auto  gap-1 flex flex-row justify-start ">
            <input type="text" placeholder="search city" ref={inputValue} onKeyDown={onkeydownHandler} className=" w-1/2 p-3 m-4  rounded-lg shadow-md justify-center cursor-pointer"/>
            <img
            style={{ cursor: "pointer" }}
            onClick={onSubmitHandler}
            src={Icon} className=" w-7"
            alt="searchIcon"
          />
             
         </div>
         {dataWeather && (
          <div className="flex flex-row gap-0 mr-0 pr-0">
          <h2 className="text-2xl font-bold text-slate-600">{dataWeather.name},{cityDetails.country}</h2>
          
          <h2><a
           href={`https://en.wikipedia.org/wiki/${cityName}`}
           target="_ "
         >
           <img src={linkIcon} alt="link"  width={30}/>
         </a> 
         </h2>
      </div>
         )}
         

         </div>
         {dataWeather && (
          <div className=" grid grid-cols-1 md:flex md:flex-row  justify-center justify-items-center md:justify-between mt-6">
          <div className="text-center md:text-left"> <img
         src={`https://openweathermap.org/img/wn/${dataWeather.weather[0].icon}@2x.png`}
            width={250}
            alt="icon"
          /></div>
          <div className="text-7xl text-white font-bold text-center ">{Math.round(myData.temp-273)}&deg;C
          <div>{dataWeather.weather[0].description}</div></div>
          <div className="text-2xl text-gray-600 font-medium flex flex-col md:flex-col text-center">
            <h3> Wind: {windData}&nbsp;mph</h3>
            <h3>min-temp: {myData.temp_min}</h3>
            <h3>max-temp: {myData.temp_max}</h3>
            <h3>feels_like: {myData.feels_like}</h3>
          </div>
        </div>
         )}
          

           
          
         <div className=" grid grid-cols-2 md:flex md:flex-row justify-between  mt-30">
            <div className=" bg-red-400 m-3 p-3 text-2xl font-serif font-bold rounded-lg shadow-slate-400 justify-center items-center text-center">
              <h2 >Sunrise</h2>
              <img
            src={
              "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/sunrise.svg"
            }
            width={150}
            alt="icon"
          />
          <h2>{getTime(cityDetails.sunrise)}</h2>
            </div>
            <div className=" bg-red-400 m-3 p-3 text-1xl md:text-2xl font-serif font-bold rounded-lg shadow-slate-400 text-center">
              <h2>Humidity</h2>
              <img
            src={
              "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/humidity.svg"
            }
            width={150}
            alt="icon"
          />
          <h2>{myData.humidity}&nbsp;mm</h2>
            </div>
            <div className=" bg-red-400 m-3 p-3  text-1xl md:text-2xl font-serif font-bold rounded-lg shadow-slate-400 text-center">
              <h2>Pressure</h2>
              <img
            src={
              "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/pressure-low.svg"
            }
            width={150}
            alt="icon"
          />
          <h2>{myData.pressure}&nbsp;mb</h2>
            </div>

            <div className=" bg-red-400 m-3 p-6 text-1xl md:text-2xl font-serif font-bold rounded-lg shadow-slate-400  relative text-center">
              <h2>wind</h2>
              <img
            src={"https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/wind.svg"}
            width={100}
            alt="icon"
          />
           <h2 className="absolute bottom-3">{windData}&nbsp;mph</h2>
            </div>
            <div className=" bg-red-400 m-3 p-3 text-1xl md:text-2xl font-serif font-bold rounded-lg shadow-slate-400  text-center">Sunset
            <img
            src={
              "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/sunset.svg"
            }
            width={150}
            alt="icon"
          />

          <h2 className="text-center">{getTime(cityDetails.sunset)}</h2>            
            </div>
            
         </div>

         <div className="m-3 text-2xl font-semibold flex flex-col justify-center justify-items-center text-center  bg-red-300 text-center">
          <div>All rights reseved <span className="text-3xl">|</span> Copyright @2023</div>
          <div>Made using OpenWeather API</div>
         </div>
          
        </div>
        
        </div>

        </div>
    );
}
export default WeatherBox;