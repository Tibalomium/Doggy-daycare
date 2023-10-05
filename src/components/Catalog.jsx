import { useEffect, useState } from "react";
import './Catalog.css'

function Catalog() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch('https://api.jsonbin.io/v3/b/651f030012a5d3765987b88f')
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
        <ul>
        {data.map((item, index) => (
          <li>
            <div className="heading">
                <img src={item.img} alt="" />
                <div className="text">
                    <h2>{item.name}</h2><br />{item.sex} {item.breed}
                </div>
            </div>
          </li>
        ))}
        </ul>
    </div>
  );
}

export default Catalog