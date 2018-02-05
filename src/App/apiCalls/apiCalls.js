 class dataHelper {
    fetchCleanData = async (url) => {
        try {
            const fetchData = await fetch(url)
            const cleanData = await fetchData.json()
            return cleanData
        } catch(err) {
            throw new Error('Error')
        }
    }

    getFilms = async () => {
        const cleanFilms = await this.fetchCleanData('https://swapi.co/api/films/')

        const mappedFilms = 
        cleanFilms.results.map( async (film) => {
            const openingCrawl = film.opening_crawl
            const name = film.title            
            const releaseYear = film.release_date         
            return [ openingCrawl, name, releaseYear ]
        })
        return Promise.all(mappedFilms)
    }

    getPeople = async () => {
        const cleanPeople = await this.fetchCleanData('https://swapi.co/api/people/')
        const mappedPeoples = cleanPeople.results.map( async (person) => {
            const Name = person.name

            const homeworldNamePop = await this.getHomeNamePop(person.homeworld)
            const Homeworld = homeworldNamePop.name
            const Population = homeworldNamePop.population

            const speciesName = await this.getSpecies(person.species)
            const Species = speciesName.name
            const info = { Name, Homeworld, Population, Species }
            const favorite = false

            return { info, favorite }
        })
        return Promise.all(mappedPeoples)
    }

    getHomeNamePop = async (homeworldNamePop) => { 
        return await this.fetchCleanData(homeworldNamePop)
    }

    getSpecies = async (personSpecies) => {
        return await this.fetchCleanData(personSpecies)
    }

    getPlanets = async () => {    
        const cleanPlanets = await this.fetchCleanData('https://swapi.co/api/planets/')
        const mappedPlanets = cleanPlanets.results.map( async (planet) => {
            const Name = planet.name
            const Terrain = planet.terrain
            const Population = planet.population
            const Climate = planet.climate
            const Residents = await this.getResidents(planet.residents)
            const info = { Name, Terrain, Population, Climate, Residents }
            const favorite = false

            return { info, favorite }
        })
        return Promise.all(mappedPlanets)
    }

    getResidents = (planetResidents) => {
        let residents = planetResidents.map( async (resident) => {
            const cleanResidents = await this.fetchCleanData(resident)
              return cleanResidents.name
            })
        const theResidents = residents
        
        return Promise.all(theResidents)
    }

    getVehicles = async () => {
        const cleanVehicles = await this.fetchCleanData('https://swapi.co/api/vehicles/')
        const mappedVehicles = cleanVehicles.results.map( async (vehicle) => {
            const Name = vehicle.name
            const Model = vehicle.model
            const Passengers = vehicle.passengers
            const Class = vehicle.vehicle_class

            const info = { Name, Model, Passengers, Class }
            const favorite = false

            return { info, favorite }
        })
        return Promise.all(mappedVehicles)
    }
 }

export default dataHelper;