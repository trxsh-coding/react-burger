import {Component} from "react";
import constructorStyles from './constructor.module.css'
import {data} from "../../utils/data";
import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import {getElementPosition} from "./utils";

class BurgerConstructor extends Component {

    render() {
        const items = [...data];

        return (
            <div className={`${constructorStyles.wrapper} mt-25`}>
                {items.map((item, index) => (
                    <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}} className='pb-4'>
                        <ConstructorElement
                            type={getElementPosition(index, items.length)}
                            key={item.id}
                            price={item.price}
                            text={item.name}
                            thumbnail={item.image}/>
                    </div>

                ))}
            </div>
        )
    }
}

export default BurgerConstructor;
