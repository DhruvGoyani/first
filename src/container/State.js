import React, { Component } from 'react';
import Country from './Country';
// class base commponent
class State extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : 101,
            stateName: 'rajasthan'
        }
    } 

    ChangeState = () => {
        this.setState({
            stateName: 'gujarat'
        })
    }
    
    render() {
        return (
            <div>
                {this.state.stateName}
                <button onClick={() => this.ChangeState()}>CHANGE STATE</button>
                <Country sname={this.state.stateName} />
            </div>
        );
    }
}

export default State;

//this.state
//this.setState()
//this.state.id