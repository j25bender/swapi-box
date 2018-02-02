import React, { Component } from 'react';
import './App.css';
import Scroller from './Scroller/Scroller'
import getThatData from './apiCalls/apiCalls'
import { Switch, Route } from 'react-router-dom'
import CardContainer from './CardContainer/CardContainer'

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
      <div>
        <Switch>
          <Route exact path="/" component={ Scroller } /> 
          <Route path="/people" render={ () => (
            <CardContainer name="people" fetch={ this.state.peopleData } />
           )} />
           <Route path="/planet" render={ () => (
            <CardContainer name="planet" fetch={ this.state.planetData } />
           )} />
           <Route path="/vehicle" render={ () => (
            <CardContainer name="vehicle" fetch={ this.state.vehicleData } />
           )} />
        </Switch>
      </div>
    );
  }
}

export default App;
