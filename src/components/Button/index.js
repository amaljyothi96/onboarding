import './style.css'

function Button(props) {
    const { buttonText, onClick } = props;
    return (
        <button className='buttonClass' onClick={onClick}>{buttonText}</button>
    )
}

export default Button; 