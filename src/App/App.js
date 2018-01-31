import React, { Component } from 'react';
import './App.css';
import Scroller from './Scroller/Scroller'

class App extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
      favorites: []
    }
  }

  componentDidMount() {

  }

  // componentDidMount() {
  //   fetch('http://localhost:3001/api/frontend-staff')
  //     .then(response => response.json())
  //     .then(({ bio }) => this.fetchBios(bio))
  //     .then(staff => this.setState({staff}))
  // }

  // fetchBios(arrayOfBios) {
  //   const unresolvedPromises = arrayOfBios.map(staffMember => {
  //     return fetch(staffMember.info)
  //             .then(data => data.json())
  //             .then(bio => ({ ...staffMember, ...bio }))
  //   })
  //   return Promise.all(unresolvedPromises)
  // }

  // async componentDidMount () {
  //   const initialFetch = await fetch('http://localhost:3001/api/frontend-staff')
  //   const { bio } = await initialFetch.json()
  //   const staff = await this.fetchBios(bio)
  //   this.setState({ staff })
  // }

  // fetchBios(arrayOfBios) {
  //   const unresolvedPromises = arrayOfBios.map(async (staffMember) => {
  //     let initialFetch = await fetch(staffMember.info)
  //     let bio = await initialFetch.json()
  //     return {...staffMember, ...bio}
  //   })
  //   return Promise.all(unresolvedPromises)
  // }

  render() {
    return (
     <Scroller />
    );
  }
}

export default App;
