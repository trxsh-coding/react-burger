import constructorStyles from './constructor.module.css'
import {data} from "../../utils/data";
import {Button, ConstructorElement, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {getElementPosition} from "./utils";
import Modal from "../modal";
import acceptLogo from '../../images/graphics.svg'
import {useState} from "react";
const BurgerConstructor = () => {

    const items = [...data];
    const [isModalOpen, setModalOpen] = useState(false);
    return (
       <>
           <Modal
               open={isModalOpen}
               onClose={() => setModalOpen(false)}>
               <p className="text text_type_digits-large mb-8">034536</p>
               <p className="text text_type_main-medium mb-15">
                   идентификатор заказа
               </p>
               <img src={acceptLogo} alt="acceptLogo"/>
               <p className="text text_type_main-medium mb-15">
                   Ваш заказ начали готовить
               </p>
               <p className="text text_type_main-medium mb-15">
                   Дождитесь готовности на орбитальной станции
               </p>
           </Modal>
           <div>
               <div className={`${constructorStyles.wrapper} mt-25`}>
                   {items.map((item, index) => (
                       <div className='flex align-center mb-4'>
                           <DragIcon type="primary" />
                           <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                               <ConstructorElement
                                   type={getElementPosition(index, items.length)}
                                   key={item.id}
                                   price={item.price}
                                   text={item.name}
                                   thumbnail={item.image}/>
                           </div>
                       </div>

                   ))}
               </div>
               <div className={`${constructorStyles.button} flex justify-end mt-10 align-center`}>
                   <div className='flex mr-10'>
                       <p className="text text_type_digits-medium mr-2">610</p>
                       <CurrencyIcon type='primary'/>
                   </div>
                   <Button type="primary" size="medium" onClick={() => setModalOpen(true)}>
                       Оформить заказ
                   </Button>
               </div>
           </div>
       </>
    )
}

export default BurgerConstructor;
