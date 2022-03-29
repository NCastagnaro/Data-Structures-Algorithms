// validAnagram('iceman','cinema')  should return true 
function validAnagram(word1,word2){
    if(word1.length !== word1.length){
        return false;
    }
    
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of word1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for (let val of word2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for(let key in frequencyCounter1){
        if(frequencyCounter1[key] !== frequencyCounter2[key]){
            return false;
        }
    }
    return true;
}


//You can use a very similar setup to check if numbers are the same. 
function similarNumber(num1,num2){
    num1 = num1.toString();
    num2 = num2.toString();
    if(num1.length !== num2.length){
        return false;
    }


    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of num1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for (let val of num2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for(let key in frequencyCounter1){
        if(frequencyCounter2[key] !== frequencyCounter1[key]){
            return false;
        }
    }
    return true;
}



