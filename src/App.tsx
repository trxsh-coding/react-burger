import React from 'react';
import './App.css';
import AppHeader from "./components/header/AppHeader";
import BurgerIngredients from "./components/ingridients/BurgerIngredients";
import BurgerConstructor from "./components/constructor/BurgerConstructor";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className='flex container-wrapper space-between'>
          <BurgerIngredients  />
          <BurgerConstructor  />
      </div>
    </div>
  );
}

export default App;
