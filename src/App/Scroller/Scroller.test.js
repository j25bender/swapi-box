import React from 'react'
import Enzyme, {shallow, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Scroller from './Scroller'

Enzyme.configure({ adapter: new Adapter() })

describe('Scroller', () => {
    const mockselectCard = jest.fn()

    it('matches the snapshot', () => {
        const filmTextState = ["It is a dark time for the Rebellion.", "The Empire Strikes Back", "1980-05-17"]

        const wrapper = mount(<Scroller fetch={ filmTextState } />)
        expect(wrapper).toMatchSnapshot()
    })
})