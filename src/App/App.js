import React, { Component } from 'react';
import './App.css';
import Scroller from './Scroller/Scroller'
import getThatData from './apiCalls/apiCalls'

class App extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
      favorites: [],
      filmData: [],      
      peopleData: [],
      planetData: [],
      vehicleData: []
    }
  }

  componentDidMount = async() => {
    const allData = new getThatData()
    const filmData = await allData.getFilms()
    const peopleData = await allData.getPeople()    
    const planetData = await allData.getPlanets()
    const vehicleData = await allData.getVehicles()
    await this.setState({
      filmData,
      peopleData,
      planetData,
      vehicleData
    })
  }

  render() {
    console.log(this.state)
    return (
     <Scroller />
    //  <CardContainer peopleData={this.peopleData} />
    );
  }
}

export default App;
