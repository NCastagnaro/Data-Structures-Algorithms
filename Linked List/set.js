//nodes store a piece of data
//and it stores a reference to the next node

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val);
        //if list is empty, assign newNode to head and tail
        //head and tail should be pointing to newNode when there is
        //only one node in the list
        if(!this.head){     //means list is empty/there is no head present
            this.head = newNode;
            this.tail = this.head;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;    //if there is no head return undefined
        let current = this.head;
        let newTail = current;
        while(current.next){    //while there is something next, based on your current position
            newTail = current;   //newTail is always lagging one behind
            current = current.next; 
        }
        this.tail = newTail;    //this.tail is now pointing to newTail.Changes the tail from the last node,to the second to last node
        this.tail.next = null;  //severs the arrow to the last node in the list
        this.length --;         //decrements the length of the list by one
        if(this.length === 0){  //when we have zero items in the list
        this.head = null;       //we make it so the head and tail are set to null
        this.tail = null;       //Otherwise,our list would still have a head and tail, even when 
        }                       //its length is zero.
        return current;         //returns the item that was popped off from the list
    }

    shift(){
        if(!this.head) return undefined;

        this.head = this.head.next;
        this.length --;
        if(this.length === 0){
            this.tail = null;
        }
       // return currentHead;
    }

    unshift(){
       let newNode = new Node(val);     
       if(!this.head){                  //if the list is empty
           this.head = newNode;         //set the unshifted value to be the head
           this.tail = this.head;       //and also the value for the tail
       } 
       else{                            //if the list isn't empty
           newNode.next = this.head;    //set the existing head to be the next value, after the unshifted value
           this.head = newNode;         //and assign the newNode, unshifted value to be the head!
       }
       this.length++;
       return this; 
    }

    get(index){
        if(index < 0 || index >= this.length) return -1;    //returns -1 if the user input for index is negative or greater than the list length
        let counter = 1;                                    //initialize counter to 1
        let currentNode = this.head;                        //assign head to variable "currentNode"
        if(index === 0) {                                   //if index === 0 return currentNode
            return currentNode;                             //That is why we initialize counter to 1, rather than 0
        }
        else{                                               
            while (counter <=index){                       //We continually assign the next node 
                currentNode = currentNode.next             //to be our current node on each iteration
                counter++;                                 //and when the while loop stops firing
            }                                              //we return the currentNode that we are at
            return currentNode;
        }
    }

    set(index,val){
        let foundNode = this.get(index);         //used get function to retrieve the node at the specified index          
        if(foundNode){                           //if a node exists at that index, set the new val for that index
            foundNode.val = val;
            return true; 
        }
        return false;                           //otherwise, if there is no node at that index, return false
    }

}
let list = new SinglyLinkedList();

