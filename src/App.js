import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'
export default class App extends Component {


  state = {
    persons: [
      { id:'asaads',name: 'Max', age: 28 },
      { id:'dsfdf',name: 'Martin', age: 25 },
      { id:'waasd',name: 'Alex', age: 27 }
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
    persons.splice(personIndex,1)
    this.setState({
      persons:persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }
  render() {
    const style = {
      backgroundColor:'green',
      color:'white',
      font: 'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    }
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => (
            <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(e)=>this.nameChangeHandler(e,person.id)} />
          ))}
        </div>
      )

      style.backgroundColor = 'red'
    }

    const classes = []
    if (this.state.persons.length <= 2) {
      classes.push('red')
    }
    if(this.state.persons.length <= 1){
      classes.push('bold')
    }

    return (
      <div className="App">
        <h1>Hi shut the fuck up</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {this.state.showPersons ? persons : null}

      </div>
    )
  }
}
