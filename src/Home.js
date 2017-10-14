import React, { Component } from 'react';
import './Home.css';
import {
    NavLink,
} from 'react-router-dom'

class Home extends Component {
	
		constructor (props) {
			super (props);
			this.state = {
			}
		}
		render () {
			const {model} = this.props;
    return (<div className="home-container">
        <form>
            <h1>CONAYUS</h1>
            <h5 className="home-p">#Teayudamosaayudar</h5>
            <NavLink
                to={"/signUp"} className="btn btn-warning">Empezar
            </NavLink>
        </form>

    </div>
)
}
}
export default Home;
