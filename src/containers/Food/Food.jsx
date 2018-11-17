import React, { Component } from 'react';
import { FoodList } from '../../components/FoodComponent';
import './Food.css';
import axios from 'axios';
import GlobalHeader from '../../components/GlobalHeaderComponent';

import { getAllItems } from '../../actions/actions.js';



class Food extends Component {
    constructor(props) {
        super(props)
        this.state = {
            foodItem: []
        }
    }
    componentDidMount() {

        this.props.getAllItems();
        // axios
        //     .get('/food')
        //     .then(food => {
        //         // console.log(food.data)
        //         this.setState({ foodItem: food.data })
        //     })
        //     .catch(err => {
        //         console.log('err', err)
        //     })
    }
    render() {
        const { foodItem } = this.props;
        return (
            <div className='foodPage-container'>
                <GlobalHeader />
                <FoodList foodItem={this.foodItem} />
            </div>
        )
    }
}

export default Food;