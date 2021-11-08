import './app.module.css';
import AppHeader from "../header/AppHeader";
import BurgerConstructor from "../constructor/BurgerConstructor";
import {useEffect} from "react";
import {onIngredientsGetItems} from "../../services/actions/ingredients";
import {useDispatch} from "react-redux";
import BurgerIngredients from "../ingridients/BurgerIngredients";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(onIngredientsGetItems())
    }, [dispatch])

    return (
        <div className="App">
            <AppHeader/>
            <div className='flex container-wrapper space-between'>
                <DndProvider backend={HTML5Backend}>
                    <BurgerIngredients />
                    <BurgerConstructor />
                </DndProvider>
            </div>
        </div>
    );
}

export default App;
