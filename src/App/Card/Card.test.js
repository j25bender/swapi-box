import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Card from './Card'

Enzyme.configure({ adapter: new Adapter() })

describe('Card', () => {
    const  mockPlanet = { info: [
        "Climate": "arid", 
        "Name": "Tatooine", 
        "Population": "200000", 
        "Residents": ["Luke Skywalker"], 
        "Terrain": "desert"
    ]}

    const mockselectCard = jest.fn()

    it('matches the snapshot', () => {
        const wrapper = shallow(<Card data={mockPlanet} selectCard={mockselectCard} />)
        
        expect(wrapper).toMatchSnapshot()
    })
    
})