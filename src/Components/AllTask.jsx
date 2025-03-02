import React from 'react'
import New from '../TaskList/New'
import Failed from '../TaskList/Failed'
import Complete from '../TaskList/Complete'
import Accept from '../TaskList/Accept'

const AllTask = ({data}) => {
    return (
    <>
        <div className='alltask w-full flex items-center gap-5 overflow-auto px-10 py-5'>
            {data ? data.tasks.map((elem, idx)=>{
                if(elem.newTask) return <New key={idx} data={elem}/>
                if(elem.active) return <Accept key={idx} data={elem}/>            
                if(elem.failed) return <Failed key={idx} data={elem}/>
                if(elem.completed) return <Complete key={idx} data={elem}/>
            }) : 'Loading....'}
        </div>
    </>
  )
}

export default AllTask