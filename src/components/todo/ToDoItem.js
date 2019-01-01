import React from 'react';
import './ToDoStyle.css';
import ToDoDescription from './ToDoDesctiption'

export default function ToDoItem(props) {

    return (
        <div>
            <div className="item">
                <input onChange={() => props.changeStyle(props.item.id)} type="checkbox"
                       checked={props.item.completed} className="inputBox" id="checkBox"/>
                <p onClick={() => props.show(props.item.id)} className={props.item.completed ? 'text-strike' : 'title'}>{props.item.title}</p>
            </div>
            <div id="description" style={props.item.display} className="description">
                <ToDoDescription id="des" desc={props.item.desc}/>
            </div>
        </div>
    )

}