import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

//https://reactjs.org/docs/events.html#supported-events All events

class App extends Component {
  state = {
    persons: [
      { name: 'Maxi', age:28},
      { name: 'Manuel', age:29},
      { name: 'Romina', age:30}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    //DON'T DO THIS: this.state.persons[0].name = "Diego";
    this.setState({
      persons: [
        { name: newName, age:28},
        { name: 'Manuel', age:29},
        { name: 'Romina', age:23}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Maxi', age:28},
        { name: event.target.value, age:29},
        { name: 'Romina', age:30}
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Rodrigo') }>Switch Name</button> {/*No the better way*/}
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, 'Fernando')} 
          changed={this.nameChangedHandler} > My hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
