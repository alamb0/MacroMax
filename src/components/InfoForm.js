import React, { Component } from 'react';
import './InfoForm.scss';
import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';

export default class InfoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: 'Restaurant',
            calories: 500,
            macro: 'Protein',
            location: '',
            open: false
        }

    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleMacroChange = event => {
        this.setState({ macro: event.target.value });
    };

    handleCaloriesChange = event => {
        this.setState({ calories: event.target.value });
    };

    handleSearchTermChange = event => {
        this.setState({ searchTerm: event.target.value });
    };

    render() {
        return (
            <div className="InfoForm">
                <Paper className="root" elevation={15}>
                    <Typography variant="h5" component="h3">
                        Restraunts Closest To You
                    </Typography>
                    <Typography component="p">
                        Choose Which Macronutrient To Maximize For This Meal:
                        </Typography>
                    <br />
                    <FormControl>
                        <InputLabel>Macronutrient</InputLabel>
                        <Select
                            value={this.state.macro}
                            onChange={this.handleMacroChange}
                            inputProps={{
                                name: 'macro',
                                id: 'macro',
                            }}
                        >
                            <MenuItem value={"Protein"}>Protein</MenuItem>
                            <MenuItem value={"Fat"}>Fat</MenuItem>
                            <MenuItem value={"Carbs"}>Carbs</MenuItem>
                        </Select>
                    </FormControl>
                    <br />
                    <TextField
                        id="calories"
                        label="Total Calories For Meal"
                        className=""
                        value={this.state.calories}
                        onChange={this.handleCaloriesChange}
                        margin="normal"
                    />
                    <br />
                    <TextField
                        // disabled
                        id="search-term"
                        label="Search Term"
                        className=""
                        value={this.state.searchTerm}
                        onChange={this.handleSearchTermChange}
                        margin="normal"
                    />
                    <br />
                    <Button variant="contained" color="primary" size="small"><Link to={`/results/` + `${this.state.macro}` + `/${this.state.calories}` + `/${this.state.searchTerm}`} style={{ textDecoration: 'none', color: 'white' }}>Find A Meal</Link></Button>
                    <br />
                    <Button style={{ margin: '10px' }} onClick={this.handleOpen} variant="contained" color="primary" size="small">Calorie Recommendation</Button>
                    <p>Location: {this.state.location}</p>
                </Paper>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <Paper className="modal" elevation={15}>
                        When eating three meals and two snacks each day as part of a 2,000-calorie diet, aim to consume 500 calories during breakfast, 250 calories for morning snack, 500 calories for lunch, 250 calories during afternoon snack and 500 calories for dinner.<sup><a href="https://livehealthy.chron.com/many-calories-eat-meal-based-2000calorie-diet-6140.html">[1]</a></sup>
                    </Paper>
                </Modal>
            </div>
        );
    }
}
