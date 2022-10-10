import './App.css';
import Task from './Task';
import React, { useState } from 'react';
import AddTaskForm from './Form';
import { v4 as uuidv4 } from 'uuid';

function App() { 
const [ taskState, setTaskState ] = useState({
  tasks: [
    {id:1, title:"Dishes",description: "Empty Dishwasher", deadline:"Today", done:false},
    {id:2, title: "Laundry", description:"Fold Clothes and put away", deadline:"Tomorrow",done:false},
    {id:3, title:"Tidy up", deadline:"Today",done:false},
    {id:4, title:"Hoover house", description:"Hoover the house",deadline:"Tomorrow ", done:false},
    {id:5, title:"Mop house",description:"Mop the house", deadline:"Tomorrow",done:false}
  ]
})
const doneHandler = (taskIndex) => {
  const tasks = [...taskState.tasks];
  tasks[taskIndex].done = !tasks[taskIndex].done;
  setTaskState({tasks});
}
const deleteHandler = (taskIndex) => {
  const tasks = [...taskState.tasks];
  tasks.splice(taskIndex, 1);
  setTaskState({tasks});
} 
const [ formState, setFormState ] = useState({
  title: "",
  description: "",
  deadline: ""
});
const formChangeHandler = (event) => {
  let form = {...formState};

  switch(event.target.name) {
    case "title":
        form.title = event.target.value;
        break;
    case "description":
        form.description = event.target.value;
        break;
    case "deadline":
        form.deadline = event.target.value;
        break;
    default:
        form = formState;
  }
  setFormState(form);
  console.log(formState);
}
const formSubmitHandler = (event) => {
  event.preventDefault();

  const tasks = [...taskState.tasks];
  const form = {...formState};

  form.id = uuidv4();

  tasks.push(form);
  setTaskState({tasks});
}

  return (
    <div className="container">
      <h1>Tasky</h1>

      {taskState.tasks.map((task, index) => (              
    <Task 
      title={task.title}
      description={task.description}
      deadline={task.deadline}
      key={task.id}
      done={task.done}
      markDone={() => doneHandler(index)}
      deleteTask = {() => deleteHandler(index)}
    />
  ))}
      <AddTaskForm submit={formSubmitHandler} change={formChangeHandler} />
    </div>
  );
}

export default App;
