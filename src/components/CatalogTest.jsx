import { useEffect, useState } from "react";
import "./CatalogTest.css";

function CatalogTest() {
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
      {data.map((item, index) => (
        <div className="ListItem">
          <img src={item.img} alt="" />
          <div className="text">
            <h2>{item.name}</h2>
            {item.sex} {item.breed}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CatalogTest;
