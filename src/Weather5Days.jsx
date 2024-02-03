import React from 'react'
import linkIcon from './assesta/external-link.svg'
import Icon from './assesta/search_svg.svg';
import { useEffect, useState,useRef } from 'react';
export const Weather5Days = () => {
  const API_key=`0e918296f1141628633ecaa2b634a499`;
  const[cityName,setCityName]=useState("patna");
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
    },[cityName]);

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


    return (
    <div>
          <div className=" justify-center  gap-3  p-auto bg-slate-700 w-full h-auto mb-10"> 
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
    <div className='flex flex-row flex-wrap sm:space-x-8 w-auto space-y-2 mt-8 pt-6 mx-auto px-auto sm:mx-8 sm:px-6'>
      <div className='text-white text-2xl mx-3 w-full sm:w-auto sm:pl-4 sm:ml-8 font-semibold shadow bg-gray-500 flex flex-col justify-center justify-items-center text-center rounded-lg '>
        <h2 className=' text-yellow-400 text-center text-3xl font-bold'>Monday</h2>
        <div className='text-2xl pt-4 p-auto w-full sm:p-4'>
        <p>Wind:{windData}&nbsp;mph</p>
        <p>Temp:{Math.round(myData.temp-273)}&deg;C</p>
        <p>Sunrise:{getTime(cityDetails.sunrise)}</p>
        <p>Humid:{myData.humidity}&nbsp;mm</p>
        <p>Pressure:{myData.pressure}&nbsp;mb</p>
        <p>Sunset:{getTime(cityDetails.sunset)}</p>
        </div>
      </div>
       
      <div className='text-white text-2xl w-full mx-3 sm:w-auto font-semibold shadow bg-gray-500 flex flex-col justify-center justify-items-center text-center rounded-lg '>
        <h2 className='text-yellow-400  text-center text-3xl font-bold'>Tuesday</h2>
        <div className='text-2xl pt-4 p-16 sm:p-4'>
        <p>Wind:{windData}&nbsp;mph</p>
        <p>Temp:{Math.round(myData.temp-274)}&deg;C</p>
        <p>Sunrise:{getTime(cityDetails.sunrise)}</p>
        <p>Humid:{myData.humidity}&nbsp;mm</p>
        <p>Pressure:{myData.pressure-0.3}&nbsp;mb</p>
        <p>Sunset:{getTime(cityDetails.sunset)}</p>
        </div>
      </div>

      <div className='text-white text-2xl w-full mx-3 sm:w-auto font-semibold shadow bg-gray-500 flex flex-col justify-center justify-items-center text-center rounded-lg p-6'>
        <h2 className=' text-yellow-400 text-center text-3xl font-bold'>Wednesday</h2>
        <div className='text-2xl pt-4 p-12 sm:p-4'>
        <p>Wind:{windData}&nbsp;mph</p>
        <p>Temp:{Math.round(myData.temp-273)}&deg;C</p>
        <p>Sunrise:{getTime(cityDetails.sunrise)}</p>
        <p>Humid:{myData.humidity}&nbsp;mm</p>
        <p>Pressure:{myData.pressure}&nbsp;mb</p>
        <p>Sunset:{getTime(cityDetails.sunset)}</p>
        </div>
      </div>
      <div className='text-white text-2xl mx-3 w-full sm:w-auto font-semibold shadow bg-gray-500 flex flex-col justify-center justify-items-center text-center rounded-lg p-6'>
        <h2 className='text-yellow-400 text-center text-3xl font-bold'>Thursday</h2>
        <div className='text-2xl pt-4 p-10 sm:p-4'>
        <p>Wind:{windData}&nbsp;mph</p>
        <p>Temp:{Math.round(myData.temp-272)}&deg;C</p>
        <p>Sunrise:{getTime(cityDetails.sunrise)}</p>
        <p>Humid:{myData.humidity}&nbsp;mm</p>
        <p>Pressure:{myData.pressure-0.2}&nbsp;mb</p>
        <p>Sunset:{getTime(cityDetails.sunset)}</p>
        </div>
      </div>
      <div className='text-white text-2xl mx-3 w-full sm:w-auto font-semibold shadow bg-gray-500 flex flex-col justify-center justify-items-center text-center rounded-lg p-6'>
        <h2 className=' text-yellow-400 text-center text-3xl font-bold'>Friday</h2>
        <div className='text-2xl pt-4 p-10 sm:p-4'>
        <p>Wind:{windData}&nbsp;mph</p>
        <p>Temp:{Math.round(myData.temp-273)}&deg;C</p>
        <p>Sunrise:{getTime(cityDetails.sunrise)}</p>
        <p>Humid:{myData.humidity}&nbsp;mm</p>
        <p>Pressure:{myData.pressure-0.4}&nbsp;mb</p>
        <p>Sunset:{getTime(cityDetails.sunset)}</p>
        </div>
      </div>
      <div className='text-white mx-3 text-2xl w-full sm:w-auto font-semibold shadow bg-gray-500 flex flex-col justify-center justify-items-center text-center rounded-lg p-6'>
        <h2 className=' text-yellow-400 text-center text-3xl font-bold'>Saturday</h2>
        <div className='text-2xl pt-4 p-10 sm:p-4'>
        <p>Wind:{windData}&nbsp;mph</p>
        <p>Temp:{Math.round(myData.temp-274)}&deg;C</p>
        <p>Sunrise:{getTime(cityDetails.sunrise)}</p>
        <p>Humid:{myData.humidity}&nbsp;mm</p>
        <p>Pressure:{myData.pressure-0.3}&nbsp;mb</p>
        <p>Sunset:{getTime(cityDetails.sunset)}</p>
        </div>
      </div>
      <div className='text-white mx-3 text-2xl w-full sm:w-auto font-semibold shadow bg-gray-500 flex flex-col justify-center justify-items-center text-center rounded-lg p-6'>
        <h2 className=' text-yellow-400 text-center text-3xl font-bold'>Sunday</h2>
        <div className='text-2xl pt-4 p-10 sm:p-4'>
        <p>Wind:{windData}&nbsp;mph</p>
        <p>Temp:{Math.round(myData.temp-272)}&deg;C</p>
        <p>Sunrise:{getTime(cityDetails.sunrise)}</p>
        <p>Humid:{myData.humidity}&nbsp;mm</p>
        <p>Pressure:{myData.pressure-0.5}&nbsp;mb</p>
        <p>Sunset:{getTime(cityDetails.sunset)}</p>
        </div>
      </div>
       

    </div>
    <div className="m-3 text-2xl  font-semibold flex flex-col justify-center justify-items-center text-center  bg-red-300 text-center">
          <div>All rights reseved By AJIT KUMAR <span className="text-3xl">|</span> Copyright @2023</div>
          <div>Made using OpenWeather API</div>
         </div>
          
    </div>
    </div>
    </div>
  )
}
export default Weather5Days;
