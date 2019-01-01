import React from 'react';


export default function (props) {
    let firstName, lastName;
    props.lastName === null ? lastName = ' N/A ' : lastName = props.lastName;
    props.firstName === '' ? firstName = ' N/A ' : firstName = props.firstName;
    return (
        <>
            <span>First Name: {firstName} | Last Name: {lastName}</span>
            <button onClick={props.deleteUser}>Delete</button>
        </>
    )
}
