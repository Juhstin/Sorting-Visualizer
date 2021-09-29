export const bubbleSort=(array) =>{
    const compares = [];
    let i, j;
    for(i = 0; i < array.length; i++){
        for(j = 0; j < array.length-i-1;j++){
            if(array[j] > array[j+1]){
                compares.push([j,j+1])
                swap(array,j,j+1);
            }

        }
    }
    return compares
}

export const selectionSort=(array)=>{
    const compares = [];

    for(let i = 0; i< array.length-1; i++){
        let minIndex = i;
        for(let j = i+1; j < array.length; j++){
            if(array[j] < array[minIndex])
                minIndex = j;
        }
        compares.push([i,minIndex]);
        swap(array,i,minIndex);
    }
    return compares
}

export const insertionSort=(array)=>{
    const compares = [];
    let i,key,j;
    for(i = 1; i < array.length; i++){
        key = array[i];
        j = i-1;

        while (j >= 0 && array[j] > key){
            array[j+1] = array[j];
            compares.push([j+1,array[j]]);  // bar1 gets replaced by bar2
            j = j-1;
        }
        array[j+1] = key;
        // bar1 gets replaced by bar2
        compares.push([j+1,key]);
    }

    return compares
}

export const quickSortHelper=(array)=>{
    const compares = [];
    quickSort(array,0,array.length-1,compares);
    return compares;
}


function quickSort(array, low, high,compares){

    if(low < high){
        // PIVOT AS THE END
        // let pi = partition(array,low,high,compares);

        // quickSort(array,low,pi-1,compares);
        // quickSort(array,pi+1,high,compares);

        // PIVOT AS THE MID
        let mid = Math.floor(low+(high-low)/2);
        let pivot = array[mid];
        let i = low;
        let j = high;
        if(i <= j)
            compares.push([mid,1111]);
        while(i <= j){
            while(array[i] < pivot){
                i++;
            }
            while(array[j] > pivot){
                j--;
            }
            if(i <= j){
                swap(array,i,j);
                compares.push([i,j]);
                i++;
                j--;
            }
        }
        if(low < j)
            quickSort(array,low,j,compares);
        if(high > j)
            quickSort(array,i,high,compares);
    }
}

// function partition(array, low, high, compares){

//     // PIVOT AS THE END
//     let pivot = array[high];
//     let i = low - 1;

//     for(let j = low; j <= high-1; j++){
//         if(array[j] < pivot){
//             i++;
//             swap(array,i,j);
//             compares.push([i,j]);
//         }
//     }
//     swap(array,i+1,high);
//     compares.push([i+1,high]);
//     return (i+1);

// }

export const mergeSortHelper=(array)=>{
    const compares = [];
    mergeSort(array,0,array.length-1,compares);
    return compares;
}

function mergeSort(array,left,right,compares){
    if(left >= right){
        return;
    }
    let mid = left + parseInt((right-left)/2);
    mergeSort(array,left,mid,compares);
    mergeSort(array,mid+1,right,compares);
    merge(array,left,right,mid,compares);
}

function merge(array,left, right, mid, compares){

    let size1 = mid - left + 1;
    let size2 = right - mid;

    let leftArray = new Array(size1);
    let rightArray =  new Array(size2);

    for(let i = 0; i < size1; i++){
        leftArray[i] = array[left+i];
    }
    for(let j = 0; j < size2; j++){
        rightArray[j] = array[mid + j + 1];
    }

    let i = 0;
    let j = 0;
    let k = left;

    while(i < size1 && j < size2){
        if(leftArray[i] <= rightArray[j]){
            array[k] = leftArray[i];
            compares.push([k,leftArray[i]]); // bar1 is index, bar2 is height value
            i++;
        }
        else{
            array[k] = rightArray[j];
            compares.push([k,rightArray[j]]); // bar1 is index, bar2 is height value
            j++
        }
        k++;
    }

    while(i < size1){
        array[k] = leftArray[i];
        compares.push([k,leftArray[i]]); // bar1 is index, bar2 is height value
        i++;
        k++;
    }
    while(j < size2){
        array[k] = rightArray[j];
        compares.push([k,rightArray[j]]); // bar1 is index, bar2 is height value
        j++;
        k++;
    }
}


function swap(array,x,y){

    var temp = array[x];
    array[x] = array[y];
    array[y] = temp;
}