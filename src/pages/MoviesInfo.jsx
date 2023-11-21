import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function MoviesInfo(props) {
  const apiKey = 'd0aed252'
  const params = useParams()
  const imdbID = params.imdbID
  const url = `http://www.omdbapi.com/?apikey=d0aed252&i=${imdbID}`;



  const [movie, setMovie] = useState(null)

  const getMovie = async () => {

    try {
      const response = await fetch(url)
      const data = await response.json()
      setMovie(data)
    }
    catch (error) {
      console.error('Error Fetching data:', error)
    }
  }

  useEffect(() => {
    getMovie()
  }, [url])


  return (

    <div>
      {movie ? (
        <div>
          <h1>{movie.Title}</h1>
          <img src={movie.Poster} alt={`${movie.Title} Poster`}></img>
          <h2>Plot</h2>
          <h3>{movie.Year}</h3>
          <p> {movie.Plot}</p>
        </div>

      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default MoviesInfo