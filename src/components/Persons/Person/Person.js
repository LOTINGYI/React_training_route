import React from "react";
import classes from './Person.css'
const person = (props) => {
 
    return (
        <div className={classes.Person} >
            <p onClick={props.click}>Get the fuck up {props.name} your age is {props.age}!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}


export default person;