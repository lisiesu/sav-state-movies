import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ShowsContext from "../context/context";

function Season() {
  const { getSeason, seasons } = useContext(ShowsContext);
  const { id } = useParams();
  
  useEffect(() => {
    getSeason(id);
  }, []);

  return (
    <div>
      <div>
        {seasons.map((season) => (
          <div>
            <h2> Season {season.number}</h2>
            <div className="seasons">
              <img
                src={
                  season.image
                    ? season.image.medium
                    : "https://safetyaustraliagroup.com.au/wp-content/uploads/2019/05/image-not-found.png"
                }
                alt={season.name}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Season;
