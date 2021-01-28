import './App.css';
import React, { Component, useState } from 'react';
import Person from './FunctionalComponents/Person/Person';
import StatefulComponent from './StatefulComponent/StatefulComponent';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import HooksTest from './FunctionalComponents/Hooks';
/**
 * Class component / Container Component / Smart Component / Stateful Component
 * 
 * Play with React Lifecycle Hooks
 */
class App extends Component {

  state = {
    uname: '',
    persons: [
      { name: 'Ram', age: 27 },
      { name: 'Shyam', age: 22 },
      { name: 'Soha', age: 29 }
    ]
  }

  btnHandler = (newName: any) => {
    // this.state.persons[0].name = 'Rohit'; // DON'T DO THIS

    this.setState({     // to mutate the state or change the state
      persons: [
        { name: newName, age: 20 },
        { name: 'Harshu', age: 30 },
        { name: 'Nehu', age: 27 },
      ]
    })
  }

  inputHandler = (ev: any) => {
    this.setState({
      uname: ev.target.value
    })
    this.setState({
      persons: [
        { name: "OO Babu", age: 20 },
        { name: ev.target.value, age: 30 },
        { name: 'Nehu', age: 27 }
      ]
    })
  }


  render() {

    const myStyle = {
      backgroundColor: 'blue',
      color: 'white',
      padding: '8px',
      cursor: 'pointer',
      borderRadius: '25px',
      border: '5px solid red',
      outline: 'none'
    }

    // Pure JSX 
    return (
      // className because in JS already class keyword is available
      <div className="App">
        <h1>Welcome to React</h1>
        Name: <input onChange={this.inputHandler}></input>
        Hello = {this.state.uname}

        {/* Better to use .bind */}

        <button onClick={this.btnHandler.bind(this, 'Salman')}>Switch Name with .bind</button>

        <button style={myStyle} onClick={() => { this.btnHandler('Savita') }}>Switch Name with lamda</button>
        {/* <ErrorBoundary> */}
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.btnHandler}
          change={this.inputHandler}
        ></Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        {/* </ErrorBoundary> */}

        {/* <StatefulComponent> */}
        <h1>==================================================================</h1>
        <StatefulComponent />
        {/* <StatefulComponent> */}

        {/**
         * Hooks Testing Starts
         */}

        <HooksTest />

        {/**
         * Hooks Testing Ends
         */}

      </div>
    );

    //or or or or or or
    //or or or or or or
    //or or or or or or`

    /**
     * pure JS but for larger design it is diffcult
     */

    //return React.createElement('div', {className: 'App' }, React.createElement('h1', null, 'Hi, Welcome to React'))
  }
}

export default App;
