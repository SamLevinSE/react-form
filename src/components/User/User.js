import React from 'react';

export default function User(props) {
    return (
        <div>
            User: {props.children} | Age: {props.age}
        </div>
    )
};

