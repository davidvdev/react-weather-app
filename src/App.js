import React, { useState } from 'react'

import Form from './components/Form'
import WeatherInfo from './components/WeatherInfo'
import './App.css';

function App() {

  // API Key
  const apiKey = "8c2a956efdd9330a6b7d0bece1ea5627"

  // Set State
  const [weatherData, setWeatherData] = useState(null)
  const [fiveDay, setFiveDay] = useState(null)

  const submitRequest = async (zip) => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid=${apiKey}`)
    const data = await response.json()
    console.log(data)
    setWeatherData(data)

    const fiveDayResponse = await fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${zip},us&units=imperial&appid=${apiKey}`)
    const fiveDayData = await fiveDayResponse.json()
    console.log(fiveDayData)
    setFiveDay(fiveDayData)
  }

  return (
    <div className="App">
      <h1>What's the Weather?</h1>
      <Form handleSubmit={submitRequest} />
      <WeatherInfo weatherData={weatherData} fiveDay={fiveDay}/>
    </div>
  );
}

export default App;
