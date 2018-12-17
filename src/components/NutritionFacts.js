import React, { Component } from 'react';
import './NutritionFacts.scss';

export default class NutritionFacts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            restaurant: 'Panda Express',
            name: 'Asian Chicken',
            logo: '',
            calories: 340,
            caloriesFromFat: 110,
            totalFat: 13,
            satFat: 3.5,
            transFat: 0,
            cholesterol: 195,
            sodium: 630,
            carbs: 14,
            fiber: 3,
            sugars: 10,
            protein: 41,
            serving: '6oz'
        }
    }

    render() {
        return (
            <div className="NutritionFacts">
                <h1>{this.state.restaurant} - {this.state.name}!!!</h1>
                <img src={this.state.logo} />
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2>Nutrition Facts</h2>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h3>Serving Size: {this.state.serving}</h3>
                            <hr />
                            <h3>Calories: <span className="boldLargeCal"><b>{this.state.calories}</b></span></h3>
                            <hr />
                            <h3>Total Fat: <span className="boldLarge">{this.state.totalFat}g</span></h3>
                            <hr />
                            <h3>Saturated Fat: <span className="boldLarge">{this.state.satFat}g</span></h3>
                            <hr />
                            <h3><i>Trans</i> Fat: <span className="boldLarge">{this.state.transFat}g</span></h3>
                            <hr />
                            <h3>Cholesterol: <span className="boldLarge">{this.state.cholesterol}mg</span></h3>
                            <hr />
                            <h3>Sodium: <span className="boldLarge">{this.state.sodium}mg</span></h3>
                            <hr />
                            <h3>Total Carbohydrate: <span className="boldLarge">{this.state.carbs}g</span></h3>
                            <hr />
                            <h3>Dietary Fiber: <span className="boldLarge">{this.state.fiber}g</span></h3>
                            <hr />
                            <h3>Total Sugars: <span className="boldLarge">{this.state.sugars}g</span></h3>
                            <hr />
                            <h3>Protein: <span className="boldLarge">{this.state.protein}g</span></h3>
                        </div>
                    </div>
                </div>
                <br />
                <br />
            </div>
        );
    }
}

