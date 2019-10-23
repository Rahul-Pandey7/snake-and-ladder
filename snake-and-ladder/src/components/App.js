import React from "react";
import Snake from "./Snake";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Entrance from "./Entrance";
export default class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Route path="/" exact component={Entrance} />
                        <Route path="/snake" component={Snake} />
                    </div>
                </Router>
            </div>
        )
    }
}