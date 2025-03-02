import React from 'react'
import Header from '../Components/Header'
import CreateTask from '../Components/CreateTask'
import { getLocalStorage } from '../Data'
import AllEmpTask from '../Components/AllEmpTask'

const Admin = ({setUser}) => {

  const {adminData} = getLocalStorage()
  const adminName = (adminData[0].firstname)

  return (
    <>
      <div>
        <Header setUser={setUser} adminName={adminName}/>
        <CreateTask />
        <AllEmpTask />
      </div>
    </>
  )
}

export default Admin