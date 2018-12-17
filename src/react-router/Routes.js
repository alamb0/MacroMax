import React, { Component } from 'react';
import { Switch, Route } from 'react-router'

import HomePage from '../containers/HomePage'
import ErrorPage from '../containers/ErrorPage'
import ResultsPage from '../containers/ResultsPage'

export default class Routes extends Component {
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/results/:macro/:calories/:searchterm" component={ResultsPage} />
                    <Route path="/results" component={ResultsPage} />
                    <Route path="*" component={ErrorPage} />
                </Switch>
            </div>
        );
    }
}
