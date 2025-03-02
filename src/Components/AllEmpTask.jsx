import React from 'react'
import { DataProvider } from '../Context/ContextData'

const AllEmpTask = () => {

    const [userData, setUserData] = DataProvider()
    console.log(userData)

  return (
    <div className='w-full h-full mt-10 p-10'>
        <div className='w-3/4 flex py-5 ml-40 font-medium pl-20 items-center justify-center flex-col rounded-2xl bg-zinc-800'>
            <div className='w-full flex items-center gap-10 py-2 text-lg'>
                <h1 className='w-28'>Employees</h1>
                <h1 className='w-28'>Active Task</h1>
                <h1 className='w-28'>New Task</h1>
                <h1 className='w-28'>Failed Task</h1>
                <h1 className='w-36'>Completed Task</h1>
            </div>
            {userData.map((elem, idx)=>(
                <div className='w-full flex items-center gap-10 mb-2'>
                    <h1 className='w-28'>{elem.firstName}</h1>
                    <h1 className='w-28 text-center'>{elem.taskCounts.active}</h1>
                    <h1 className='w-28 text-center'>{elem.taskCounts.newTask}</h1>
                    <h1 className='w-28 text-center'>{elem.taskCounts.failed}</h1>
                    <h1 className='w-36 text-center'>{elem.taskCounts.completed}</h1>
                </div>
            ))}
        </div>
    </div>
  )
}

export default AllEmpTask