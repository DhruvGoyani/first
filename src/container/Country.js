import React, { Component } from 'react';

export default class country extends Component {
    constructor(props) {
        super(props);
        
        this.country = {
            id : 201,
            CountryName : 'pakistan'
        }
        
    }
    
    render() {
        return (
            <div>
                {this.country.CountryName}        
            </div>
        );
    }
}
