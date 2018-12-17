import React, { Component, lazy, Suspense  } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
const NutritionFacts = lazy(() => import('../components/NutritionFacts'));

export default class ResultsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chosen: [],
            totalCalories: 0,
            macro: '', 
            searchTerm: ''
        }
    }

    componentDidMount(){
        let macro = this.props.match.params.macro;
        let calories = this.props.match.params.calories;
        let searchTerm = this.props.match.params.searchterm;
        if(macro && calories && searchTerm){
            this.setState({macro: macro, totalCalories: calories,searchTerm: searchTerm });
        }
    }

    render(){
        return(
            <div className="ResultsPage">
                <h1>You Are Eating:</h1>
                <Suspense fallback={<div><CircularProgress /></div>}>
                    <NutritionFacts />
                </Suspense>
            </div>
        );
    }
}
