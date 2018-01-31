import React, { Component } from 'react';
import './App.css';
import Scroller from './Scroller/Scroller'

class App extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
      favorites: [],
      peopleData: []
    }
  }

  componentDidMount() {
    const planetData = this.getPlanets()
    // const peopleData = this.getPeople()
    this.setState({
      // peopleData
      planetData
    })
  }

  getPeople = async () => {
    const fetchPeopleData = await fetch('https://swapi.co/api/people/')
    const cleanPeople = await fetchPeopleData.json()
    const mappedPeoples = cleanPeople.results.map( async (person) => {
      const name = person.name

      const fetchHomeworld = await fetch(person.homeworld)
      const cleanHomeworld = await fetchHomeworld.json()
      const homeworld = cleanHomeworld.name
      const worldPopulation = cleanHomeworld.population

      const fetchSpecies = await fetch(person.species)
      const cleanSpecies = await fetchSpecies.json()
      const speciesType = cleanSpecies.name

      return { name, homeworld, worldPopulation, speciesType }
    })
    return Promise.all(mappedPeoples)
  }

  getPlanets = async () => {
    const fetchPlanetData = await fetch('https://swapi.co/api/planets/')
    const cleanPlanets = await fetchPlanetData.json()
    const mappedPlanets = cleanPlanets.results.map( async (planet) => {
      const name = planet.name
      const terrain = planet.terrain
      const population = planet.population
      const climate = planet.climate
      console.log(planet.residents)
      // const fetchResidents = await fetch(planet.residents)
      // const cleanResidents = await fetchResidents.json()
      // console.log(cleanResidents)
      return { name, terrain, population, climate }
    })
    return Promise.all(mappedPlanets)
  }

  render() {
    // console.log(this.state)
    return (
     <Scroller />
    //  <CardContainer peopleData={this.peopleData} />
    );
  }
}

export default App;
