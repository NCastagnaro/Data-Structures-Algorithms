//Create a function that takes in a string and tests to see if it is a palindrome
//return 'true' if it is a palindrome and 'false' if it is not
//'racecar' should return true
//'racecars' should return false

const ispalindrome = word =>{
    let originalWord = word

    let newWord = [...word].reverse().join('')

    if(originalWord === newWord) return true

    return false
}

//one line syntax - this will return either true or false like above, but it is a much more concise format:
//const isPalindrome = word => [...word].reverse().join('')


//Explanation: 
//We take the word, use the spread operator, which will spread the characters of the string into array elements. And we encased it in array brackets. So, it is now in array format. 
// Once converted to ao an array, we can use the built in array, reverse() method, and then we finally use the array join() method which creates and returns a new string. 
//We can then compare the new reversed string to the original to test if it is indeed a palindrome. If it is, the if statement will fire and return true. Otherwise, it will return false.


//Methods/ Processes Used:
//spread operator allows an iterable such as an array or string to be expanded in places where zero or more arguments(for function calls) or elements(for array literals) are expected. 
//reverse() method reverses an array in place and returns the reference to the same array, the first array element now becoming the last and the last array element becoming the first. 
//join() method creates and returns a new string by concatenating all the elements in an array(or an array-like object) separated by commas or a specified separator string.
