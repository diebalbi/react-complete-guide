import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import Auxiliary from '../../../hoc/Auxiliary';
import withClassFun from '../../../hoc/withClassFun';
import AuthContext from '../../../context/auth-context';

// const StyledDiv = styled.div`
//   width: 60%;
//   margin: 16px auto;
//   border: 1px solid #eee;
//   box-shadow: 0 2px 3px #ccc;
//   padding: 16px;
//   text-align: center;
    
//   @media (min-width: 500px){
//     width: 450px;
//   }
// `;

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    return (
      <Auxiliary>
        {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
        <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input 
          // ref={(inputEl) => {this.inputElement = inputEl}} 
          ref={this.inputElementRef}
          type="text" 
          onChange={this.props.changed}
          value={this.props.name}/>
      </Auxiliary>
    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  changed: PropTypes.func,
  isAuth: PropTypes.bool,
  name: PropTypes.string,
  age: PropTypes.number
};

export default withClassFun(Person, classes.Person);  

//React Fragment do the same as the Auxiliary component.