import { useEffect, useState } from "react";
import '../assets/05-movie_api.css';

import Movie from '../components/05-Movie';

function StudyMovieApi() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    // const response = await fetch(
    //   'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
    // );
    // const json = await response.json();
    const json = await (await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')).json();
    setMovies(json.data.movies);
    setLoading(false);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <div className="container">
        <ul className="movie-list">
          {
            loading ? <h1>Loading...</h1> : movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  mediumCoverImage={movie.medium_cover_image}
                  title={movie.title}
                  summary={movie.summary}
                  genres={movie.genres}
                />
              )
            })
          }
        </ul>
      </div>
    </>
  )
}

export default StudyMovieApi;