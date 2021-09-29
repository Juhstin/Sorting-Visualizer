import React from 'react'


const Array = ({onInput}) => {

    const submitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div className='array-form' >
            <form onSubmit={submitHandler}>
                Array Size: <input className='resized-textbox' type='number'
                     placeholder='5-150' 
                     min='5'
                     max='150'
                     onChange={(e) => onInput(e.target.value)}
                     />

            </form>
        </div>
    )
}

export default Array
