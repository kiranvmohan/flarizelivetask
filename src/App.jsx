import { useState } from 'react'
import { Route, Router, Routes, useNavigate } from 'react-router-dom'
import Taskboard from './Taskboard'
import './App.css'




function App() {
  const [user, setUser] = useState('')

  const navigate = useNavigate()





  const handleLogin = (e) => {


    if (user === '') {

      alert("Type something in input box ")


    }
    else {
      navigate('/task')
    }












  }


  return (
    <>
      <Routes>
      

        <Route path='/' element={<div style={{ height: '12rem', border: 'solid', maxWidth: '30rem', marginLeft:'30rem', marginTop: '10rem', textAlign: 'center' }}>


          <h1 >
            Task manager
          </h1>

          <input type="text" placeholder='Enter something to login' onChange={(e) => setUser(e.target.value)} style={{ height: '25px', border: 'solid', width: '20rem', textAlign: "center" }} />

          <div style={{ marginTop: "1rem" }}>

            <button onClick={handleLogin}>Login</button></div>

        </div>} />





        <Route path='/task' element={<Taskboard />} />
      </Routes>






    </>
  )
}

export default App
