const pivHelper = (arr, start = 0, end = arr.length - 1) => {
    let pivot = arr[start];
    let temp;
    let swapIndex = start;

    const swap = (arr,i,j) => {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    for(let i = start + 1; i <= end; i++){
        if(pivot > arr[i]){
            swapIndex++;
            swap(arr,i,swapIndex);
        }
    }
    swap(arr,start,swapIndex);
    console.log(arr)
    return swapIndex;

}

const quickSort = (arr,left = 0, right = arr.length -1) => {
    if(left < right){
        let pivotIndex = pivHelper(arr,left,right);
        //left
        quickSort(arr,left,pivotIndex - 1);
        //right
        quickSort(arr,pivotIndex + 1, right);
    }
    return arr;
}