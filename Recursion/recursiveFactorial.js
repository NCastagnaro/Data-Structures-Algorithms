function factorial(num){
    //Base Case
    if(num === 1) return 1;
    //Recursive Call
    return num * factorial(num-1);
}