import React from 'react'
import Button from './Button.jsx'
import { useState } from 'react'
import * as SortingAlgorithms from './SortingAlgorithms.js'

const SortingVisualizer = ({array,setArray}) => {


    // const [sortedArray,setSortedArray] = useState(array)
    const [speed,setSpeed] = useState(1);

    const bubbleSort=()=>{

        // Send a copy of array to bubblesort, so it can get the indexes where swaps are made
        // So we can swap the heights of the bars itself but not the actual array
        const compares = SortingAlgorithms.bubbleSort(array.slice());
        for(let i = 0; i < compares.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            setTimeout(()=>{
                const [barOne,barTwo] = compares[i];
                const barOneStyle = arrayBars[barOne].style;
                const barTwoStyle = arrayBars[barTwo].style;
                const temp = barOneStyle.height;
                barOneStyle.height = barTwoStyle.height;
                barTwoStyle.height = temp;
            },i*speed)
        }
        
        // Actually sort the array so clicking bubblesort won't "sort" again
        SortingAlgorithms.bubbleSort(array)
    }
    
    const InsertionSort=()=>{

        const compares = SortingAlgorithms.insertionSort(array.slice());
        for(let i = 0; i < compares.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            setTimeout(()=>{
                const [barOne,barTwo] = compares[i];
                const barOneStyle = arrayBars[barOne].style;
                // const barTwoStyle = arrayBars[barTwo].style;
                barOneStyle.height = `${barTwo}px`;
            },i*speed)
        }
        SortingAlgorithms.insertionSort(array);
        console.log(array);

    }

    const SelectionSort=()=>{
        
        const compares = SortingAlgorithms.selectionSort(array.slice());
        for(let i = 0; i < compares.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            setTimeout(()=>{
                const [barOne,barTwo] = compares[i];
                const barOneStyle = arrayBars[barOne].style;
                const barTwoStyle = arrayBars[barTwo].style;
                const temp = barOneStyle.height;
                barOneStyle.height = barTwoStyle.height;
                barTwoStyle.height = temp;
            },i*speed)
        }
        SortingAlgorithms.selectionSort(array);
    }
    
    const MergeSort=()=>{

        const compares = SortingAlgorithms.mergeSortHelper(array.slice());
        for(let i = 0; i < compares.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            setTimeout(()=>{
                const [barOne,barTwo] = compares[i];
                const barOneStyle = arrayBars[barOne].style;
                barOneStyle.height = `${barTwo}px`;
            },i*speed)
        }

        SortingAlgorithms.mergeSortHelper(array);
        console.log(array);
    }

    function reset(){
        var arrayBars = document.getElementsByClassName('array-bar');
        for(var i = 0; i < arrayBars.length;i++){
            arrayBars[i].style.backgroundColor = 'blueviolet';
        }
    }

    const QuickSort=()=>{
        const compares = SortingAlgorithms.quickSortHelper(array.slice());
        for(let i = 0; i < compares.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            setTimeout(()=>{
                const [barOne,barTwo] = compares[i];
                if(barTwo !== 1111){
                    const barOneStyle = arrayBars[barOne].style;
                    const barTwoStyle = arrayBars[barTwo].style;
                    const temp = barOneStyle.height;
                    barOneStyle.height = barTwoStyle.height;
                    barTwoStyle.height = temp;
                }
                else{
                    arrayBars[barOne].style.backgroundColor = 'red';
                }

            },i*speed)
        }
        // Need to figure out why the bars that changed to red are not getting reset
        reset(); 
        SortingAlgorithms.quickSortHelper(array);
    }

    const changeSpeed=(spd)=>{
        setSpeed(parseInt(spd));
    }


    return (
        <div>
            <div className='speed-container' onChange={(e)=>changeSpeed(e.target.value)}>
                <label className='speed'>Speed: </label>
                <input type='radio' style={{margin:'10px'}}value='25' name='speed'/>Slow
                <input type='radio' style={{margin:'10px'}}value='5' name='speed'/>Medium
                <input type='radio' style={{margin:'10px'}}value='1' name='speed'/>Fast
            </div>

            <div className='header'>
                <Button name='BubbleSort' onClick={bubbleSort}/>
                <Button name='InsertionSort' onClick={InsertionSort}/>
                <Button name='SelectionSort' onClick={SelectionSort}/>
                <Button name='MergeSort' onClick={MergeSort}/>
                <Button name='QuickSort' onClick={QuickSort}/>
            </div>

            <div className='Array-Visual-Container'>
                {array.map((value,index) => (
                    <div className='array-bar' key={index} style={{height:`${value}px`}}>
                    
                    </div>
                ))}
            </div>

            <div className='console'>
                <h1 className='console-title'>Console:</h1>
                Sorted Array:<br/>
                {array.map((value) =>(`${value}, `))}
            </div>
        </div>

    )
}

export default SortingVisualizer
