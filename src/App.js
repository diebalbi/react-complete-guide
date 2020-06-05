import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

//https://reactjs.org/docs/events.html#supported-events All events

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Max', age:28},
      { name: 'Manuel', age:29},
      { name: 'Romina', age:30}
    ]
  });

  const [ otherState, setOtherState ] = useState('some other value')

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    //DON'T DO THIS: this.state.persons[0].name = "Diego";
    setPersonsState({
      persons: [
        { name: 'Maxi', age:28},
        { name: 'Rodrigo', age:29},
        { name: 'Romina', age:23}
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies: Racing</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );
}

export default app;
