function bubbleSort(arr){
    //Create noSwaps variable to set equal to true, unless a swap occurs
    //If no swap occurs, then we know we do not need to iterate anymore
    //and we can return the array at its current state
    let noSwaps;
    for(let i = arr.length; i > 0; i--){
        noSwaps = true;
        for(let j = 0; j < i - 1; j++){
            if(arr[j] > arr[j+1]){      //swaps the current element with the element ahead of it, if it is less than the current element.
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr;
}

bubbleSort([3,4,2,1,89,31,44,55,22])
//[1, 2, 3, 4, 22, 31, 44, 55, 89]