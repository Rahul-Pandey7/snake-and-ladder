import React from "react";

export default class Snake extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            string: '',
            count: 0,
            arr: [],
            player2: 0,
            details: this.props.arr
        }
    }
    componentDidMount() {
        for (let i = 100; i >= 91; i--) {
            this.state.arr.push(i)
        }
        for (let i = 81; i <= 90; i++) {
            this.state.arr.push(i)
        }
        for (let i = 80; i >= 71; i--) {
            this.state.arr.push(i)
        }
        for (let i = 61; i <= 70; i++) {
            this.state.arr.push(i)
        }
        for (let i = 60; i >= 51; i--) {
            this.state.arr.push(i)
        }
        for (let i = 41; i <= 50; i++) {
            this.state.arr.push(i)
        }
        for (let i = 40; i >= 31; i--) {
            this.state.arr.push(i)
        }
        for (let i = 21; i <= 30; i++) {
            this.state.arr.push(i)
        }
        for (let i = 20; i >= 11; i--) {
            this.state.arr.push(i)
        }
        for (let i = 1; i <= 10; i++) {
            this.state.arr.push(i)
        }
    }
    rollDice2 = (e) => {
        let max = 6
        let roll2 = Number(Math.ceil(Math.random() * max))
        this.setState({
            player2: this.state.player2 + roll2
        })
        if (roll2 === 1) {
            this.setState({
                string: "one"
            })
        }
        if (roll2 === 2) {
            this.setState({
                string: "two"
            })
        }
        if (roll2 === 3) {
            this.setState({
                string: "three"
            })
        }
        if (roll2 === 4) {
            this.setState({
                string: "four"
            })
        }
        if (roll2 === 5) {
            this.setState({
                string: "five"
            })
        }
        if (roll2 === 6) {
            this.setState({
                string: "six"
            })
        }
        if (this.state.player2 === 1) {
            this.setState({
                player2: 38,
            })
        }
        if (this.state.player2 === 4) {
            this.setState({
                player2: 14,
            })
        }
        if (this.state.player2 === 9) {
            this.setState({
                player2: 31,
            })
        }
        if (this.state.player2 === 17) {
            this.setState({
                player2: 7,
            })
        }
        if (this.state.player2 === 21) {
            this.setState({
                player2: 42,
            })
        }
        if (this.state.player2 === 28) {
            this.setState({
                player2: 84,
            })
        }
        if (this.state.player2 === 51) {
            this.setState({
                player2: 67,
            })
        }
        if (this.state.player2 === 54) {
            this.setState({
                player2: 34,
            })
        }
        if (this.state.player2 === 64) {
            this.setState({
                player2: 60,
            })
        }
        if (this.state.count === 71) {
            this.setState({
                count: 91,
            })
        }
        if (this.state.count === 80) {
            this.setState({
                count: 100,
            })
        }
        if (this.state.player2 === 87) {
            this.setState({
                player2: 24,
            })
        }
        if (this.state.player2 === 93) {
            this.setState({
                player2: 73,
            })
        }
        if (this.state.player2 === 95) {
            this.setState({
                player2: 75,
            })
        }
        if (this.state.player2 === 98) {
            this.setState({
                player2: 79,
            })
        }
        if (this.state.player2 >= 100) {
            alert('You Win')
        }
    }
    rollDice1 = (e) => {
        let max = 6
        let roll = Number(Math.ceil(Math.random() * max))
        this.setState({
            count: this.state.count + roll
        })
        console.log(this.state.count)

        if (roll === 1) {
            this.setState({
                string: "one"
            })
        }
        if (roll === 2) {
            this.setState({
                string: "two"
            })
        }
        if (roll === 3) {
            this.setState({
                string: "three"
            })
        }
        if (roll === 4) {
            this.setState({
                string: "four"
            })
        }
        if (roll === 5) {
            this.setState({
                string: "five"
            })
        }
        if (roll === 6) {
            this.setState({
                string: "six"
            })
        }
        if (this.state.count === 1) {
            this.setState({
                count: 38,
            })
        }
        if (this.state.count === 4) {
            this.setState({
                count: 14,
            })
        }
        if (this.state.count === 9) {
            this.setState({
                count: 31,
            })
        }
        if (this.state.count === 17) {
            this.setState({
                count: 7,
            })
        }
        if (this.state.count === 21) {
            this.setState({
                count: 42,
            })
        }
        if (this.state.count === 28) {
            this.setState({
                count: 84,
            })
        }
        if (this.state.count === 51) {
            this.setState({
                count: 67,
            })
        }
        if (this.state.count === 54) {
            this.setState({
                count: 34,
            })
        }
        if (this.state.count === 64) {
            this.setState({
                count: 60,
            })
        }
        if (this.state.count === 71) {
            this.setState({
                count: 91,
            })
        }
        if (this.state.count === 80) {
            this.setState({
                count: 100,
            })
        }
        if (this.state.count === 87) {
            this.setState({
                count: 24,
            })
        }
        if (this.state.count === 93) {
            this.setState({
                count: 73,
            })
        }
        if (this.state.count === 95) {
            this.setState({
                count: 75,
            })
        }
        if (this.state.count === 98) {
            this.setState({
                count: 79,
            })
        }
        if (this.state.count >= 100) {
            alert('You Win')
        }
    }
    render() {
        console.log(this.state.player2)
        return (
            <div>
                <h1 class="text-center display-4 text-white" style={{ fontFamily: 'Creepster, cursive' }} >Snake & Ladder</h1>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-3">
                            <h1 class="text-white " style={{ fontFamily: 'Orbitron, sans-serif' }}><i class="height text-white fas fa-ankh"></i> - Player 1</h1>
                        </div>
                        <div class="col-6">
                            <div id="wrapper" className="m-5 p-5">
                                {this.state.arr.map((e, index) => {
                                    if (this.state.count == e) {
                                        return (
                                            <div class="square text-center py-2"><i class="icon fas fa-ankh"></i></div>
                                            // <img id="move" style={{ height: "30px", width: "30px" }} src="1.png" />
                                        )
                                    }
                                    if (this.state.player2 == e) {
                                        return (
                                            <div class="square text-center py-2"><i class="icon fas fa-air-freshener"></i></div>
                                            // <img id="move" style={{ height: "30px", width: "30px" }} src="1.png" />
                                        )
                                    }
                                    else {
                                        return (
                                            <div class="square text-center py-2"></div>
                                        )
                                    }
                                })}
                            </div>
                        </div>
                        <div class="col-3">
                            <h1 class="text-white offset-4" style={{ fontFamily: 'Orbitron, sans-serif' }}><i class="height text-white fas fa-air-freshener"></i> - Player 2</h1>
                        </div>

                    </div>
                    {/* <div class="row">
                        <img id="move" style={{ height: "30px", width: "30px" }} src="1.png" class="mt-n5" />
                    </div> */}
                </div>
                <div class="container-fluid">
                    <div class="row">
                        <button type="button" class=" btn btn-primary" onClick={this.rollDice1}>Player one</button>
                        <button type="button" class="ml-3 btn btn-primary" onClick={this.rollDice2}>Player two</button>
                    </div>
                    <i class={`height text-white fa fa-dice-${this.state.string}`}></i>
                    <br />
                </div>
            </div>
        )
    }
} 