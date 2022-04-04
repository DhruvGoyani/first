import React, { Component } from 'react';

class State extends Component {
    constructor(props) {
        super(props);
        this.stateName = {
            id: 101,
            State: 'rajasthan'
        }
    } 

    ChangeState = () => {
        this.stateName({
            State: 'gujarat'
        })
    }
    
    render() {
        return (
            <div>
                {this.stateName.State}
                <button onclick={() => this.ChangeState()}>CHANGE STATE</button>
            </div>
        );
    }
}

export default State;