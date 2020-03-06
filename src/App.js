import React from 'react'
import './App.css'
import WeatherForecast from "./components/WeatherForecast/WeatherForecast"

function App() {
  return (
    <div className="App">
      <main>
        <WeatherForecast />
      </main>
      <footer>
        Created by Justine Benoit
      </footer>
    </div>
  )
}

export default App
