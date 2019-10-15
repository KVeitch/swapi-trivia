export const getMovies = () => {
  return fetch('https://swapi.co/api/films/')
    .then(response => {
      if(!response.ok) {
        throw new Error(`Sorry, ${response.status} error.  Please check your URL`)
      }
      return response.json()
    })
    .then(parsedData => parsedData.results)
    .then(movies => 
      movies.sort((movieA, movieB) => parseInt(movieA.episode_id) - parseInt(movieB.episode_id))
      )
}

export const getFilmCharacters = (id) => {
  let url = `https://swapi.co/api/films/${id}`
  return fetch(url)
  .then(response => {
    if(!response.ok) {
      throw new Error(`Sorry, ${response.status} error.  Please check your URL`)
    }
    return response.json()
  })
  .then(data => data.characters)
  .then(data=> data.splice(0,10))
  .then(data => formatData(data))
  .then(chars => getCharacterHomeworld(chars))
  .then(chars => getCharacterSpecies(chars))
  .then(chars => getCharacterFilms(chars))
}

const formatData = (characterUrls) => {
  let charactersData = characterUrls.map(charUrl => {
    return fetch(charUrl)
    .then(response => {
      if(!response.ok) {
        throw new Error(`Sorry, ${response.status} error.  Please check your URL`)
      }
      return response.json()
    })
    .then(data => {
      return {
        films: data.films,
        homeworld: data.homeworld,
        name:data.name,
        species: data.species,
      }
    })
  })
  return Promise.all(charactersData)
}

const getCharacterSpecies = (chars) => {
  let speciesData = chars.map( char => {
    return fetch(char.species)
    .then(response => {
      if(!response.ok) {
        throw new Error(`Sorry, ${response.status} error.  Please check your URL`)
      }
      return response.json()
    })
    .then(species => {
      return {
        ...char,
        species: species.name
        }
      })
    }
  )
  return Promise.all(speciesData)
}

const getCharacterHomeworld = (chars) => {
  let homeworldData = chars.map(char => {
    return fetch(char.homeworld).then(response => {
      if(!response.ok) {
        throw new Error(`Sorry, ${response.status} error.  Please check your URL`)
      }
      return response.json()
    })
    .then(homeworld => {
      return {
        ...char,
        homeworld: homeworld.name,
        population: homeworld.population
      }
    })
  })
  return Promise.all(homeworldData)
}

const getCharacterFilms = (chars) => {
  let films = chars.map(char => {
    let filmTitles = char.films.map(film => {
      return fetch(film)
      .then(response => {
        if(!response.ok) {
          throw new Error(`Sorry, ${response.status} error.  Please check your URL`)
        }
        return response.json()
      })
      .then(film => film.title)
    })
    return Promise.all(filmTitles).then(filmTitles => {
      return {
        ...char,
        films: filmTitles
      }
    }
    )
  })
  return Promise.all(films)
}