import React, { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    // fetch(
    //   `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    // )
    //   .then((response) => response.json())
    //   .then((json) => {
    //     setMovies(json.data.movies);
    //     setLoading(false);
    //   }); // 요즘엔 then 을 잘 안쓰고 async-await를 사용한다.
    getMovies();
  }, []);

  // useEffect(() => {
  //   console.log(movies);
  // }, [movies]);

  return (
    <div className="App">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            // <div key={movie.id}>
            //   <img src={movie.medium_cover_image} alt="profile"></img>
            //   <h2>{movie.title}</h2>
            //   <p>{movie.summary}</p>
            //   <ul>
            //     {Array(movie.genres).map((genre, idx) =>
            //       genre === null ? (
            //         <li key={idx}></li>
            //       ) : (
            //         <li key={idx}>{genre}</li>
            //       )
            //     )}
            //   </ul>
            // </div>
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              coverImage={movie.medium_cover_image}
              summary={movie.summary}
              genres={Array(movie.genres)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
