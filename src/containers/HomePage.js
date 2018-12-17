import React, { Component, lazy, Suspense } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';
import InfoForm from '../components/InfoForm'
import GridList from '@material-ui/core/GridList';

const LocationCard = lazy(() => import('../components/LocationCard'));

export default class Routes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lat: '',
            long: '',
            searchTerm: 'restaurant',
            // searchTerm: 'fast+food',
            locations: []
        }

        this.getData = this.getData.bind(this);
    }

    async getData(){
        const APP_ID = process.env.REACT_APP_HERE_APP_ID
        const APP_CODE = process.env.REACT_APP_HERE_APP_CODE
        const lat = this.state.lat;
        const long = this.state.long;
        const searchTerm = this.state.searchTerm;
        let URL = 'https://places.cit.api.here.com/places/v1/autosuggest?at='+lat+'%2C'+long+'&q='+searchTerm+'&Accept-Language=en-US%2Cen%3Bq%3D0.9&app_id='+APP_ID+'&app_code='+APP_CODE;
        await axios.get(URL).then((response) => {
            this.setState({locations: response.data.results})
        });
    }

    componentDidMount(){
        this.getData();
        // navigator.geolocation.getCurrentPosition((position) => {
        //     this.setState({lat: position.coords.latitude, long: position.coords.longitude});
        //     this.getData();
        // });
    }

    render(){
        let locations = this.state.locations;
        const temp = locations.slice(1);
        const locationArray = temp.splice(0, 15);
        return(
            <div className="HomePage">
                {/* <h1>{this.state.lat}</h1>
                <h1>{this.state.long}</h1> */}
                <div className="result">
                <Suspense fallback={<div><CircularProgress /></div>}>
                <div className="root">
                    <GridList cellHeight={160} className="list" cols={3}>
                    <InfoForm />
                        {locationArray.map((location) => {
                            return <LocationCard key={location.id} name={location.title} address={location.vicinity} />
                        })}
                    </GridList>
                </div>
                </Suspense>
                </div>
            </div>
        );
    }
}
