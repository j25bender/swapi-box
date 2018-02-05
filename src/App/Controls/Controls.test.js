import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Nav from './Controls'

Enzyme.configure({ adapter: new Adapter() })

describe('Controls', () => {

    const mockFavoriteStateNum = 1

    it('matches the snapshot', () => {
        const wrapper = shallow(<Nav favs={mockFavoriteStateNum} />)
        
        expect(wrapper).toMatchSnapshot()
    })
    
})