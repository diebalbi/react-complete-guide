import React, { Component, PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     if(nextProps.persons !== this.props.persons) {
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    // }
 
    getSnapshotBeforeUpdate(prevProps, prevState) { 
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'Snapshot!'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
     }

    render() {
        console.log('[Persons.js] render');
        return (this.props.persons.map((person, index) => {
            return (
                <Person 
                    click={() => this.props.clicked(index)}
                    name={person.name} 
                    age={person.age} 
                    key={person.id}
                    changed={(event) => this.props.changed(event, person.id)}
                    isAuth={this.props.isAuthenticated}
                    />
            );
        }));
    }
}

export default Persons;

//If want to check all data, you need to extends from PureComponent and dont use shouldComponentUpdate