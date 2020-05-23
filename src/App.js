import React, { Component } from 'react'
import classes from './App.css'
import Person from './components/Persons/Person/Person'
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
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
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => (
            // ErrorBoundary is so called higher order component
            // Please notice the key always has to be on the outer element under the map method
            <ErrorBoundary key={person.id}> 
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                changed={(e) => this.nameChangeHandler(e, person.id)} />
            </ErrorBoundary>
          ))}
        </div>
      )

      btnClass = classes.Red
    }

    const assignedClasses = []
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red)
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold)
    }

    return (

      <div className={classes.App}>
        <h1>Hi shut the fuck up</h1>
        <p className={assignedClasses.join(' ')}>This is really working</p>
        <button
          className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {this.state.showPersons ? persons : null}

      </div>


    )
  }
}


export default App