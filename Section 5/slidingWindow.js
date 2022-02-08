function maxSubarraySum(arr,num){
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num) return null;
    //This for loop runs once to initiate the initial maxSum. In this case it sums together the first three numbers
    for(let i = 0; i < num; i++){
        maxSum += arr[i];
    }
    //i value is equivalent to num value at this point 
    //The first three numbers, 2 + 6 + 9 = 17 for our current maxSum value. 
    //We store this maxSum value in a variable called tempSum
    tempSum = maxSum; 
    for(let i = num; i < arr.length; i++){          //The index of i starts at the num value. In other words, we start where our first for loop left off. 
        tempSum = tempSum - arr[i - num] + arr[i];  //15 - arr[3-3] + arr[3] on first iteration
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

maxSubarraySum([2,6,9,3,1,8,5,6,3],3) //should return 19

//Process for how the code executes...
/*
//tempSum = maxSum ----> 17 from our first for loop
[2,6,9,3,1,8,5,6,3]  tempsum == 17, maxSum == 17 
 -   -             

first iteration: 
[2,6,9,3,1,8,5,6,3]   tempSum = tempSum - arr[i-num] + arr[i];
   -   -              tempSum = 17      - arr[3-3]    + arr[3]
                      tempSum = 17 -2 + 3
                      maxSum ==17, tempSum fo this iteration ==18. We take the max and store it in maxSum variable. maxSum variable gets updated to be 18

second iteration:
[2,6,9,3,1,8,5,6,3]   tempSum = tempSum - arr[4-3] + arr[4]
     -   -            tempSum = 18 - 6 + 1 
                      tempSum = 13 
                      maxSum == 18, tempSum for this iteration == 13. We take the max and store it in maxSum variable. maxSum remains 18

third iteration:
[2,6,9,3,1,8,5,6,3]   tempSum = tempSum - arr[i-num] + arr[i];
       -   -          tempSum = 13 - arr[5-3] + arr[5]
                      tempSum = 13 - 9 + 8
                      tempSum = 12
                      maxSum ==18, tempSum for this iteration == 12. We take the max and store it in maxSum variable. maxSum remains 18.

fourth iteration:
[2,6,9,3,1,8,5,6,3]   tempSum = tempSum - arr[i-num] + arr[i];
         -   -        tempSum = 12  - arr[6-3] + arr[6];
                      tempSum = 12 - 3 + 5
                      tempSum = 14
                      maxSum ==18, tempSum for this iteration == 14. We take the max and store it in maxSum variable. maxSum remains 18.

fifth iteration:                      
[2,6,9,3,1,8,5,6,3]   tempSum = tempSum - arr[i-num] + arr[i];
           -   -      tempSum = 14  - arr[7-3] + arr[7];
                      tempSum = 14 - 1 + 6
                      tempSum = 19
                      maxSum ==18, tempSum for this iteration == 19. We take the max and store it in maxSum variable. maxSum variable gets updated to be 19. 


[2,6,9,3,1,8,5,6,3]   tempSum = tempSum - arr[i-num] + arr[i];
             -   -    tempSum = 19  - arr[8-3] + arr[8];
                      tempSum = 19 - 8 + 3
                      tempSum = 14
                      maxSum == 19, tempSum for this iteration == 14. We take the max and store it in maxSum variable. maxSum variable remains 19

This is the last iteration. Therefore we return a value of 19 for maxSum. 19 is the maximum value we can obtain when summing up a subarray of size 3. 

*/
