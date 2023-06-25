import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import { UserAuthContextProvider } from './context/UserAuthContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserAuthContextProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        </Routes>
      </UserAuthContextProvider>
    </>

  )
}

export default App


// recaptcha site key = 6LfrAssmAAAAAHp0fzwh2whJHRgOXEGfvmzF7HyR

// recaptcha secrete key = 6LfrAssmAAAAAFQ2I0II-wdVqMIB3a-lW8hfG5ZB

// link = https://stupendous-praline-848591.netlify.app/