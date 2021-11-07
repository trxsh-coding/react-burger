import './app.module.css';
import AppHeader from "../header/AppHeader";
import BurgerConstructor from "../constructor/BurgerConstructor";
import {useEffect} from "react";
import {onIngredientsGetItems} from "../../services/actions/ingredients";
import {useDispatch, useSelector} from "react-redux";
import BurgerIngredients from "../ingridients/BurgerIngredients";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(onIngredientsGetItems())
    }, [dispatch])
    const {
        list: data
    } = useSelector(state => state.ingredients)

    return (
        <div className="App">
            <AppHeader/>
            {!!data.length &&
            <div className='flex container-wrapper space-between'>
                <DndProvider backend={HTML5Backend}>
                    <BurgerIngredients items={data}/>
                    <BurgerConstructor items={data}/>
                </DndProvider>
            </div>
            }
        </div>
    );
}

export default App;
