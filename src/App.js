// import Header from "./components/Header"
import Array from "./components/Array"
import SortingVisualizer from "./components/SortingVisualizer"
import { useState } from "react"

function App() {

  const [array,setArray] = useState([])
  

  /* Creating the Array based on array size provided from Array Component */
  const createArray = (size) => {
    if(size > 150)
      size = 150;
    if(size < 5)
      size = 5;

    setArray([])
    for(let i = 0; i < size; i++){
        setArray(array => [...array,Math.floor(Math.random() * 600)+1])
    }
  }



  return (
    <div>
        <div className='header-container'>
          <Array onInput={createArray}/>
        </div>

        <div>
          <SortingVisualizer array={array} setArray={setArray}/>
        </div>
    </div>
  );
}

export default App;
