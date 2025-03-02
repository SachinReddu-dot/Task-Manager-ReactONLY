import React from 'react'
import Header from '../Components/Header'
import AllTask from '../Components/AllTask'
import TaskNo from '../Components/TaskNo'


const Employee = ({data, setUser}) => {
  return (
    <div>
      {data ? <div>
          <Header empname={data.firstName} setUser={setUser}/>
          <TaskNo data={data}/>
          <AllTask data={data}/>      
      </div> : 'Loading.....'}
    </div>
  )
}

export default Employee