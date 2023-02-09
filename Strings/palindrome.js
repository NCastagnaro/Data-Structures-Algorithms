//Create a function that takes in a string and tests to see if it is a palindrome
//return 'true' if it is a palindrome and 'false' if it is not
//'racecar' should return true
//'racecars' should return false

const ispalindrome = word =>{
    let originalWord = word

    let newWord = word.split('').reverse().join('')

    if(originalWord === newWord) return true

    return false
}

//one line syntax - this will return either true or false like above, but it is a much more concise format:
//const isPalindrome = word => word.split('').reverse().join('')


//Explanation: 
//We take the word, split it with the built in string split() method, which returns an array of strings. There is no built in reverse method for strings, so we need to 
//convert it to an array. Once converted, we can use the built in array, reverse() method, and then we finally use the array join() method which creates and returns a new string. 
//We can then compare the new reversed string to the original to test if it is indeed a palindrome. If it is, the if statement will fire and return true. Otherwise, it will return false.


//Methods/ Processes Used:
//split() method takes a pattern and divides a string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array. 
//reverse() method reverses an array in place and returns the reference to the same array, the first array element now becoming the last and the last array element becoming the first. 
//join() method creates and returns a new string by concatenating all the elements in an array(or an array-like object) separated by commas or a specified separator string.
