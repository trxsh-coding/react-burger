import {Component} from "react";
import PropTypes from "prop-types";
import {ingredientsTabsTitle} from "../utils";
import {data} from "../../../utils/data";
import Card from '../card'
import listStyles from './list.module.css'


class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        console.log(this.props.items)
        return (
            <div className='pt-10'>
                <div className='pb-6 pt-10'>
                    <p className="text text_type_main-medium text-align-left">
                        {this.props.title}
                    </p>
                </div>
                <div className={`${listStyles.wrapper} pt-6 pl-4`}>
                    {this.props.items.map(item => (
                        <Card key={item.id} {...item}/>
                    ))}
                </div>
            </div>
        )
    }
}

CardList.propTypes = {
    title: PropTypes.oneOf(Object.values(ingredientsTabsTitle)).isRequired,
    items: PropTypes.arrayOf(data).isRequired,
}

export default CardList;

