import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState();
  const { id } = useParams();
  const getMovie = async () => {
    const json = await ( await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setMovies(json.data.movie);
    setLoading(false);
  }
  console.log(movies)
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="container">
      { 
        loading ? <h1>Loading...</h1> : 
        <div className="movie-detail" style={{backgroundImage: `url(${movies.background_image_original})`}}>
          <span className="img-box">
            <img src={movies.large_cover_image} alt={movies.title_long} />
            {/* <img src={movies.background_image_original} alt={movies.title_long} /> */}
          </span>
          <div className="movie-info">
            <h2 className="title">{movies.title_long}</h2>
            <ul className="genre-list">
              {
                movies.genres.map((genre, index) => {
                  return (
                    <li key={index}>{genre}</li>
                  )
                })
              }
            </ul>
            <div>
              <p className="rating"><strong>Rating</strong>: {movies.rating}</p>
              <p className="runtime"><strong>Runtime</strong>: {movies.runtime}</p>
              <p className="year"><strong>Year of release</strong>: {movies.year}</p>
            </div>
            <p className="desc">{movies.description_full}</p>
          </div>
        </div>
      }
    </div>
  )
}

export default Detail;