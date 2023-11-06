import React from 'react'
import { useState } from 'react';
import getCityData from './api';

function App() {


  
  const [city, setCity] = useState("");
  const [cityData, setCityData] = useState([]);
  console.log(city);

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    const result = await getCityData(city)
    setCityData(result)
  }

  if (cityData.length !== 0) {
    var temperature = cityData.main.temp
    var description = cityData.weather[0].main
    var humidity = cityData.main.humidity
    var wind = cityData.wind.speed
  }

  return (
    <div>
      <div className="container mx-auto flex items-center justify-center h-screen">
        <div
          className="flex flex-col justify-start items-center relative rounded-2xl z-10 bg-white bg-opacity-20 backdrop-blur-md p-5 space-y-5 weatherContainer transition-all duration-500  overflow-hidden w-1/3">
          <form className="flex justify-center items-center relative z-10 w-full" onSubmit={handleFormSubmit}>
            <svg className="fill-white h-6 absolute left-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24">
              <path
                d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
            </svg>
            <input
              className="search-input w-full bg-transparent placeholder:text-white px-10 border border-gray-300 rounded-lg py-2 focus:outline-none ring-0"
              type="text"
              placeholder="ara bakalım"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button className="absolute right-2 search">
              <svg className="h-6 stroke-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
              </svg>
            </button>
          </form>
          <div className="flex flex-col w-full weatherData transition-all duration-1000 delay-500 overflow-hidden">
            <div className="text-center flex flex-col justify-center">
              <img src={`/${description}.png`} className="weatherImage max-h-40 object-contain" draggable="false" alt='' />
              <p className="weatherTemperature !font-bold text-white text-3xl">{temperature}</p>
              <p className="weatherDescription !font-bold text-white text-xl">{description}</p>
            </div>
            <div className="flex justify-between !font-bold text-white mt-5">
              <div className="flex space-x-1 items-center">
                <svg className="h-8 stroke-white" viewBox="0 0 1.2 1.2" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1 .729C1 .938.817 1.1.6 1.1S.2.938.2.729C.2.6.265.473.336.371.407.268.49.185.534.143M1 .729.534.143M1 .729A.652.652 0 0 0 .864.372 1.515 1.515 0 0 0 .666.144a.096.096 0 0 0-.132 0M1 .729.534.143"
                    stroke="#fff" strokeWidth=".1" />
                  <path d="M.6.9A.2.2 0 0 1 .4.7" stroke="#fff" strokeWidth=".1" strokeLinecap="round" />
                </svg>
                <div>
                  <div className="weatherHumidity">{humidity}</div>
                  <p className="text-xs">Humidity</p>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <svg className="h-8 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 10h-11v-2h11c.552 0 1-.448 1-1s-.448-1-1-1c-.403 0-.747.242-.905.587l-1.749-.956c.499-.965 1.494-1.631 2.654-1.631 3.971 0 3.969 6 0 6zm7 7c0-1.656-1.344-3-3-3h-15v2h15c.552 0 1 .448 1 1s-.448 1-1 1c-.403 0-.747-.242-.905-.587l-1.749.956c.499.965 1.494 1.631 2.654 1.631 1.656 0 3-1.344 3-3zm1.014-7.655c.082-.753.712-1.345 1.486-1.345.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5h-20.5v2h20.5c1.932 0 3.5-1.568 3.5-3.5s-1.568-3.5-3.5-3.5c-1.624 0-2.977 1.116-3.372 2.617l1.886.728z" /></svg>
                <div>
                  <p className="weatherWind">{wind}</p>
                  <p className="text-xs">Wind Speed</p>
                </div>
              </div>
            </div>
          </div>
          <div className="weatherError">
            <img src="./assets/img/error.png" alt="" />
          </div>
        </div>
        <div className="absolute top-0 left-0 h-full w-full">
          <img className="h-full w-full object-cover" src="https://picsum.photos/1920/1080" alt="" />
        </div>
      </div>
    </div>
  )
}

export default App