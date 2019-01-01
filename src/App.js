import React, {Component} from 'react';
import UniqueID from 'react-html-id';
import './App.css';
import Loading from './components/loading/Loading';
import FormMain from './components/forms/FormMain';
import ToDoList from './components/todo/ToDoList';
import Users from './components/User/Users';
import Parent from './components/parentToChild/parent';
import UserList from './components/list/userList';
import Cards from './components/cards/Cards';
import StarWars from './components/starWarApi/StarWarMain';


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
                <div>
                    {/*<Users title={<h1>Users List</h1>}/>*/}
                    {/*<Parent title={this.state.title}/>*/}
                    {/*<ul>*/}
                        {/*{this.state.user.map((user, index) => {*/}
                            {/*return (<div><UserList*/}
                                {/*key={user.id}*/}
                                {/*firstName={user.firstName}*/}
                                {/*lastName={user.lastName}*/}
                                {/*deleteUser={this.deleteUser.bind(this, index)}>*/}
                                {/*{user.email}*/}
                            {/*</UserList></div>)*/}
                        {/*})}*/}
                    {/*</ul>*/}
                </div>
                <div>
                    <FormMain/>
                </div>
                <div>
                    <ToDoList/>
                </div>
            </div>
        );
    }
}

export default App;
