import React from 'react';

export default function UserComponent(props) {
    return (
        <div>
            User: {props.children} | Age: {props.age}
        </div>
    )
};

