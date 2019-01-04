import React from 'react';


export default function (props) {
    let firstName, lastName;
    props.user.lastName === null ? lastName = ' - ' : lastName = props.user.lastName;
    props.user.firstName === '' ? firstName = ' - ' : firstName = props.user.firstName;
    return (
        <li>
            <button onClick={props.deleteUser}>X</button>
            <span>Name: {firstName} {lastName}</span>
        </li>
    )
}
