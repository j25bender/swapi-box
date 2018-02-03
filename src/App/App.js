import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Scroller from './Scroller/Scroller'
import Nav from './Controls/Controls'
import dataHelper from './apiCalls/apiCalls'
import CardContainer from './CardContainer/CardContainer'
const help = new dataHelper()

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

  componentDidMount = async () => {
    const filmData = await help.getFilms()
    const peopleData = await help.getPeople()    
    const planetData = await help.getPlanets()
    const vehicleData = await help.getVehicles()
    await this.setState({
      filmData,
      peopleData,
      planetData,
      vehicleData
    })
  }

  render() {
    if(this.state.filmData) {
      console.log(this.state)
      return (
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" render={ () => (
              <Scroller fetch={ this.state.filmData} />
            )} />
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
    return null
  }
}

export default App;
