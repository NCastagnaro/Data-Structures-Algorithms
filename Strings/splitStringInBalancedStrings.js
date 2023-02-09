//2.8.23

// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

// Given a balanced string s, split it into some number of substrings such that:

// Each substring is balanced.
// Return the maximum number of balanced strings you can obtain.

// Example 1:

// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
// Example 2:

// Input: s = "RLRRRLLRLL"
// Output: 2
// Explanation: s can be split into "RL", "RRRLLRLL", each substring contains same number of 'L' and 'R'.
// Note that s cannot be split into "RL", "RR", "RL", "LR", "LL", because the 2nd and 5th substrings are not balanced.
// Example 3:

// Input: s = "LLLLRRRR"
// Output: 1
// Explanation: s can be split into "LLLLRRRR".


const balancedStringSplit = s => {
    let count = 0;
    let balance = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'L') {
            balance++;
        } else {
            balance--;
        }
        if (balance === 0) {
            count++;
        }
    }
    return count;
};


//Explanation

//We create a variable for named 'count' and 'balance' and initialize both at 0. This question requires that you go from left to right in order, and you 
//only have a valid, balanced string when the "L" and "R" quantities are equal. So, as you go through, you increment the balance value when an 'L' value is present,
//and you decrement for any other condition, in this case, when there is an 'R' value. When you reach a balance value of 0, you know you have a balanced substring,
//the second if statement with fire and you increment the count value. Once it is done looping it will return the count value, which will represent the number of balanced
//substrings you have.   



