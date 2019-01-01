import React from 'react';
import ToDoItem from './ToDoItem';
import './ToDoStyle.css';
//import Data from './data';


export default class ToDoList extends React.Component {
    state = {
        todos: [
            {
                "id": 1,
                "title": "Sleep well",
                "desc": "Lorem Ipsum is simply dummy industry. Lorem Ipsum has been the industry's standard dummy text ever since the 15",
                "completed": false,
                "display": {"display": "none"}
            },
            {
                "id": 2,
                "title": "Eat good food",
                "desc": "industry's standard dummy text ever since the 1500s, when an unknown printer took",
                "completed": false,
                "display": {"display": "none"}
            },
            {
                "id": 3,
                "title": "Study something good",
                "desc": "Lorem Ipsum is simply dummy industry. Lorem Ipsum has been the industry's standard dummy text ever since the 15",
                "completed": false,
                "display": {"display": "none"}
            },
            {
                "id": 4,
                "title": "Enjoy your time",
                "desc": "Lorem Ipsum is simply dummy industry. Lorem Ipsum has been ever since the 15",
                "completed": false,
                "display": {"display": "none"}
            },
            {
                "id": 5,
                "title": "Help other people",
                "desc": "It is a long established fact that a reader will be distracted by the readable content",
                "completed": false,
                "display": {"display": "none"}
            }
        ],
    };

    changeStyle = (id) => {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            });
            return {todos: updatedTodos}
        })
    };

    show = (id) => {
        this.setState(prevState => {
            let updateTodosDisplay = prevState.todos.map(todo => {
                if (todo.id === id) {
                    if (todo.display.display === "none") {
                        todo.display = {"display": "block"};
                    } else {
                        todo.display = {"display": "none"};
                    }
                } else {
                    todo.display = {"display": "none"}
                }
                return todo;
            });
            return {todos: updateTodosDisplay}
        })
    };

    render() {
        const toDoData = this.state.todos.map(item => {
            return <ToDoItem
                key={item.id}
                item={item}
                changeStyle={this.changeStyle.bind(this)}
                show={this.show.bind(this)}/>
        });

        return (
            <div className="list">
                {toDoData}
            </div>
        )
    }
}