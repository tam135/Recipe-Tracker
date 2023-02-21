import React, { useState } from "react";
import Header from "./Header";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeView from "./RecipeView";


function App() {
  return (
    <>  
      <Header/>
      <RecipeCreate/>
      <RecipeView/>
    </>
  );
}

export default App;
