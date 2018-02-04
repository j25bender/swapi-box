import React from 'react'
import ReactDOM from 'react-dom';
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from './App'
import dataHelper from './apiCalls/apiCalls'
import mockData from './mockData'

Enzyme.configure({ adapter: new Adapter() })

describe('App', () => {
  let wrapper
  let startState

  beforeEach(() => {
    wrapper = shallow(<App />, {disableLifecycleMethods: true});
    startState = {
      favorites: [],
      filmData: [],      
      peopleData: [],
      planetData: [],
      vehicleData: []
    }
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})





// describe('App Tests', () => {

//   beforeEach(() => {
//     const helper = new dataHelper()
//     const wrapper = shallow(<App />)
//       window.fetch = jest.fn().mockImplementation(() => {
//         return Promise.resolve({
//             ok: true,
//             status: 200,
//             json: () => Promise.resolve({
//                 results: mockData.movieData
//             })
//         }) 
//       })
//   })
//   it('should exist', async () => {
//     await expect(wrapper).toBeDefined();
//   });
// })