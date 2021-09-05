import {FaTimes} from "react-icons/all";

const Task =({task, onDelete,onToggle})=>{
    return(
        <div className='task' onDoubleClick={()=>(onToggle(task.id))} className={`task ${task.remainder?'reminder':''}`}>
            <h3>{task.text}<FaTimes onClick={()=>(onDelete(task.id))}  style={{color:'red',cursor:'pointer'}}/></h3>
            <p>{task.day}</p>
        </div>
    )


}
export default Task;