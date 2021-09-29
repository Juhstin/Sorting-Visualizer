import React from 'react'

const Button = ({name,type,onClick}) => {

    return (
        <button className='btn' type={type} onClick={onClick}>{name}</button>
    )
}

export default Button
