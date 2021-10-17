
import './App.css';
import AppHeader from "./components/header/AppHeader";
import BurgerIngredients from "./components/ingridients/BurgerIngredients";
import BurgerConstructor from "./components/constructor/BurgerConstructor";
import {dataFetchUrl} from "./utils/data";
import {useEffect, useState} from "react";

function App() {

  const [data, setData] = useState<any>([]);

  useEffect(() => {
         onDataFetch(dataFetchUrl)
  }, [])

  const onDataFetch = async (url : string) => {
      fetch(url)
          .then((response) => {
              return response.json();
          })
          .then(({data}) => {
              setData(data)
          })
          .catch(e => console.log(e))
  }

  return (
    <div className="App">
      <AppHeader />
      <div className='flex container-wrapper space-between'>
          <BurgerIngredients items={data} />
          <BurgerConstructor  items={data}/>
      </div>
    </div>
  );
}

export default App;
