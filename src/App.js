import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'
export default class App extends Component {


  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Martin', age: 25 },
      { name: 'Alex', age: 27 }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Martin', age: 25 },
        { name: 'Alex', age: 21 }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 25 },
        { name: 'Alex', age: 21 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }
  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => (
            <Person
              name={person.name}
              age={person.age} />
          ))}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi shut the fuck up</h1>
        <button onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {this.state.showPersons ? persons : null}

      </div>
    )
  }
}
