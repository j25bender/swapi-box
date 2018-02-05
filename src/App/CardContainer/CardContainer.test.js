import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CardContainer from './CardContainer'

Enzyme.configure({ adapter: new Adapter() })

describe('CardContainer', () => {
    const mockselectCard = jest.fn()

    it('matches the snapshot', () => {
        const peopleState = [
            "favorite": false, 
            "info": {
                "Homeworld": "Naboo", 
                "Name": "Luke Skywalker", 
                "Population": 4500000000, 
                "Species": "Human"}
            ]

        const wrapper = shallow(<CardContainer name="people" selectCard={mockselectCard} fetch={ peopleState } />)
        
        expect(wrapper).toMatchSnapshot()
    })
})