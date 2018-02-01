import React, { Component } from 'react';
import './App.css';
import Scroller from './Scroller/Scroller'

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

  componentDidMount() {
    const filmData = this.getFilms()
    const peopleData = this.getPeople()    
    const planetData = this.getPlanets()
    const vehicleData = this.getVehicles()
    this.setState({
      filmData,
      peopleData,
      planetData,
      vehicleData
    })
  }

  getFilms = async () => {
    const fetchFilmData = await fetch('https://swapi.co/api/films/')
    const cleanFilms = await fetchFilmData.json()
    const mappedFilms = cleanFilms.results.map( async film => {
      const title = film.title
      const episodeId = film.episode_id
      const openingCrawl = film.opening_crawl
      const releaseYear = film.release_date

      return { title, episodeId, openingCrawl, releaseYear }
    })
    return mappedFilms
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
    const residents = []
    
    const fetchPlanetData = await fetch('https://swapi.co/api/planets/')
    const cleanPlanets = await fetchPlanetData.json()
    
    const mappedPlanets = cleanPlanets.results.map( async (planet) => {
      const name = planet.name
      const terrain = planet.terrain
      const population = planet.population
      const climate = planet.climate
      const allResidents = planet.residents

      const residents = allResidents.map( async (resident) => {
        const fetchResidents = await fetch(resident)
        const cleanResidents = await fetchResidents.json()
        return cleanResidents.name
      })
      return { name, terrain, population, climate, residents }
    })
    return Promise.all(mappedPlanets)
  }

  getVehicles = async () => {
    const fetchVehicleData = await fetch('https://swapi.co/api/vehicles/')
    const cleanVehicles = await fetchVehicleData.json()
    const mappedVehicles = cleanVehicles.results.map( async (vehicle) => {
      const name = vehicle.name
      const model = vehicle.model
      const passengers = vehicle.passengers
      const vehicleClass = vehicle.vehicle_class

      return { name, model, passengers, vehicleClass }
    })
    return mappedVehicles
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
