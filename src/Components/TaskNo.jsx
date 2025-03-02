import React from 'react'

const TaskNo = ({data}) => {

    let {active, completed, failed, newTask} = data.taskCounts;

  return (
   <>
    {data ? <div className='w-full flex items-center justify-center gap-5 px-10 py-5 flex-nowrap overflow-auto'>
        <div className='bg-linear-to-t from-[#000000] to-[#D2A813] shrink-0 w-1/5 h-[100px] text-xl font-medium rounded-lg flex flex-col items-center justify-center'>
            <h4>{active}</h4>
            <h1>Active Task</h1>
        </div>
        <div className='bg-linear-to-t from-[#000000] to-[#166D3B] shrink-0 w-1/5 h-[100px] text-xl font-medium rounded-lg flex flex-col items-center justify-center'>
            <h4>{completed}</h4>
            <h1>Completed Task</h1>
        </div>
        <div className='bg-linear-to-b from-[#65000b] to-[#000000] shrink-0 w-1/5 h-[100px] text-xl font-medium rounded-lg flex flex-col items-center justify-center'>
            <h4>{failed}</h4>
            <h1>Failed</h1>
        </div>
        <div className='bg-linear-to-b from-[#000f89] to-[#000000] shrink-0 w-1/5 h-[100px] text-xl font-medium rounded-lg flex flex-col items-center justify-center'>
            <h4>{newTask}</h4>
            <h1>New Task</h1>
        </div>
    </div> : 'Loading....'}
   </>
  )
}

export default TaskNo