# Weather App
This is a simple weather web application using the Open Weather Map API which displays the current weather on the city name a user has entered.

## Initialize Project
In your terminal, navigate to the directory you choose to place your project in.
Next, enter the following command:
```bash
npm create-react-app weather-app
```
Once complete, navigate to your project's directory by running:
```bash
cd weather-app
```
Then initialize your development server by running:
```bash
npm start
```
This will open up http://localhost:3000/ in your browser with the default React page displayed.

## Setup Component Structure
There are three components to this app:
1. Weather forecast search form
2. Weather forecast search result
3. Graphics (optional/just for fun)

In your src folder, create a new folder & name it 'components'. Under src/components, create the following directories:
1. WeatherForecast
2. WeatherConditions
3. WeatherGraphics

Under these directories, create .js & .css files within their corresponding directory names. Your directories should be as follows:
```html
1. WeatherForecast
   > WeatherForecast.css
   > WeatherForecast.js
2. WeatherConditions
   > WeatherConditions.css
   > WeatherConditions.js
3. WeatherGraphics
   > WeatherGraphics.css
   > WeatherGraphics.js
```

## Modify /public/index.html
In this file, change the text inside the ``<title>`` tag to ``Weather App`` or any name you choose.

## Modify /src/App.js
Omit the default code and modify with the code below:
```react
import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <main>
        {/* insert weather forecast component here /*}
      </main>
      <footer>
        Created by Your Name
      </footer>
    </div>
  )
}

export default App
```

## Modify /src/App.css
Omit the `header` styles and add some styling to the `main` & `footer` elements you just added. Modify the `.App` class also to your desired aesthetic.

## Open Weather Map API
Visit RapidAPI's Open Weather Map API page: https://rapidapi.com/community/api/open-weather-map
You must subscribe in order to use this API's endpoints. There is a free subscription plan for a maximum of 100 API calls per day, which you shouldn't need more of when building this project.
For this project, we are using the `GET Current Weather Data` endpoint. On the far right column, you will find code snippets. We will be using the JavaScript(fetch) code snippet to retrieve the current weather data on the input city name.

## WeatherForecast.js
This is the app's main component where we will build a search form with radio button filters, which filter the results to metric or imperial. We will also be importing our WeatherConditions (search results) and WeatherGraphics (fun graphics) components in here.
## WeatherForecast.css
This is where we style our form components. We are using high-contrast colors & larger font for easy readability, & hover effects to emphasize the interactions with the form elements.

## WeatherConditions.js
This is where the search results will be displayed. We want to extract the result object's city name, temperature, weather condition's description, & (to give the user a visual on the description) its icon.
This is also where the error message will be displayed, should there be a failed fetch result. The emoji is there to make the user not feel like the error was their fault.
## WeatherConditions.css
This is where we style our results and error elements. Again, I made use of high-contrast colors & larger font for better visibility. The content is displayed in a vertical flow for a natural flow of reading. I added a drop-shadow effect to the results box for emphasis.
For the error message, I used a soft red color so as not to make the error message feel threatening to the user.

## WeatherGraphics.js & WeatherGraphics.css
These are the fun weather graphics that you see in the app. It's there to engage the user and to establish that this is a weather app.
The code for this was pulled from http://cssdeck.com/labs/cloud-sun-rain-thunder-snow-animations-in-css3. I only changed the `background-color` to match my app's UI.

## Import WeatherForecast.js to App.js
Remember to import your WeatherForecast component into your App.js file. Your code should now look like this:
```react
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

```
## Sources
To build this app, I used RapidAPI's tutorial on How To Create a Weather App with React (OpenWeatherMap API) as a guide. https://rapidapi.com/blog/weather-app-react/
