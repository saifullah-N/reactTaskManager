import{useState} from 'react'
const AddTask = ({onAdd}) => {
    const [text,setText]=useState('')
    const [day,setDay]=useState('')
    const [remainder,setRemainder]=useState(false)
    const  onSubmit=(e)=> {
        e.preventDefault()
        if (!text) {
            alert(" please enter a task")
            return
        }
        onAdd({text, day, remainder})
        setText('')
        setDay('')
        setRemainder(false)
    }
    return (
        <form className='add-form'  onSubmit={onSubmit} >
            <div className='form-control'>
                <label>Task</label>
                <input value={text} onChange={(e)=>(setText(e.target.value))} type='text' placeholder='Add a Task'/>
            </div>
            <div className='form-control'>
                <label>Day</label>
                <input value={day} onChange={(e)=>(setDay(e.target.value))} type='text' placeholder='Add Day'/>
            </div>
            <div className='form-control-check'>
                <label>Set Remainder</label>
                <input value={remainder}  checked={remainder}  onChange={(e)=>(setRemainder(e.currentTarget.checked))} type='checkbox'/>
            </div>
            <input className='btn btn-block'  type='submit' value='Save Task'/>
        </form>
    );
}
export default AddTask;