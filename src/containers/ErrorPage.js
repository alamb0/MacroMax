import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default class ErrorPage extends Component {
    render(){
        return(
            <div>
                <h1>This Page Does Not Exist</h1>
                <Button variant="contained" color="primary" size="small"><Link to="/" style={{ textDecoration: 'none', color:'white' }}>Home</Link></Button>
            </div>
        );
    }
}
