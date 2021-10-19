import './app.module.css';
import AppHeader from "../header/AppHeader";
import BurgerIngredients from "../ingridients/BurgerIngredients";
import BurgerConstructor from "../constructor/BurgerConstructor";
import {dataFetchUrl} from "../../utils/data";
import {useEffect, useState} from "react";

function Index() {

  const [data, setData] = useState<any>([]);

  useEffect(() => {
         onDataFetch(dataFetchUrl)
  }, [])

  const onDataFetch = async (url : string) => {
      fetch(url)
          .then((response) => {
              console.log('response', response)
              if (response.ok) {
                  return response.json();
              }
              return Promise.reject(`Ошибка ${response.status}`);
          })
          .then(({data}) => {
              setData(data)
          })
          .catch(e => console.log(e))
  }
    console.log(data)
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

export default Index;
