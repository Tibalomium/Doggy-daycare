import { useEffect, useState } from "react";
import "./Catalog.css";
import { Link } from "react-router-dom";

function Available(present) {
  const colorPresent = present ? "#3cb371" : "#ff0000" ;

  return (
    <span style={{color : colorPresent}}>&#x2022;</span>
  )
}

function Catalog() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch("https://api.jsonbin.io/v3/b/651f030012a5d3765987b88f")
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData.record);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="Catalog">
      {data.map((dog, index) => (
        <Link to="/details" state={{dog: {dog}}}>
          <div className="ListItem">
            <img src={dog.img} alt="" />
            <div className="text">
              <h2>{dog.name} {Available(dog.present)}</h2>
              {dog.sex} {dog.breed}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Catalog;
