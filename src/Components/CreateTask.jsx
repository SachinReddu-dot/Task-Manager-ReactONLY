import React, { useState } from 'react'
import { DataProvider } from '../Context/ContextData'

const CreateTask = () => {

    const [taskDate, setTaskDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskTitle, setTaskTitle] = useState('')
    const [category, setCategory] = useState('')

    const createTask = (e)=>{
        e.preventDefault()
        const data = {category, taskDate, taskDescription, taskTitle ,newTask: true ,completed: false, failed: false ,active: false}
        const taskData = JSON.parse(localStorage.getItem('Employees'))

        taskData.map((elem, idx)=>{
            if(elem.firstName.toLowerCase() === assignTo.toLowerCase() ){
                elem.tasks.push(data)
                elem.taskCounts.newTask = elem.taskCounts.newTask+1
            }
        })
        localStorage.setItem('Employees', JSON.stringify(taskData))

        setTaskTitle('')
        setTaskDate('')
        setTaskDescription('')
        setCategory('')
        setAssignTo('')
    }

  return (
    <>
        <div className='w-full px-10'>
            <form onSubmit={createTask} className='w-full flex gap-20 justify-center'>
                <div className='w-1/3 bg-black flex flex-col gap-3 font-semibold'>
                    <div>
                        <h3>Title</h3>
                        <input onChange={(e)=>setTaskTitle(e.target.value)} value={taskTitle} className='w-full capitalize p-2 bg-zinc-800 rounded-lg outline-none' type="text" />
                    </div>
                    <div>
                        <h3>Due Date</h3>
                        <input onChange={(e)=>setTaskDate(e.target.value)} value={taskDate} className='w-full p-2 bg-zinc-800 rounded-lg outline-none' type="date" />
                    </div>
                    <div>
                        <h3>Category</h3>
                        <input onChange={(e)=>setCategory(e.target.value)} value={category} className='w-full capitalize p-2 bg-zinc-800 rounded-lg outline-none' type="text" />
                    </div>
                    <div>
                        <h3>Assign To</h3>
                        <input onChange={(e)=>setAssignTo(e.target.value)} value={assignTo} className='w-full capitalize p-2 bg-zinc-800 rounded-lg outline-none' type="text" />
                    </div>
                </div>
                <div className='w-1/2 flex flex-col mt-5 font-medium'>
                    <textarea placeholder='Description' onChange={(e)=>setTaskDescription(e.target.value)} value={taskDescription} className='w-2/3 h-2/3 p-2 bg-zinc-800 rounded-lg outline-none'>hello</textarea>
                    <button className='py-3 mt-5 w-fit px-10 bg-blue-800 rounded-lg'>Create Task</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default CreateTask