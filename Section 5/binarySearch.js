function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//Create btn variable for our button
let btn = document.querySelector('#button');



btn.addEventListener('click', async function binarySearch(){            //Used addEventListener on btn. Need to use async function, or else we couldn't use await with our sleep function
    document.getElementById("numbers").innerHTML = "";                 //clears our list of numbers, if there is one. There would only be one if we already executed a binary search
    document.getElementById("message").innerHTML = "";                 //clears our message, if there is one. There would only be one if we already executed a binary search

    let arr = document.querySelector('#arrayBox').value;               //query selector fo our array box value. It is initially a string
    let elem = document.querySelector('#elementBox').value;            //query selector for our element box. it is initially a string

    let arrUpdated = arr.split(',').map(function(item){                //Converts array from string to number form
        return parseInt(item,10)
    });
    
    let elemUpdated = parseInt(elem);                                   //Converts the element from a string to a number
    console.log(elemUpdated);
   //=========Conditionals needed for cases where user input is not ideal =======================================================
    const nums = document.querySelector('#numbers');                   //selected our unordered list element
    for(let i = 0; i < arrUpdated.length; i++){
        const li = document.createElement('li');                        //creates li element
        li.id = arrUpdated[i];
        li.append(document.createTextNode(arrUpdated[i]));              //appends the text of our number to the li
        nums.append(li);                                                //we append that overall li, which consists of the list item we created, as well as the text(in this case, the number), to our list
    }

    //Binary Search with sleep incorporated to showcase the functionality of the algorithm on the webpage
    let start = 0;                                                      //Initialize our start variable to be zero
    let end = arrUpdated.length - 1;                                    //Initialize our end variable to be the length of array - 1
    let middle = Math.floor((start + end) /2);                          //Initialize our middle variable to be dependent on start and end values
    while(arrUpdated[middle] !== elemUpdated && start <= end){
        if(elemUpdated < arrUpdated[middle]){
            for(let i = middle; i <= end; i++){                //If element is less than middle, eliminate/turn the elements a different colo from middle up until the end value at that time.
                if(document.querySelectorAll('ul li')[i].style.color = 'pink'){
                    console.log(i);
                }
                document.querySelectorAll('ul li')[i].style.color = 'pink';     //Need to use querySelectorAll to be able to work with specific indexes 
                await sleep(100);
            }
            //await sleep(500);
            end = middle -1;
        }
        else{
            for(let i = middle; i >= start; i--){                       //If element is greater than middle, eliminate/turn the elements a different color from middle down to the start value at that time.
                if(document.querySelectorAll('ul li')[i].style.color = 'pink'){
                    console.log(i);
                }
                document.querySelectorAll('ul li')[i].style.color = 'pink';
                await sleep(100);
            }
            //await sleep(500);
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arrUpdated[middle] === elemUpdated){
        document.querySelector('#message').innerHTML = `Element ${elemUpdated} was found at index: ${middle}`   //return this message if the element is in the array
        return;
    }
    console.log('The element was not found')
    document.querySelector('#message').innerHTML = `Element ${elemUpdated} was not found in the array`          //return this message if the element is not in the array
   
})




