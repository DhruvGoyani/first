import React, { Component } from 'react';

class Country extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : 101,
            countryName : 'pokistan'
        }
    }

    changecoiuntry = () => {
        this.setState({
            countryName : 'india'
        })
    }
    
    render() {
        return (
            <div>
                {
                    this.props.sname === 'gujarat' ? 'india' : ''   
                }
                {
                    this.props.sname === 'rajasthan' ? 'pokistan' : ''
                }
                <button onClick={() => this.changecoiuntry()}>CHANGE COUNTRY</button>       
            </div>
        );
    }
}

export default Country;


