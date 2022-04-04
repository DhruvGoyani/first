import React, { Component } from 'react';

class Country extends Component {
    constructor(props) {
        super(props);
        this.country = {
            id : 101,
            CountryName : 'pokistan'
        }
    }

    changecoiuntry = () => {
        this.Setcountry({
            CountryName : 'india'
        })
    }
    
    render() {
        return (
            <div>
                {this.country.CountryName}
                <button onClick={() => this.changecoiuntry()}>CHANGE COUNTRY</button>       
            </div>
        );
    }
}

export default Country;