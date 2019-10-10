export const getMovies = () => {
  return fetch('https://swapi.co/api/films/')
    .then(data => data.json())
    .then(parsedData => parsedData.results)
    .then(movies => 
      movies.sort((movieA, movieB) => movieA.release_date > movieB.release_date ? 1 : -1)
      )
      .then(movies => {
        return movies
      })
}

export const getCharacters = characterUrl => {
  return fetch(characterUrl)
    .then(data => data.json())
    .then(data => {
      return data
    })
}

export const createCharacterList = characters => {
  const characterList = []
  characters.map(character => {
    characterList.push(getCharacters(character))
  })
  return Promise.all(characterList);
}

export const getHomeWorld = homeworld => {
  
}


export const getFilmCharacters = (id) => {
  let url = `https://swapi.co/api/films/${id}`
  return fetch(url).then(res => res.json())
  .then(data => data.characters)
  .then(data => formatData(data))
  .then(chars => getCharacterHomeworld(chars))
  .then(chars => getCharacterSpecies(chars))
  .then(chars => getCharacterFilms(chars))
}

const formatData = (characterUrls) => {
  let charactersData = characterUrls.map(charUrl => {
    return fetch(charUrl).then(res => res.json()).then(data => {
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
    return fetch(char.species).then(res => res.json()).then(species => {
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
    return fetch(char.homeworld).then(res => res.json()).then(homeworld => {
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
      return fetch(film).then(res => res.json()).then(film => film.title)
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