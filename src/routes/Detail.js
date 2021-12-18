import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie);
    setDetail(json.data.movie);
  };

  useEffect(() => {
    getMovie();
  }, []);

  console.log(id);
  return (
    <div>
      <center>
        <h1>{detail.title_long}</h1>
        <img src={detail.large_cover_image} alt="desc" />
        <h2>점수 : {detail.rating}</h2>
        <p>{detail.description_full}</p>
      </center>
    </div>
  );
}
export default Detail;
