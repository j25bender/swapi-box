import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Scroller from './Scroller/Scroller'
import Nav from './Controls/Controls'
import dataHelper from './apiCalls/apiCalls'
import CardContainer from './CardContainer/CardContainer'
const helper = new dataHelper()

class App extends Component {
  constructor() {
    super();

    this.state = {
      favorites: [],
      filmData: [],      
      peopleData: [],
      planetData: [],
      vehicleData: []
    }
  }

  componentDidMount = async () => {
    const filmData = await helper.getFilms()
    const peopleData = await helper.getPeople()    
    const planetData = await helper.getPlanets()
    const vehicleData = await helper.getVehicles()
    await this.setState({
      filmData,
      peopleData,
      planetData,
      vehicleData
    })
  }

  selectCard = (cardData) => {
    cardData.favorite = !cardData.favorite
    const favs = this.state.favorites
    const noDupes = cardData.favorite === true ? [...favs, cardData] 
                                               : favs.filter( fav => fav !== cardData)
    this.setState({ favorites: noDupes })
  }

  render() {
    if(this.state.filmData) {
      console.log(this.state)
      return (
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" render={ () => (
              <Scroller fetch={ this.state.filmData } />
            )} />
            <Route path="/people" render={ () => (
              <CardContainer name="people" selectCard={this.selectCard} fetch={ this.state.peopleData } />
             )} />
             <Route path="/planet" render={ () => (
              <CardContainer name="planet" selectCard={this.selectCard} fetch={ this.state.planetData } />
             )} />
             <Route path="/vehicle" render={ () => (
              <CardContainer name="vehicle" selectCard={this.selectCard} fetch={ this.state.vehicleData } />
             )} />
             <Route path="/favorite/" render={ () => (
              <CardContainer name="favorite" selectCard={this.selectCard} fetch={ this.state.favorites } />
             )} />
          </Switch>
        </div>
      )
    } 
    return null
  }
}

export default App
