import React, {useState}  from 'react';


import NavigationBar from './components/NavigationBar';
import Routes from './components/Routes';
import LoginForm from './components/LoginForm';
import {withRouter} from 'react-router-dom';
import { UserContext } from './context/UserContext';

const App =()=> {

  const [isLogin,setIsLogin] = useState(false)
  const [error, setError] = useState("")
  const [userFullname, setUserFullname] = useState(null);


  const handleLogin = details => {
    //details field are coming from a prop on LoginForm.jsx
    if(details.userName != ""){
      setIsLogin(true);
      setUserFullname(details.userFullname)
      
    }
  }

  return (
    <>
                {isLogin === true ? 
              (
              <UserContext.Provider value={userFullname}>
              <div>
                  <div>
                  <NavigationBar />
                </div>
              
                <div className='py-5 z-0'>
                    <Routes />
                </div>
              </div>
              </UserContext.Provider>) : (<div><LoginForm Login={handleLogin} error={error} /></div>)}
    </>
  );
}

export default withRouter(App);
