import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import UserList from './Components/UserList';


function App() {
  const [user, setUser] = useState([])

  const getUsers = async()=>{
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUser(res.data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getUsers();
  }, [])

  return (
    <div className="App">
      <br/>
      <h1 className="title">Users Card</h1>
      <UserList user={user}/>
    </div>
  );
}

export default App;
