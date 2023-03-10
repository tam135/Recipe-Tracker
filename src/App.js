import React, { useState } from "react";
import Header from "./Header";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";

function App() {
  // State for recipes
  const [recipes, setRecipes] = useState([]);

  // Create new recipe function
  const createRecipe = (newRecipe) => {
    setRecipes((currentRecipes) => [
      newRecipe,
      ...currentRecipes,     
    ])
  }

  // Delete recipe function
  const deleteRecipe = (indexToDelete) => {
    setRecipes((currentRecipes) => 
      currentRecipes.filter((recipe, index) => index !== indexToDelete)
    )
  }
  
  return (
    <>  
      <Header/>
      <RecipeCreate createRecipe={createRecipe}/>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
    </>
  );
}

export default App;
