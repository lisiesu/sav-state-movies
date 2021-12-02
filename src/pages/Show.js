import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ShowsContext from "../context/context";

function Show() {
  const { getSingleShow, singleShow } = useContext(ShowsContext);
  const { id } = useParams();

  useEffect(() => {
    getSingleShow(id);
  }, []);

  function removeTags(text) {
    text = text.toString();
    return text.replace(/(<([^>]+)>)/gi, "");
  }

  function getYear(date) {
    let newDate = new Date(date);
    return newDate.getFullYear();
  }

  return (
    <div>
      <div className="show">
        <img
          src={
            singleShow.image
              ? singleShow.image.medium
              : "https://safetyaustraliagroup.com.au/wp-content/uploads/2019/05/image-not-found.png"
          }
          alt={singleShow.name}
        />
        <div className="info">
          <h1>
            {singleShow.name}{" "}
            {singleShow.premiered && getYear(singleShow.premiered)}
          </h1>
          <p>{singleShow.summary && removeTags(singleShow.summary)}</p>
          <p>
            <strong>Status:</strong> {singleShow.status && singleShow.status}{" "}
          </p>
          <p>
            <strong>Genres:</strong>
            {singleShow.genres &&
              singleShow.genres.map((genre) => (
                <span key={genre}>{genre}</span>
              ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Show;
