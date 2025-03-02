import React, { useEffect, useState } from 'react'
import Employee from './Pages/Employee'
import { DataProvider } from './Context/ContextData'
import Login from './Pages/Login'
import Admin from './Pages/Admin'
import { setLocalStorage } from './Data'

const App = () => {

  const [user, setUser] = useState('')
  const [loggedInUser, setLoggedInUser] = useState('')

  const [userData, setUserData] = DataProvider()

  useEffect(()=>{
    const role = localStorage.getItem('role')
    if(role){
      const user = JSON.parse(role);
      setUser(user.role)
      setLoggedInUser(user.data)
    }
    // setLocalStorage()
  }, [])

  const handleLogin = (email, password)=>{
    if(email === 'admin@me.com' && password === '123'){
      setUser('admin')
      localStorage.setItem('role', JSON.stringify({role: 'admin'}))
    }
    else if(userData){
      const employee = userData.find((employee)=> email === employee.email && password === employee.password)
      console.log(employee)
      if(employee){
        setUser('employee')
        setLoggedInUser(employee)
        localStorage.setItem('role', JSON.stringify({role: 'employee', data: employee}))
      }
    }
    else{
      setUser('')
      console.log('you dont have an account')
    }
  }


  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === 'admin' ? <Admin setUser={setUser}/> : ''}
      {user === 'employee' ? <Employee setUser={setUser} data={loggedInUser}/> : ''}
    </>
  )
}

export default App