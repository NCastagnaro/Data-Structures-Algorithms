//Reverse a string with the reduce method

function reverseString(text) {
    return text.split("").reduce((acc, char) => char + acc, '')
}

//Explanation:
//We split the text received into an array of characters and then we call the reduce() method on the array which begins with an empty string as the intial value 
//and accumulates each character in reverse until it has gone through all characters in the array. At this point, it returns the completely reversed string. 




//Using the ES6 spread operator
function reverseString(text) {
    return [...text].reduce((acc, char) => char + acc, '')
}