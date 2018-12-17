import React, { Component } from 'react';
import './LocationCard.scss';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class LocationCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ''
    };
  }

  getImage = (value) => {
    switch(value){
      default:
        return '';
    }
  }

  componentDidMount(){
    let name = this.props.name;
    let url = this.getImage(name);
    this.setState({url: url});
  }

    render() {
      const regex = /<br\/>/;
      let address = this.props.address;
      address = address.replace(regex, " ");
        return (
          <div className="LocationCard">
            <Card className="card" elevation={5}>
              <CardContent>
                <Typography component="p">
                  Restraunt Name: <b>{this.props.name}</b>
                  <br />
                  <img src={this.state.url} style={{height: '50px'}}/>
                  <br />
                  Address: <b>{address}</b>
                </Typography>
              </CardContent>
            </Card>
          </div>
        );
      }
    }
    
    export default LocationCard;