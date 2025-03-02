import React from 'react'

const Header = ({empname, setUser, adminName}) => {

  const handleLogout = ()=>{
    localStorage.setItem('role', '')
    setUser('')
    window.location.reload()
  }

  return (
    <>
      <div className='w-full flex items-center justify-between font-sans font-medium p-10'>
        <h1 className='text-2xl'>Hello <br/> <span className='text-5xl ml-5'>{empname}{adminName}</span> </h1>
        <button onClick={handleLogout} className='py-3 px-10 mt-3 bg-red-700 text-lg rounded-lg outline-none'>Logout</button>
      </div>
    </>
  )
}

export default Header