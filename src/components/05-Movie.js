import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

function Movie({ id, mediumCoverImage, title, summary, genres }) {
  return (
    <li>
      <Link to={`/05-StudyMovieApi/detail/${id}`} title='05-movie_api_detail'>
        <span className='img-box'>
          <img src={mediumCoverImage} alt={title} />
        </span>
        <h2 className='title'>{title}</h2>
        <ul className='genre-list'>
          {
            genres.map((genre) => {
              return (
                <li key={genre}>{genre}</li>
              )
            })
          }
        </ul>
        <p className='summary'>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      </Link>
    </li>
  )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  mediumCoverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string)
}

export default Movie;