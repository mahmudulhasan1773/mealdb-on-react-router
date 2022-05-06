import React from "react";
import { Link } from "react-router-dom";

const Meals = (props) => {
  const { strCategory, strMeal, strMealThumb, strInstructions, idMeal } =
    props.meal;
  return (
    <div className="card">
      <img className="card-img-top" src={strMealThumb} alt="Card_image_cap" />
      <div className="card-body">
        <h5 className="card-title">
          Name:{strMeal} and category:{strCategory}
        </h5>
        <p className="card-text">{strInstructions.slice(0, 300)}</p>
        <Link to={`/meal/${idMeal}`} className="btn btn-primary">
          Go somewhere
        </Link>
      </div>
    </div>
  );
};

export default Meals;
