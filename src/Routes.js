import React from 'react';
import {Link, Switch, Route} from "react-router-dom";
import FormContainer from "./components/forms/FormContainer";
import MemeGenContainer from "./components/memeGen/MemeGenContainer";
import StarWarContainer from "./components/starWarApi/StarWarContainer";
import ToDoList from "./components/todo/ToDoList";
import CardContainer from "./components/cards/CardContainer";

function Routes(props) {
    return (
        <div className="App">
            <ul className="nav">
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to="/meme">MemeGame</Link></li>
                <li><Link to="/star-wars">StarWars</Link></li>
                <li><Link to="/todo">To Do</Link></li>
                <li><Link to="/parent">ParentChild</Link></li>
                <li><Link to="/users">UserList</Link></li>
                <li><Link to="/card">Cards</Link></li>
                <li><Link to="/list">List</Link></li>
            </ul>
            <>
                <Switch>
                    <Route exact path="/" component={FormContainer}/>
                    <Route exact path="/meme" component={MemeGenContainer}/>
                    <Route exact path="/star-wars" component={StarWarContainer}/>
                    <Route exact path="/todo" component={ToDoList}/>
                    <Route exact path="/parent" render={props.myParent}/>
                    <Route exact path="/users" render={props.usersContainer}/>
                    <Route exact path="/card" component={CardContainer}/>
                    <Route exact path="/list" render={props.userList}/>
                </Switch>
            </>
        </div>
    );
}

export default Routes;