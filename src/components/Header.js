import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div className="Header">
        <AppBar color="primary" position="static" className="root">
          <Toolbar>
            <Typography variant="h6" color="inherit" className="grow">
              <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>MacroMax</Link>
            </Typography>
            <Button color="inherit"><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link></Button>
            <Button onClick={this.handleOpen} color="inherit"><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>About</Link></Button>
          </Toolbar>
        </AppBar>
        <Modal
          aria-labelledby="about"
          aria-describedby="about-info"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div className="modal">
            <Typography variant="h6" id="modal-title">
              SunHack Knapsack (MacroMax) - About
              <hr />
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              Uses Your Current location to find restraunts near you from Here.com
              <br />
              The app will try to maximize the macro chosen for the amount of calories in a meal based on the knapsack problem.
              It is currently set to return a meal from the follwing restraunts that maximizes protein macro for a 500 calorie meal.
              <br />
              <a href="http://www.nutritionix.com/buffalo-wild-wings/menu/premium">Buffalo Wild Wings Menu</a>
              <p>Ultimate Nachos With Chicken - 1,430 Calories and 63g of Protein</p>
              <a href="http://www.nutritionix.com/panda-express/menu/premium">Panda Express Menu</a>
              <p>Asian Chicken - 340 Calories and 41g of Protein</p>
              <a href="http://www.nutritionix.com/ihop/menu/premium">Ihop Menu</a>
              <p>(4) Harvest Grain 'N Nut Pancakes - 990 Calories and 26g of Protein</p>
              <a href="http://www.nutritionix.com/starbucks/menu/premium">Starbucks Menu</a>
              <p>Multigrain Bagel - 350 Calories and 17g of Protein</p>
              <a href="http://www.nutritionix.com/chick-fil-a/menu/premium">Chick-fil-A Menu</a>
              <p>Chick-fil-A Nuggets, 12-Count - 390 Calories and 41g of Protein</p>
            </Typography>
          </div>
        </Modal>
      </div>
    );
  }
}
