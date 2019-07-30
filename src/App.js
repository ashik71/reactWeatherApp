import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css'
import './App.css';
import Weather from './components/weather';
import Form from './components/form';
const APIKEY = 'add075e6f76426f0a2cce47a0d6d5f07';

class App extends Component {

  constructor() {
    super();
    this.state = {
      weather: {},
      city: '',      
      coord: {},
      wind: {},
      icon: '',
      sys:{},
      description:'',
      wind : {},
      error: false
    }
  };










  getWeather = async e => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    if (country && city) {
      const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}`);
      const weatherData = await data.json();
      console.log(weatherData);

      this.setState({
        weather: weatherData.main,
        city: `${weatherData.name}, ${weatherData.sys.country}`,        
        coord: weatherData.coord,
        sys: weatherData.sys,
        description :weatherData.weather[0].description,
        wind: weatherData.wind,
        icon: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`,
        error:false
      });

    } else {
      this.setState({
        error: true
      })
    }


    // this.setState(({
    //   weather: weatherData.main,
    //   city: weatherData.name,   
    //   country: weatherData.sys.country, 
    //   icon: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
    // }));

  }

  render() {
    return (
      <div className="App">
        <Form loadweather={this.getWeather} error={this.state.error} />
        <Weather
          weather={this.state.weather}
          city={this.state.city}
          icon={this.state.icon}
          coord = {this.state.coord}
          sys= {this.state.sys}
          description ={this.state.description}
          wind= {this.state.wind}
        />
      </div>
    );
  }
}

export default App;
