import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
const Meal = () => {
  const [meals, setMeals] = useState({});
  const { idMeal } = useParams();
  console.log(idMeal);
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
          class="card-img-top"
          src={meals?.strMealThumb}
          alt="Card-imag-cap"
        />
        <div class="card-body">
          <h5 class="card-title">{meals?.strMeal}</h5>
          <p class="card-text">{meals?.strInstructions?.slice(0, 300)}</p>
          <Link to="/home" class="btn btn-primary">
            Go home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Meal;
