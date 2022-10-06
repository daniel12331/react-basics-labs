import logo from './logo.svg';
import './App.css';
import Task from './Task';

function App() { 
  return (
    <div className="container" >
     <h1> Tasky </h1>
     <div className='desc'>
     <Task title="Dishes" deadline="Today" description="Empty Dishwasher"/>
     <Task title="Laundry" deadline="Tomorrow" description="Fold Laundry and put away"/> 
     <Task title="Tidy" deadline="Today" />
      </div>
    </div>
  );
}

export default App;
