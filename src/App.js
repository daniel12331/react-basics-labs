import './App.css';
import Task from './Task';
import React, { useState } from 'react';
import AddTaskForm from './Form';
import { v4 as uuidv4 } from 'uuid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function App() { 
const [ taskState, setTaskState ] = useState({
  tasks: [
    {id:1, title:"Dishes",description: "Empty Dishwasher", priority:"Low", deadline:"Today", done:false},
    {id:2, title: "Laundry", description:"Fold Clothes and put away", priority:"High",deadline:"Tomorrow",done:false},
    {id:3, title:"Tidy up", deadline:"Today",priority:"Medium",done:false},
    {id:4, title:"Hoover house", description:"Hoover the house",priority:"Low",deadline:"Tomorrow ", done:false},
    {id:5, title:"Mop house",description:"Mop the house", deadline:"Tomorrow",priority:"High",done:false}
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
  priority:"",
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
        case "priority":
          form.priority = event.target.value;
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
      <Container component="main">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          gutterBottom
          sx = {{
            backgroundColor: 'gray',
            textAlign: 'center',
            color: 'white',
            padding: '20px',
            margin: '20px 0 40px 0',
            borderRadius: '4px'
          }}
        >
          Tasky
        </Typography>
      </Container>

   <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-top" justifyContent="center">
          {taskState.tasks.map((task, index) => (
                <Task 
                title={task.title}
                description={task.description}
                deadline={task.deadline}
                priority={task.priority}
                done={task.done}
                key={task.id}
                markDone = {() => doneHandler(index)}
                deleteTask = {() => deleteHandler(index)}
              />
          ))}
        </Grid>
      </Container>

      <Container
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          my: 6,
          py: 6,
        }}
      >
        <Grid container justifyContent="center">
          <AddTaskForm submit={formSubmitHandler} change={formChangeHandler}/>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
