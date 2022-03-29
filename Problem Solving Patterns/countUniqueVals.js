//countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) should return 7
/*function countUniqueValues(arr){
    let arr1 = [];
    for(let i = 0; i < arr.length; i++){
        if(arr1.indexOf(arr[i]) == -1){
            arr1.push(arr[i]);
        }
    }
    return arr1.length;
}
*/

//Refactored Version
//countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) should return 7
function countUniqueValues(arr){
    let i = 0;
    for(let j =1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}

/*
Step by step process of how i and j move:

 i
[1,1,2,3,3,4,5,6,6,7]
   j
   i
[1,2,2,3,3,4,5,6,6,7]
     j
     i
[1,2,3,3,3,4,5,6,6,7]
       j
     i
[1,2,3,3,3,4,5,6,6,7]
         j
       i
[1,2,3,4,3,4,5,6,6,7]
           j
         i
[1,2,3,4,5,4,5,6,6,7]
             j
           i
[1,2,3,4,5,6,5,6,6,7]
               j
           i          
[1,2,3,4,5,6,5,6,6,7]
                 j
             i 
[1,2,3,4,5,6,7,6,6,7]
                   j

i == 6 
return i + 1 will return 7, which indicates we have 7 unique values
*/