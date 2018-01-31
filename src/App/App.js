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
    const url = 'https://swapi.co/api/'

    const peopleData = this.getPeople()
    this.getData(url)
    this.setState({
      peopleData
    })
  }

  getData = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => data)    
  }

  getPeople = async () => {
    const getPeopleData = await fetch('https://swapi.co/api/people/')
    const cleanPeople = await getPeopleData.json()
    const mappedPeoples = cleanPeople.results.map( async (person) => {
      const name = person.name
      const getHomeworld = await fetch(person.homeworld)
      const cleanHomeworld = await getHomeworld.json()
      const homeworld = cleanHomeworld.name
      const worldPopulation = cleanHomeworld.population
      const fetchSpecies = await fetch(person.species)
      const cleanSpecies = await fetchSpecies.json()
      const speciesType = cleanSpecies.name
      console.log(cleanSpecies.name)
      return { name, homeworld, worldPopulation, speciesType }
    })
    return Promise.all(mappedPeoples)
  }

  // async componentDidMount () {
  //   const initialFetch = await fetch('https://swapi.co/api/')
  //   const { people } = await initialFetch.json()
  //   const staff = await this.fetchData(people)
  //   this.setState({ staff })
  // }

  // fetchData(arrayOfBios) {
  //   const unresolvedPromises = arrayOfBios.map(async (staffMember) => {
  //     let initialFetch = await fetch(staffMember.info)
  //     let bio = await initialFetch.json()
  //     return {...staffMember, ...bio}
  //   })
  //   return Promise.all(unresolvedPromises)
  // }

  render() {
    console.log(this.state)
    return (
     <Scroller />
    );
  }
}

export default App;
