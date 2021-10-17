import PropTypes from "prop-types";
import {ingredientsTabsTitle} from "../utils";
import {data} from "../../../utils/data";
import Card from '../card'
import listStyles from './list.module.css'


const CardList = (props) => {
    const {items, title, onOpen} = props;
    return (
        <div className='pt-10'>
            <div className='pb-6 pt-10'>
                <p className="text text_type_main-medium text-align-left">
                    {title}
                </p>
            </div>
            <div className={`${listStyles.wrapper} pt-6 pl-4`}>
                {items.map((item) => (
                    <Card key={item.id} {...item} onOpen={onOpen}/>
                ))}
            </div>
        </div>
    )
}

CardList.propTypes = {
    title: PropTypes.oneOf(Object.values(ingredientsTabsTitle)).isRequired,
    items: PropTypes.arrayOf(data).isRequired,
}

export default CardList;

