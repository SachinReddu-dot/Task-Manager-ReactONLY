import React from 'react'

const Failed = ({data}) => {
  return (
            <div className='w-1/4 h-[300px] bg-linear-to-b from-[#65000b] to-[#000000] rounded-lg p-5 shrink-0'>
                <div className='flex items-center justify-between px-2 w-full font-medium'>
                    <h2 className='bg-red-700 rounded-full py-0.5 px-2'>{data.category}</h2>
                    <h2>{data.taskDate}</h2>
                </div>
                <div className='w-full mt-3'>
                    <h2 className='text-center text-2xl font-semibold mb-2'>{data.taskTitle}</h2>
                    <p>{data.taskDescription}</p>
                </div>
                <div className='w-full flex items-center justify-center gap-3 mt-5 font-medium'>
                    <button className='py-2 px-10 bg-red-700 text-lg rounded-lg outline-none'>Failed</button>
                </div>
            </div>
  )
}

export default Failed