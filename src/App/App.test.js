import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from './App'
import dataHelper from './apiCalls/apiCalls'
import mockData from './mockData'

Enzyme.configure({ adapter: new Adapter() })
jest.mock('./apiCalls/apiCalls')
const helper = new dataHelper()

describe('App', () => {
    let wrapper
    let startState
  
    beforeEach(() => {    
        wrapper = shallow(<App />, {disableLifecycleMethods: true})
        startState = {
            favorites: [],
            filmData: [],      
            peopleData: [],
            planetData: [],
            vehicleData: []
        }
        wrapper.setState( startState)
    })

    it('matches the snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('state should start as empty array', () => {
        expect(wrapper.state().filmData).toEqual([])
    })

    it('peopleData should start as empty array', () => {
        expect(wrapper.state().peopleData).toEqual([])
    })

    it('planetData should start as empty array', () => {
        expect(wrapper.state().planetData).toEqual([])
    })

    it('vehicleData should start as empty array', () => {
        expect(wrapper.state().vehicleData).toEqual([])
    })

    it('favorites should start as empty array', () => {
        expect(wrapper.state().favorites).toEqual([])
    })

    it('selectCard updates state if cardData passed in is not a duplicate', () => {
      const cardData = {info: {
                        favorite: true,
                        Homeworld: "Tatooine",
                        Name: "C-3PO",
                        Population: "200000",
                        Species: "Droid"
                        }, favorite: false}
      wrapper.instance().selectCard(cardData)
      expect(wrapper.state().favorites).toEqual([cardData])
    })
    
})

