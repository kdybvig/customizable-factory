import React from 'react';

const Input = ({type, placeholder}) => {

    return (
        <div>
            <input type={type} placeholder={placeholder}></input>
        </div>
    )
}

export default Input;