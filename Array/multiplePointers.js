//Write a function called 'sumZero' which accepts a sorted array of integers. The function should find the first pair where the sum is zero.
//Return an array that includes both values that sum to zero or undefined if a pair doesn't exist. 
//[-9,-4,-3,-2,1,2,10,83,100,2839] should return [-2,-2]
//[-10,-3,-2,5,8,19] should return undefined


const sumZero = arr => {
    let left = 0
    let right = arr.length - 1

    while(left < right){
        let sum = arr[left] + arr[right]

        if(sum === 0) return [arr[left], arr[right]]

        else if(sum > 0){
            right --
        }
        else{ //sum < 0
            left++
        }
    }
    return undefined
}


//Explanation:

//I created a left and right pointer. When we run our while loop, if the left and right value in the array sum to zero, then we will return the indeces. 
//Otherwise, we will move the pointers accordingly. If the sum is greater than zero then we know we need to move the right pointer to the left, so we decrement it.
//And if the sum if less than zero, we will fire the else condition, which will increment the left pointer. 
//And if we exit the while loop because the left value ends up being greater than the right value, we will return undefined. 