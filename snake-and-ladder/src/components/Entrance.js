import React from 'react';
import { Link, Route } from "react-router-dom";
import Snake from './Snake';

export default class Entrance extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            player1: '',
            player2: '',
            arr: [],
        }
    }
    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submit = (e) => {
        const obj = {
            player1: this.state.player1,
            player2: this.state.player2
        }
        this.setState({
            arr: [...this.state.arr, obj]
        })
    }
    render() {
        console.log(this.state.arr)
        return (
            <div>
                {/* <h1 class="text-white offset-4">Enter Players Details</h1> */}
                <img class="w-100" src="edit.png" style={{ height: "200px" }} ></img>
                <img src="200.gif" ></img>
                <img src="200.gif" class="mirror float-right" ></img>


                <div style={{ marginTop: "150px" }}></div>
                <div class="container">
                    <div class="row">
                        <div class="col-3 offset-3">
                            <h1 class="text-success" style={{ fontFamily: 'Orbitron, sans-serif' }}>Player 1</h1>
                            <input type="text" name="player1" class="rounded-pill border border-success" onChange={this.change} value={this.state.player1} placeholder="Enter Name"></input>
                        </div>
                        <div class="col-3">
                            <h1 class="text-success" style={{ fontFamily: 'Orbitron, sans-serif' }}>Player 2</h1>
                            <input type="text" name="player2" class="rounded-pill border border-success" onChange={this.change} value={this.state.player2} placeholder="Enter Name"></input>
                        </div>
                    </div>
                    <Route path="/snake" exact render={(props) =>
                        <Snake arr={this.state.arr}
                            {...props}
                        />} />
                    <Link to="/snake"><button class="mt-5 btn btn-info offset-5" onClick={this.submit}>Let's Play</button></Link>
                    
                </div>
            </div>
        )
    }
}