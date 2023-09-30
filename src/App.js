import './App.css';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import UsersList from './Components/UserList';
import UserHome from './Layout/home';


function App() {
  return (
    <div>
      {/* <SignUp/> */}
      <Login/> 
      {/* <UsersList/>  */}
      <UserHome/>
    </div>
  );
}

export default App;
