import Header from  './Header.js'
import Tasks from './Tasks'
import AddTask from './AddTask'
import {useState} from "react";
import Footer from "./Footer";
import './App.css';

function App() {
    const  [showAddTask,setShowAddTask]=useState(false)
  const [ tasks,setTasks]=useState([
 {text:'hello',
  id:1,
  day:"monday",
  remainder:true},
 {text:"kola",
  id:2,
  day:'tuesday',
  remainder:true}])

    const addTask=(task)=>{
        const id=Math.floor(Math.random() * 10000)+1
        const NewTask={id,...task}
        setTasks([...tasks, NewTask])

    }
  const deleteTask=(id)=>{
setTasks(tasks.filter((task)=>(task.id!==id)))
  }

  const toggReminder=(id)=>{
      setTasks(tasks.map((task)=>(task.id===id?{...task,remainder:!task.remainder}:task)))

  }

  return (
<div>
    <div className="container">
      <Header onAdd={()=>{setShowAddTask(!showAddTask)}} showAdd={showAddTask} />
        {showAddTask && (<AddTask onAdd={addTask} /> )}

        {tasks.length>0 ? <Tasks  onToggle={toggReminder} onDelete={deleteTask} tasks={tasks}/>:'No Tasks Found '}
        <Footer></Footer>

    </div>
</div>
  );
}

export default App;
