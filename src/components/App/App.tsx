import './app.module.css';
import AppHeader from "../header/AppHeader";
import BurgerIngredients from "../ingridients/BurgerIngredients";
import BurgerConstructor from "../constructor/BurgerConstructor";
import {dataFetchUrl} from "../../utils/data";
import {useEffect, useState} from "react";

function App() {

    const [data, setData] = useState<any>([]);

    useEffect(() => {
        onDataFetch(dataFetchUrl)
    }, [])

    const onDataFetch = async (url: string) => {
        fetch(url)
            .then((response) => {
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
    return (
        <div className="App">
            <AppHeader/>
            {!!data.length &&
            <div className='flex container-wrapper space-between'>
                <BurgerIngredients items={data}/>
                <BurgerConstructor items={data}/>
            </div>
            }
        </div>
    );
}

export default App;
