import React from 'react'
import { useUserAuth } from '../context/UserAuthContext'

const Home = () => {
  const { user, logOut } = useUserAuth()

  const handleLogout = async()=> {
    try {
      await logOut();
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <h1>Hello Welcome <br /> {user && user.email}</h1>
      <button onClick={handleLogout}>LogOut</button>
    </div>
  )
}

export default Home