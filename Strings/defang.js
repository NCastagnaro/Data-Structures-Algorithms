//2.6.2023

// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

// Example 1:

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"

// Example 2:

// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"


const defangIPaddr = address => {
    return address.replace(/\./g,'[.]')
};

// Explanation:

// In this solution, we use the 'replace' method of the string object to replace every instance of the period '.' with '[.]'. The '/\./g' is a regular
// expression that matches a period. The 'g' at the end of the regular expression is a flag that specifies to replace all occurences of the pattern in the string.  

//Methods/Processes Used

//.replace() method


// The replace() method is called on a string and will return a string with a pattern replaced by a replacement string. It takes either a regex or a string as the 
// pattern. With a regex you can globally replace all matches(using the 'g' option), but with a string it will only replace the first occurrence. 