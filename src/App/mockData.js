const mockData = {
    movieData: [{
        'title': 'The Empire Strikes Back',
        'episode_id': 5,
        'opening_crawl': 'It is a dark time for the Rebellion.',
        'director': 'Irvin Kershner',
        'producer': 'Gary Kurtz, Rick McCallum',
        'release_date': '1980-05-17',
        'characters': [
            'https://swapi.co/api/people/1/', 
        ],
        'planets': [
            'https://swapi.co/api/planets/4/',
        ],
        'starships': [
            'https://swapi.co/api/starships/15/',
        ],
        'vehicles': [
            'https://swapi.co/api/vehicles/8/',
        ],
        'species': [
            'https://swapi.co/api/species/6/',
        ],
        'created': '2014-12-12T11:26:24.656000Z',
        'edited': '2017-04-19T10:57:29.544256Z',
        'url': 'https://swapi.co/api/films/2/'
    }],
    peopleData: [{
        'name': 'Luke Skywalker',
        'height': '172',
        'mass': '77',
        'hair_color': 'blond',
        'skin_color': 'fair',
        'eye_color': 'blue',
        'birth_year': '19BBY',
        'gender': 'male',
        'homeworld': 'https://swapi.co/api/planets/1/',
        'films': [
            'https://swapi.co/api/films/2/',
            'https://swapi.co/api/films/6/',
            'https://swapi.co/api/films/3/',
            'https://swapi.co/api/films/1/',
            'https://swapi.co/api/films/7/'
        ],
        'species': [
            'https://swapi.co/api/species/1/'
        ],
        'vehicles': [
            'https://swapi.co/api/vehicles/14/',
            'https://swapi.co/api/vehicles/30/'
        ],
        'starships': [
            'https://swapi.co/api/starships/12/',
            'https://swapi.co/api/starships/22/'
        ],
        'created': '2014-12-09T13:50:51.644000Z',
        'edited': '2014-12-20T21:17:56.891000Z',
        'url': 'https://swapi.co/api/people/1/'
    }],
    vehicleData: [{
        'name': 'Sand Crawler',
        'model': 'Digger Crawler',
        'manufacturer': 'Corellia Mining Corporation',
        'cost_in_credits': '150000',
        'length': '36.8',
        'max_atmosphering_speed': '30',
        'crew': '46',
        'passengers': '30',
        'cargo_capacity': '50000',
        'consumables': '2 months',
        'vehicle_class': 'wheeled',
        'pilots': [],
        'films': [
            'https://swapi.co/api/films/5/',
            'https://swapi.co/api/films/1/'
        ],
        'created': '2014-12-10T15:36:25.724000Z',
        'edited': '2014-12-22T18:21:15.523587Z',
        'url': 'https://swapi.co/api/vehicles/4/'
    }],
    planetData: [{
        'name': 'Tatooine',
        'rotation_period': '23',
        'orbital_period': '304',
        'diameter': '10465',
        'climate': 'arid',
        'gravity': '1 standard',
        'terrain': 'desert',
        'surface_water': '1',
        'population': '200000',
        'residents': [
            'https://swapi.co/api/people/1/',
            'https://swapi.co/api/people/2/',
            'https://swapi.co/api/people/4/',
            'https://swapi.co/api/people/6/',
            'https://swapi.co/api/people/7/',
            'https://swapi.co/api/people/8/',
            'https://swapi.co/api/people/9/',
            'https://swapi.co/api/people/11/',
            'https://swapi.co/api/people/43/',
            'https://swapi.co/api/people/62/'
        ],
        'films': [
            'https://swapi.co/api/films/5/',
            'https://swapi.co/api/films/4/',
            'https://swapi.co/api/films/6/',
            'https://swapi.co/api/films/3/',
            'https://swapi.co/api/films/1/'
        ],
        'created': '2014-12-09T13:50:49.641000Z',
        'edited': '2014-12-21T20:48:04.175778Z',
        'url': 'https://swapi.co/api/planets/1/'
    }]
}
  
export default mockData