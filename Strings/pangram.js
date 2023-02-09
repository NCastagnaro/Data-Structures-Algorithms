//2.8.23
// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

// Example 1:

// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.

const checkIfPangram = sentence => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let char of alphabet) {
      if (!sentence.includes(char)) {
        return false;
      }
    }
    return true;
  }



//Explanation:

// The user enters 'sentence' as the parameter for the function. We then run a for loop to check if every letter in the alphabet appears in the sentence. If any letter is
// missing, the function returns 'false'. If all letters are ProgressEvent, the function returns true. 

//Methods/Processes used:

//for...of statement:
// The for...of statement executes a loop that operates on a sequences of values sourced from an iterable object. In JS, strings are objects. More specifically, it is an instance of the 
// 'String' object. The 'String' object provides a lot of useful methods for working with strings such as 'length', 'toLowerCase', 'toUpperCase', 'split', 'substr', 'replace' etc. 

//"includes" method:

// The includes() method determines if a substring is contained in a larger string and returns true or false. This has many applications, 
// but one common use-case is for string matching for searching/parsing. 
