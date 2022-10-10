import logo from './logo.svg';
import './App.css';
import Task from './Task';
import React, { useState } from 'react';

function App() { 
const [ taskState, setTaskState ] = useState({
  tasks: [
    {id:1, title:"Dishes",description: "Empty Dishwasher", deadline:"Today"},
    {id:2, title: "Laundry", description:"Fold Clothes and put away", deadline:"Tomorrow"},
    {id:3, title:"Tidy up", deadline:"Today"},
    {id:4, title:"Hoover house", description:"Hoover the house",deadline:"Tomorrow "},
    {id:5, title:"Mop house",description:"Mop the house", deadline:"Tomorrow"}
  ]
})

  return (
    <div className="container">
      <h1>Tasky</h1>

      {taskState.tasks.map((task) => (              
    <Task 
      title={task.title}
      description={task.description}
      deadline={task.deadline}
      key={task.id}
    />
  ))} 
    </div>
  );
}

export default App;
