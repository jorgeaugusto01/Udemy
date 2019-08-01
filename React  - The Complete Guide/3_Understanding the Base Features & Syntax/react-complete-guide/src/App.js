import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

//import UserOutput from "./UserOutput/UserOutput";
//import UserInput from './UserInput/UserInput';

/*
class App extends Component {

  state = {
    username: 'supermax'
  }

  usernameChangeHandler = (event) => {
    this.setState({username: event.target.value})
  }

  render() {
    return (
      <div className='App'>
        <ol>
        <li>Create TWO new components: UserInput and UserOutput</li>
        <li>UserInput should hold an input element, UserOutput two paragraphs</li>
        <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
        <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
        <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
        <li>Add a method to manipulate the state (=> an event-handler method)</li>
        <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
        <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
        <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
        <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
        <UserInput 
          changed={this.usernameChangeHandler} 
          currentName = {this.state.username}  />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="Max" />
        
      </div>
    );
  }
}
*/

class App extends Component {

    state = {
        persons: [
        {name: 'Max', age: 28},
        {name: 'Manu', age: 28},
        {name: 'Stephanie', age: 27}
      ],
      otherState: 'some other value'
    }

    switchNameHandler = (newName) => {
      this.setState({
        persons: [
            {name: newName, age: 28},
            {name: 'Manu', age: 29},
            {name: 'Stephanie', age: 27}
          ]
        })
    }

    nameChagedHandler = (event) => {
      this.setState({
        persons: [
            {name: 'Max', age: 28},
            {name: event.target.value, age: 29},
            {name: 'Stephanie', age: 27}
          ]
        })
    }

    render()
    {
      const styleButton = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      };

      return (
        <div className="App">
          <h1>React</h1>
          <p>React2</p>
          <button 
            style={styleButton}
            onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Max!')}
            changed={this.nameChagedHandler}>My Hobbies is Racing</Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/>
        </div>
      );
    }
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!'))
}


export default App;


