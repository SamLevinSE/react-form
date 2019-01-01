import React, {Component} from 'react';
import UniqueID from 'react-html-id';
import './App.css';
import Loading from './components/loading/Loading';
import FormContainer from './components/forms/FormContainer';
import ToDoList from './components/todo/ToDoList';
import UsersContainer from './components/User/UsersContainer';
import Parent from './components/parentToChild/parent';
import UserList from './components/list/UserListComponent';
import CardContainer from './components/cards/CardContainer';
import StarWarContainer from './components/starWarApi/StarWarContainer';
import MemeGenContainer from './components/memeGen/MemeGenContainer';


class App extends Component {
    constructor(props) {
        super(props);
        UniqueID.enableUniqueIds(this);
        this.state = {
            user: [
                {id: this.nextUniqueId(), firstName: 'Sam', lastName: 'Levin', email: ''},
                {id: this.nextUniqueId(), firstName: 'David', lastName: null, email: ''},
                {id: this.nextUniqueId(), firstName: '', lastName: 'Doe', email: ''},
                {id: this.nextUniqueId(), firstName: 'John', lastName: 'Loving', email: ''},
                {id: this.nextUniqueId(), firstName: 'Lilly', lastName: 'Lee', email: ''}
            ],
            title: 'Change the text',
            isLoading: true
        };

        this.deleteUser = (index) => {
            const user = Object.assign([], this.state.user);
            user.splice(index, 1);
            this.setState({user});
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({isLoading: false})
        }, 500)
    }

    render() {
        return (
            this.state.isLoading ? <Loading/> :
                <div className="App">
                    <>
                        <MemeGenContainer/>
                    </>
                    <>
                        <StarWarContainer/>
                    </>
                    <>
                        <FormContainer/>
                    </>
                    <>
                        <ToDoList/>
                    </>
                    <>
                        <Parent title={this.state.title}/>
                    </>
                    <>
                        <UsersContainer title={<h3>Users List</h3>}/>
                    </>
                    <>
                        <CardContainer/>
                    </>
                    <>
                        {this.state.user.map((user, index) => {
                            return (<UserList
                                user={user}
                                deleteUser={this.deleteUser.bind(this, index)}>
                            </UserList>)
                        })}
                    </>
                </div>
        );
    }
}

export default App;
