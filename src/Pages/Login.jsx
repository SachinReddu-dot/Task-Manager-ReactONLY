import React, { useEffect, useState } from 'react'

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const loginData = (e)=>{
    e.preventDefault()

    handleLogin(email, password)
    setEmail('')
    setPassword('')
  }

  useEffect(()=>{
    let circel = document.getElementById('circle')
    circel.addEventListener('click', function(){
      circel.style.width="250px";
      circel.style.height="300px";
      circel.style.borderRadius="2px";
      circel.style.transition="all 1s";
      circel.style.color='white';
      circel.style.backgroundColor='#27272a '
    })
  })

  return (
    <>
      <div className='w-full h-screen flex pt-14 justify-center font-medium font-sans'>
        <div className='w-1/3 h-2/3 bg-zinc-900 rounded-xl flex flex-col pt-10 items-center'>
          <h1 className='py-3 text-4xl font-semibold'>Login</h1>
          <h4 className='py-2'>Don't have an Account ? <span className='text-blue-700'>Register</span></h4>
          <div className='w-full px-10 gap-3 flex flex-col mt-5'>
            <input onChange={(e)=> setEmail(e.target.value)} value={email} placeholder='Email' className='w-full p-3 bg-zinc-700 rounded-lg outline-none' type="email" />
            <input onChange={(e)=> setPassword(e.target.value)} value={password} placeholder='Password' className='w-full p-3 bg-zinc-700 rounded-lg outline-none' type="password" />
            <button onClick={loginData} className='w-full p-3 mt-3 bg-blue-700 text-lg rounded-lg outline-none'>Login</button>
          </div>
        </div>
      </div>
      <div id='circle' className='bg-zinc-600 text-zinc-600 font-medium h-10 w-10 rounded-2xl absolute overflow-hidden top-20 right-48 block'>
      <p className='mb-2'>admin: admin@me.com ,pass: 123</p>
        <p className='mb-2'>user: e@e.com ,pass: 123</p>
        <p className='mb-2'>user: employee2@example.com pass: 123</p>
        <p className='mb-2'>user: employee3@example.com pass: 123</p>
        <p className='mb-2'>user: employee4@example.com pass: 123</p>
        <p className='mb-2'>user: employee5@example.com pass: 123</p>
      </div>
    </>
  )
}

export default Login