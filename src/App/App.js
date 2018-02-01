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

  async componentDidMount() {
    const filmData = await this.getFilms()
    const peopleData = await this.getPeople()    
    const planetData = await this.getPlanets()
    const vehicleData = await this.getVehicles()
    await this.setState({
      filmData,
      peopleData,
      planetData,
      vehicleData
    })
  }

  fetchCleanData = async (url) => {
    const fetchData = await fetch(url)
    const cleanData = await fetchData.json()
    return cleanData
  }

  getFilms = async () => {
    const cleanFilms = await this.fetchCleanData('https://swapi.co/api/films/')
   
    const mappedFilms = cleanFilms.results.map( async (film) => {
      const title = film.title
      const episodeId = film.episode_id
      const openingCrawl = film.opening_crawl
      const releaseYear = film.release_date

      return { title, episodeId, openingCrawl, releaseYear }
    })
    return Promise.all(mappedFilms)
  }

  getPeople = async () => {
    const cleanPeople = await this.fetchCleanData('https://swapi.co/api/people/')

    const mappedPeoples = cleanPeople.results.map( async (person) => {
      const name = person.name

      const homeworldData = await this.fetchCleanData(person.homeworld)
      const homeworldName = homeworldData.name
      const homeworldPop = homeworldData.population
      
      const cleanSpecies = await this.fetchCleanData(person.species)
      const speciesType = cleanSpecies.name

      return { name, homeworldName, homeworldPop, speciesType }
    })
    return Promise.all(mappedPeoples)
  }

  getPlanets = async () => {    
    const cleanPlanets = await this.fetchCleanData('https://swapi.co/api/planets/')

    const mappedPlanets = cleanPlanets.results.map( async (planet) => {
      const name = planet.name
      const terrain = planet.terrain
      const population = planet.population
      const climate = planet.climate
      const allResidents = planet.residents

      let residents = allResidents.map( async (resident) => {
        const cleanResidents = await this.fetchCleanData(resident)
        return cleanResidents.name
      })
      residents = await Promise.all(residents)
      return { name, terrain, population, climate, residents }
    })
    return Promise.all(mappedPlanets)
  }

  getVehicles = async () => {
    const cleanVehicles = await this.fetchCleanData('https://swapi.co/api/vehicles/')
    const mappedVehicles = cleanVehicles.results.map( async (vehicle) => {
      const name = vehicle.name
      const model = vehicle.model
      const passengers = vehicle.passengers
      const vehicleClass = vehicle.vehicle_class

      return { name, model, passengers, vehicleClass }
    })
    return Promise.all(mappedVehicles)
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
