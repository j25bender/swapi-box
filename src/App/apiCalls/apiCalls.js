 class getThatData {
    fetchCleanData = async (url) => {
        const fetchData = await fetch(url)
        const cleanData = await fetchData.json()
        return cleanData
    }

    getFilms = async () => {
        const cleanFilms = await this.fetchCleanData('https://swapi.co/api/films/')

        const mappedFilms = cleanFilms.results.map( async (film) => {
            const title = film.title
            const episodeId = film.episode_id
            const openingCrawl = film.opening_crawl
            const releaseYear = film.release_date

            return { title, episodeId, openingCrawl, releaseYear }
        })
        return Promise.all(mappedFilms)
    }

    getPeople = async () => {
        const cleanPeople = await this.fetchCleanData('https://swapi.co/api/people/')

        const mappedPeoples = cleanPeople.results.map( async (person) => {
            const name = person.name

            const homeworldNamePop = await this.getHomeNamePop(person.homeworld)
            const homeworldName = homeworldNamePop.name
            const homeworldPop = homeworldNamePop.population

            const speciesName = await this.getSpecies(person.species)
            const speciesType = speciesName.name

            return { name, homeworldName, homeworldPop, speciesType }
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
            const name = planet.name
            const terrain = planet.terrain
            const population = planet.population
            const climate = planet.climate

            const residents = await this.getResidents(planet.residents)

            return { name, terrain, population, climate, residents }
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
            const name = vehicle.name
            const model = vehicle.model
            const passengers = vehicle.passengers
            const vehicleClass = vehicle.vehicle_class

            return { name, model, passengers, vehicleClass }
        })
        return Promise.all(mappedVehicles)
    }
 }

export default getThatData;