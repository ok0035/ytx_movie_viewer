import propTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie(props) {
  //   console.log(props.genres[0]);
  return (
    <div>
      <img src={props.coverImage} alt="profile"></img>
      <h2>
        <Link to={`/movie/${props.id}`}>{props.title}</Link>
      </h2>
      <p>{props.summary}</p>
      <ul>
        {props.genres.map((genre, idx) =>
          genre === null ? <li key={idx}></li> : <li key={idx}>{genre}</li>
        )}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  coverImage: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.array).isRequired,
};
export default Movie;
