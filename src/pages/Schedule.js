import { useEffect, useContext } from "react";
import ShowsContext from "../context/context";
import Card from "../components/Card";

function Schedule() {

  const { schedule, getSchedule } = useContext(ShowsContext);

  const date = new Date().toISOString().split("T")[0];

  useEffect(() => {
    getSchedule(date);
  }, []);

  return (
    <div>
      {schedule.map((item) => (
        <Card
          key={item.show.id}
          id={item.show.id}
          image={
            item.show.image
              ? item.show.image.medium
              : "https://safetyaustraliagroup.com.au/wp-content/uploads/2019/05/image-not-found.png"
          }
          name={item.show.name}
        />
      ))}
    </div>
  );
}

export default Schedule;
