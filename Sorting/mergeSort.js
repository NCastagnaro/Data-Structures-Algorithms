//====================================
//[1,3,5,6,9], [2,3,4,5,6]
//Handles merging of sorted arrays
function merge(arr1,arr2){
    let results = [];
    let i =0;
    let j =0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i] < arr2[j]){
            results.push(arr1[i]);
            i++;
        }
        else{
            results.push(arr2[j])
            j++
        }
    }
//Once one of the arrays reaches its end, the while loop will no longer fire.
//So, if one array has more elements than the other, we need to account for that
//and make sure they get pushed into the results array as well.
//So, we create two while loops to push either arr1's elements, or arr2's elements
//Depending on which one needs to still push elements into the results array 
    while(i<arr1.length){
        results.push(arr1[i]);
        i++
    }

    while(j<arr2.length){
        results.push(arr2[j]);
        j++
    }
    return results;
}
//===============================


//==============================
//Recursive portion that splits and puts arrays back together in sorted order, with help of merge function
function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid))   //Going from 1st element of array, up until(not including) the middle element
    let right = mergeSort(arr.slice(mid))   //Going from middle number until the end
    return merge (left,right)               //calls merge function,using left and right array as parameters
}

mergeSort([10,24,33,7,2,3,100,4350])
//=============================