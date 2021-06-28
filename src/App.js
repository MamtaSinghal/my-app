import UserList from './pages/userList';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import AddUser from './pages/addtodo';

function App() {
  return (
    <Router>
      <Switch>
      <Route  exact path ='/' component={UserList}/>
      <Route path ='/addUser' component={AddUser}/>
      </Switch>
    </Router>
  );
}

export default App;
