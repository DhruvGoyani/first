import React, { Component } from 'react';

class State extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            id : 101,
            StateName: 'rajasthan'
        }
    }

    changeStateName = () => {
        this.StateName({
            StateName: 'gujarat'
        })
    }
    
    render() {
        return (
            <div>
                {this.state.StateName}
                <button onclick = {() => this.changeStateName()}>change State</button>
            </div>
        );
    }
}

export default State;