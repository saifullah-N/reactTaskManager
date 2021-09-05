import propTypes from 'prop-types';

const Button=({color,onAdd, text})=>{
    return(
        <button style={{backgroundColor:color}}  className="btn" onClick={onAdd}>{text}</button>
    )
}


Button.propTypes={
    onClick:propTypes.func
}
export default Button;