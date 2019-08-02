import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import ErroBoundary from './ErrorBoundary/ErrorBoundary'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';


class App extends Component {

    state = {
        persons: [
          {id:'asd1',   name: 'Max', age: 28},
          {id:'dasdf3', name: 'Manu', age: 28},
          {id:'sdaf4',  name: 'Stephanie', age: 27}
        ],
        otherState: 'some other value',
        showPersons: false
    }

    deletePersonHandler = (personIndex) => {
      //const persons = this.state.persons.slice();//Copia o array, best pratice
      const persons = [...this.state.persons]; //Os três ponto, sepeara os elementos de persons em uma lista de elementos e copia para const persons
      persons.splice(personIndex, 1);
      this.setState({persons: persons});
    }

    nameChagedHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
      });

      //Os ... quebra as popriedades em lista criando um objeto em person
      const person = {
        ...this.state.persons[personIndex] //
      };

      //Método alternativo ao anterior
      //const person = Object.assign({}, this.state.persons[personIndex])

      person.name  = event.target.value;

      const persons = [...this.state.persons];

      persons[personIndex] = person;
      
      this.setState({ persons: persons });
    }

    togglePersonHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
    };

    render()
    {
      const styleButton = {
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
              return <ErrorBoundary key={person.id}> 
                      <Person 
                      click={() => this.deletePersonHandler(index)}
                      name={person.name}
                      age={person.age} 
                      changed={(event) => this.nameChagedHandler(event, person.id)}/></ErrorBoundary>
            })}
          </div>
      );
    }

    return (
      <div className="App">
        <h1>React</h1>
        <p>React2</p>
        <button 
          style={styleButton}
          onClick={this.togglePersonHandler}>Toggle Person</button>
        {persons}  
      </div>
    );
  }
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!'))
}


export default App;


