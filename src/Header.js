import PropTypes from 'prop-types'
import Button from "./Button";
const  Header=({title,onAdd,showAdd})=>{
    return(<header className="header">
        <h1>{title}</h1>
            <Button className='btn-block' color={showAdd ?  'crimson' : 'green'} text={showAdd ? 'CLOSE':'ADD'} onAdd={onAdd}/>
    </header>
    )
}
Header.defaultProps={
    title:"TASK MANAGER"
}
export  default  Header