//2.8.23
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false

const containsDuplicate = nums =>{
    let obj = {}

    for(let val of nums){
        obj[val] = (obj[val] || 0) + 1
    }

    for(let key in obj) {
        if(obj[key] > 1) return true
    }

    return false
}

//Explanation:

//We need to see if there are duplicates in an array. To check for this, I created an object and looped through the array, creating key value pairs.
// The way the for of loop is set up is to set the number in the array to the key, and the frequency of that value to the value. So, when we iterate through
//the object, if any key has a value greater than 1, then we know it is a duplicate value, and we would return true. Otherwise, if we iterate through the whole
//object and the if statement never fires, then we know there is no duplicate and it will return false. 