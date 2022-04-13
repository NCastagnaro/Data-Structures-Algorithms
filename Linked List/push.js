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
}
let list = new SinglyLinkedList();



