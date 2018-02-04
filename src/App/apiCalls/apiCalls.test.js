import React from 'react'
import ReactDOM from 'react-dom'
import mockData from '../mockData'
import dataHelper from './apiCalls'

describe('API Call Tests', () => {
    const helper = new dataHelper()
    const expectedParams = 'https://swapi.co/API-CALL'

    beforeEach(() => {
        window.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                ok: true,
                status: 200,
                json: () => Promise.resolve({
                    results: mockData.peopleData
                })
            }) 
        })
    })

    it('should be called with the correct params', async () => {
        helper.fetchCleanData(expectedParams)
        expect(window.fetch).toHaveBeenCalledWith(expectedParams)
    })

    it('should return an object if status is ok', () => {
        expect(helper.fetchCleanData(expectedParams)).resolves.toEqual({results: mockData.peopleData})
    })

    it('throws an error when status is not ok', async () => {
        window.fetch = jest.fn().mockImplementation( () => {
            return Promise.reject({
                ok: false,
                status: 404,
                json: () => Promise.reject('Error')
            }) 
        })
        const error = await helper.fetchCleanData()
    })

    it('should clean film data', () => {
        window.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                ok: true,
                status: 200,
                json: () => Promise.resolve({
                    results: mockData.movieData
                })
            }) 
        })
        const filmText = helper.getFilms(mockData.movieData)
        expect(filmText).resolves.toEqual([["It is a dark time for the Rebellion.", "The Empire Strikes Back", "1980-05-17"]])
    })

    it('should clean people data', async () => {
        window.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                ok: true,
                status: 200,
                json: () => Promise.resolve({
                    results: mockData.peopleData
                })
            }) 
        })
        helper.getHomeNamePop = async () => {
            return await {name: "Naboo", population: 4500000000}}
        helper.getSpecies = async () => await {name: "Human"}

        const peopleInfo = helper.getPeople(mockData.peopleData)
        expect(peopleInfo).resolves.toEqual([{"favorite": false, "info": {"Homeworld": "Naboo", "Name": "Luke Skywalker", "Population": 4500000000, "Species": "Human"}}])
    })

    it('should receive an array of the correct number of residents', async () => {
        window.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                ok: true,
                status: 200,
                json: () => Promise.resolve({
                    results: mockData.planetData
                })
            }) 
        })
        const planetInfo = await helper.getPlanets
        (mockData.planetData)
        const numResidents = planetInfo[0].info.Residents.length
        expect(numResidents).toEqual(10)
    })

    it('should clean planet data', async () => {
        window.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                ok: true,
                status: 200,
                json: () => Promise.resolve({
                    results: mockData.planetData
                })
            }) 
        })
        helper.getResidents = async () => {
            return await ["Luke Skywalker"]
        }
        const planetInfo = helper.getPlanets
        (mockData.planetData)
        expect(planetInfo).resolves.toEqual([{"favorite": false, "info": {"Climate": "arid", "Name": "Tatooine", "Population": "200000", "Residents": ["Luke Skywalker"], "Terrain": "desert"}}])
    })

    it('should clean vehicle data', async () => {
        window.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                ok: true,
                status: 200,
                json: () => Promise.resolve({
                    results: mockData.vehicleData
                })
            }) 
        })
        const vehicleData = helper.getVehicles
        (mockData.vehicleData)
        expect(vehicleData).resolves.toEqual([{"favorite": false, "info": {"Class": "wheeled", "Model": "Digger Crawler", "Name": "Sand Crawler", "Passengers": "30"}}])
    })
})
