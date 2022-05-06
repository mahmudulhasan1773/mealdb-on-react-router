import React, { useState } from "react";
import Meals from "../Meals/Meals";
import "./Home.css";

const Home = () => {
  const [mealname, setMealName] = useState("");
  const [meals, setMeals] = useState([]);
  const handleSearchField = () => {
    const searchFild = document.getElementById("searchField");

    const searchFieldText = searchFild.value;
    if (searchFild.value === "") {
      searchFild.defaultValue = "fish";
    }
    setMealName(searchFieldText);

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealname}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals.slice(0, 20)));
  };
  return (
    <div>
      <div className="searchBox">
        <input
          onChange={handleSearchField}
          type="search"
          id="searchField"
          name="q"
          placeholder="Search your food item "
        />
      </div>

      <div className="meal-showcase">
        {meals.map((meal) => (
          <Meals key={meal.idMeal} meal={meal}></Meals>
        ))}
      </div>
    </div>
  );
};
export default Home;
