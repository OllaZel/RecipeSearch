import './App.css';
import { useEffect, useState } from 'react';
import ListRecipes from './ListRecipes';


function App() {

const MY_KEY = "96ab64e340b7b236aa531e6c3cff08d7";
const MY_ID = "b994937f";

const [mySearch, setMySearch] = useState("");
const [listRecipes, setListRecipes] = useState([]);
const [lastWord, setLastWord] = useState("beef")

useEffect( () => async() => {
  const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${lastWord}&app_id=${MY_ID}&app_key=${MY_KEY}`);
  const data = await response.json();
  setListRecipes(data.hits);
}, [lastWord]);

const myRecipeSearch = (e) => {
  setMySearch(e.target.value);
}

const finalySearch = (e) => {
  e.preventDefault();
  setLastWord(mySearch)
}


  return (
    <div className='bodyStyle'>
    <div className='title-container'>


      <h1>Search recipes by ingredients</h1>
      <form onSubmit={finalySearch}>
      <input placeholder='Search...' onChange={myRecipeSearch} value={mySearch}></input>
      </form>
    </div>

    <div>
      {listRecipes.map((element, index) => (
        <ListRecipes
        key={index} 
        label={element.recipe.label} 
        image={element.recipe.images.REGULAR.url} 
        cuisineType={element.recipe.cuisineType}
        mealType={element.recipe.mealType}
        calories={element.recipe.calories}
        ingredientLines={element.recipe.ingredientLines}
      />
      ))}

    </div>




  </div>
  );
}

export default App;
