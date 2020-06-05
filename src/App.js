import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

//https://reactjs.org/docs/events.html#supported-events All events

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age:28},
      { name: 'Manuel', age:29},
      { name: 'Romina', age:30}
    ]
  }

  switchNameHandler = () => {
    //DON'T DO THIS: this.state.persons[0].name = "Diego";
    this.setState({
      persons: [
        { name: 'Maxi', age:28},
        { name: 'Rodrigo', age:29},
        { name: 'Romina', age:23}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name="Manuel" age="29">My hobbies: Racing</Person>
        <Person name="Romina" age="30"/>
      </div>
    );
  }
}

export default App;
