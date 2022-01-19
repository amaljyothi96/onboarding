import { useState } from 'react';
import './style.css'

function TextField(props) {
    const { label, placeholder = "Type here...", preText, postLabel } = props;
    const [fieldValue, setFieldValue] = useState("")
    return (
        <div className='textFieldContainer'>
            <div className='flex'>
                <p className='label'>{label}</p>
                {postLabel ? <p className='postLabel'>{postLabel}</p> : null}
            </div>
            <div className='flex'>
                {preText ? <input className='preText' value={preText} disabled /> : null}
                <input
                    className='field'
                    value={fieldValue}
                    onChange={(event) => { setFieldValue(event.target.value) }}
                    placeholder={placeholder}
                />
            </div>
        </div>
    )
}

export default TextField; 