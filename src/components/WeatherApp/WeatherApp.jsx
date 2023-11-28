import React from 'react'
import './WeatherApp.css'
import search_icon from "../assets/search.png"
import clear_icon from "../assets/clear.png"
import cloud_icon from "../assets/cloud.png"
import dizzle_icon from "../assets/drizzle.png"
import humidity_icon from "../assets/humidity.png"
import rain_icon from "../assets/rain.png"
import wind_icon from "../assets/wind.png"
import snow_icon from "../assets/snow.png"


const WeatherApp = () => {
  return (
    <div className='container'>
            <div className="top-bar">
                <input type="text" />
                <div className='search-icon'>
                    <img src={search_icon} alt="" />
                </div>
            </div>
            <div className='main-container'>
              <div className="temp-data">
                <img src={cloud_icon} alt="" />
                <div className="text">
                  <p className='temperature'>24 &#176; C</p>
                  <p>Nagpur</p>

                </div>
              </div>
            </div>
            <div className='other'>
              <div className='other-details'>
                <img src={humidity_icon} alt="" />
                <p>40%humility</p>
              </div>
              <div className='other-details'>
                <img src={wind_icon} alt="" />
                <p>300kmps</p>
              </div>
            </div>
    </div>
  )
}

export default WeatherApp