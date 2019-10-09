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

export const getCharacter = characterUrl => {
  return fetch(characterUrl)
    .then(data => data.json())
    .then(data => {
      return data
    })
}

export const createCharacterArray = characters => {
  const characterArray = []
  characters.map(character => {
    characterArray.push(getCharacter(character))
  })
  return characterArray
}