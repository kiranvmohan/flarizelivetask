import React, { useState } from 'react'


function Taskboard() {

  const [tasks, setTasks] = useState('')
  const [taskList, setTaskList] = useState([])
  const [status, setStatus] = useState('')




  const handleList = () => {

    setTaskList([...taskList, tasks])
    setTasks('')
  }




  return (
    <>
      <div>






        <input type="text" value={tasks} placeholder='Enter the task' onChange={(e) => setTasks(e.target.value)} style={{ height: '20px', width: '12rem', marginLeft: '15rem', marginTop: '2rem', border: 'solid', textAlign: 'center' }} />
        <button style={{ marginLeft: '10px' }} onClick={handleList}>Add </button>


        <ol>
          <h2>Task list</h2>
          <hr />
          {
            taskList.map((task) => (
              <li style={{ marginTop: "5px" }}>
                <div style={{ marginLeft: '1rem' }}><span> {task}</span><select onChange={(e) => setStatus(e.target.value)} style={{ marginLeft: '1rem' }}>
                  <option value="" disable selected>choose status</option>
                  <option value="done">Done</option>
                  <option value="pending">Pending</option>
                  <option value="progress"> In progress</option></select> </div>
              </li>

            ))
          }
        </ol>




      </div>

    </>

  )
}

export default Taskboard