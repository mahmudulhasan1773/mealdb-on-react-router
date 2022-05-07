import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./Meal.css";
const Meal = () => {
  const history = useNavigate();
  const [meals, setMeals] = useState({});
  const { idMeal } = useParams();
  console.log(idMeal);

  const handleGoHome = () => {
    history("/");
  };
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals[0]));
    console.log(meals);
  }, []);

  return (
    <>
      <div
        className="card"
        style={{ width: "50%", height: "100vh", margin: "50px auto" }}
      >
        <img
          className="card-img-top"
          src={meals?.strMealThumb}
          alt="Card-imag-cap"
        />
        <div className="card-body">
          <h5 className="card-title">{meals?.strMeal}</h5>
          <p className="card-text">{meals?.strInstructions?.slice(0, 300)}</p>
          <Link to="/" className="btn btn-primary">
            Search another food item? Go home.
          </Link>
        </div>
        <button className="btn btn-secondary" onClick={handleGoHome}>
          go home
        </button>
      </div>
    </>
  );
};

export default Meal;
