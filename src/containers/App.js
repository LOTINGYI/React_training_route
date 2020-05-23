import React, { Component } from 'react'
import classes from './App.css'
import Persons from '../components/Persons/Persons'
import Cockpit from "../components/Cockpit/Cockpit";
// import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
class App extends Component {


  state = {
    persons: [
      { id: 'asaads', name: 'Max', age: 28 },
      { id: 'dsfdf', name: 'Martin', age: 25 },
      { id: 'waasd', name: 'Alex', age: 27 }
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

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    // better practice not mutate the data
    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({
      persons: persons
    })
  }
  deletePersonHandler = (personIndex) => {
    // This is not the best practice: because it is the person itself
    // const persons = this.state.persons;

    // copy the same array
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({
      persons: persons
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
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler} />

    }



    return (

      <div className={classes.App}>

        <Cockpit
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>


    )
  }
}


export default App