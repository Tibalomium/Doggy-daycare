import { useState } from "react";
import "./Details.css";
import { useLocation } from "react-router-dom";

function Details() {
 const dog = useLocation().state.dog.dog;
  return (
    <div>
        {dog.name}
    </div>
  );
}

export default Details;