import React, { Component } from 'react';
import './App.css';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';//HOC higher order component
import Aux from '../hoc/Aux';


class App extends Component 
{

    constructor(props) 
    {
      super(props);
      console.log('[Apps.js constructor]');

      /*this.state = 
      {
          persons: [
            {id:'asd1',   name: 'Max', age: 28},
            {id:'dasdf3', name: 'Manu', age: 28},
            {id:'sdaf4',  name: 'Stephanie', age: 27}
          ],
          otherState: 'some other value',
          showPersons: false
      }*/
    }

    //Esta forma de chamar o state, o contrutor está e a chamada ao super(props) estão implícitos 
    state = 
    {
        persons: [
          {id:'asd1',   name: 'Max', age: 28},
          {id:'dasdf3', name: 'Manu', age: 28},
          {id:'sdaf4',  name: 'Stephanie', age: 27}
        ],
        otherState: 'some other value',
        showPersons: false,
        showCockpit: true,
        changeCounter: 0

    }

    static getDerivedStateFromProps(props, state)
    {
      console.log('[App.js getDerivedStateFromProps]');
      return state;
    };

    componentDidMount()
    {
      console.log('[App.js] componentDidMount');  
    };

    shouldComponentUpdate()
    {
      console.log('[App.js] shouldComponentUpdate');
      return true;  
    };

    componentDidUpdate()
    {
      console.log('[App.js] componentDidUpdate');  
    };

    deletePersonHandler = (personIndex) => 
    {
      //const persons = this.state.persons.slice();//Copia o array, best pratice
      const persons = [...this.state.persons]; //Os três ponto, sepeara os elementos de persons em uma lista de elementos e copia para const persons
      persons.splice(personIndex, 1);
      this.setState({persons: persons});
    };

    nameChagedHandler = (event, id) => 
    {
      const personIndex = this.state.persons.findIndex(p => 
        {
          return p.id === id;
        });

      //Os ... quebra as popriedades em lista criando um objeto em person
      const person = 
      {
        ...this.state.persons[personIndex] //
      };

      //Método alternativo ao anterior
      //const person = Object.assign({}, this.state.persons[personIndex])
      person.name  = event.target.value;
      const persons = [...this.state.persons];
      persons[personIndex] = person;
      
      
      this.setState((prevState, props) => {
        return {
          persons: persons, 
          changeCounter: prevState.changeCounter +1 
        };
      });
        
    };

    togglePersonHandler = () => 
    {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
    };

    render()
    {
      console.log('[Apps.js render]');
      let persons = null;

      if(this.state.showPersons) 
      {
        persons = <Persons 
                  persons={this.state.persons}
                  clicked={this.deletePersonHandler}
                  changed={this.nameChagedHandler} />;
      }

      return (
        //Verificar a utilização de classes no capítulo 5_Styling
        <Aux>
          <button onClick={() => {this.setState({showCockpit: false})}}>Remove Cockpit</button>
          {this.state.showCockpit ? 
            <Cockpit 
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLenght={this.state.persons.length}
              clicked={this.togglePersonHandler}
            /> : null }
          {persons}  
        </Aux>
      );
    }
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!'))
}


export default withClass(App, classes.App);


