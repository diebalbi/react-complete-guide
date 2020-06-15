import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

//https://reactjs.org/docs/events.html#supported-events All events

class App extends Component {
  state = {
    persons: [
      { id: 'asd1', name: 'Maxi', age:28},
      { id: 'asd2', name: 'Manuel', age:29},
      { id: 'asd3', name: 'Romina', age:30}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons]; //more modern
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    
    //const person = Object.assign({}, this.state.persons[personIndex]);
    const person = {
      ...this.state.persons[personIndex]
    }; //more modern

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age} 
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button> {/*No the better way*/}
          {persons}
      </div>
    );
  }
}

export default App;
