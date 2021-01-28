import React, { Component } from 'react';

class StatefulComponent extends Component {

    state = {
        name: 'Rohit',
        age: 27,
        address: 'Pune'
    }

    render() {
        return (
            <div>
                <h1>Name: {this.state.name}</h1>
                <h1>Age: {this.state.age}</h1>
                <h1>Address: {this.state.address}</h1>
            </div>
        );
    }
}

export default StatefulComponent;