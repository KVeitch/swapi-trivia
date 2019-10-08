
export const getMovies = () => {
  return fetch('https://swapi.co/api/films/')
    .then(data =>data.json())
    .then(parsedData => parsedData.results)
    .then(movies => 
      movies.sort((movieA, movieB) => movieA.release_date > movieB.release_date ? 1 : -1)
    )
    .then(movies=>{
      console.log(movies)
      return movies
    })
}
