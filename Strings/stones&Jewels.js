// You're given strings jewels representing the types of stones that are jewels, 
//and stones representing the stones you have. Each character in stones is a type of stone you have. 
//You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0


const numJewelsInStones = (jewels, stones) => {
    //create two separate objects that we will store our jewels and stones values
    let obj1 = {}
    let obj2 = {}

    for(let val of jewels){
        obj1[val] = (obj1[val] || 0) + 1
    }

    for(let val of stones){
        obj2[val] = (obj2[val] || 0) + 1
    }

    //create a total variable that we can initialize at zero and add to for our stones counter
    let total = 0

    //We iterate through the jewels object and if the key is present in the stones, 
    //we know that it is a jewel, so we add it to our total
    for(let key in obj1){
        if(obj2[key]){
            total = total + obj2[key]
        }
    }
return total
}

