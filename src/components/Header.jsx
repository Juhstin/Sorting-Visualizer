import React from 'react'
import Button from './Button'

const Header = ({onSelection}) => {


    return (
        <div >
            <div className='header'>
                <Button name='BubbleSort' onClick={()=>onSelection('b')}/>
                <Button name='InsertionSort' onClick={()=>onSelection('i')}/>
                <Button name='SelectionSort' onClick={()=>onSelection('s')}/>
                <Button name='MergeSort' onClick={()=>onSelection('m')}/>
                <Button name='QuickSort' onClick={()=>onSelection('q')}/>
            </div>
        </div>
    )
}

export default Header
