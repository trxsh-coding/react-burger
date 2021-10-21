import PropTypes from "prop-types";
import Card from '../card'
import listStyles from './list.module.css'
import {cardItemProps} from "../../../utils/types";
import React from "react";

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
                    <React.Fragment key={item._id}>
                        <Card  {...item} onOpen={onOpen}/>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

CardList.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(cardItemProps).isRequired,
}

export default CardList;

