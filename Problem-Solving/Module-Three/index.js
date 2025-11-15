// stateless vs stateful ===========================
// stateless --------------------------------------
// function is a stateless. i never store any thing
// const counter = (amount)=>{
//     let count = 0
//     count = count + amount
//     return count
// }
// console.log(counter(3));
// console.log(counter(2));



// stateful --------------------------------------
// object is a stateful. i can store data 
// const counters = {
//     count : 0,
//     add(amount){
//         this.count = this.count + amount;
//     },
//     print(){
//         console.log(this.count);
//     }
// }
// counters.add(2)
// counters.add(3)
// counters.print()


// stateless function to  stateful conver. but con recomended------------
// if we change count value it will effect in whole function

// // let count = 5
// let count = 0
// const counter = (amount)=>{
//     count = count + amount
//     return count
// }
// console.log(counter(3));
// console.log(counter(2));


// function clouser || higher order function. it little bit safe -------
// const createCounter = () =>{
//     let count = 0;
//     return (amount)=> {
//         count = count + amount;
//         return count
//     }
// }
// const counter = createCounter();
// console.log(counter(3));
// console.log(counter(2));



// class constracror | encapsulation ---------------------------------------------
// class Counter {
//     constructor(count){
//         this.count = count
//     }
//     add(amount){
//         this.count = this.count + amount;
//     }
//     print(){
//         console.log(this.count);
//     }
// }
// const counter1 = new Counter(0)
// counter1.add(2)
// counter1.add(3)
// counter1.print()

// const counter2 = new Counter(10)
// counter2.add(20)
// counter2.add(30)
// counter2.print()

//  Stack Implementation using Array - LIFO stack -----------------------

// class Stack {
//     constructor(){
//         this.items = []
//     }
//     push(value){
//         this.items.push(value)
//     }
//     pop(){
//         if(this.isEmpty()){
//             return undefined;
//         }
//         return this.items.pop()
//     }
//     peek(){
//         if(this.isEmpty()){
//             return undefined;
//         }
//         return this.items[this.items.length - 1]
//     }
//     isEmpty (){
//         return this.items.length === 0
//     }
//     print(){
//         console.log(this.items.slice().reverse().join(" --- "));
//     }
// }
// const stack = new Stack()
// console.log(stack.peek());
// console.log(stack.isEmpty());
// stack.push(10)
// stack.push(20)
// stack.push(30)

// stack.print()
// console.log(stack.peek());
// console.log(stack.pop());


//  Queue Implementation using Array - FIFO -----------------------
// Array implementation but less efficient  ---------------

// class Queue {
//     constructor(){
//         this.items = []
//     }
//     enqueue(value){
//         this.items.push(value)
//     }
//     dequeue(){
//         if(this.isEmpty()){
//             return undefined;
//         }
//         return this.items.shift()
//     }
//     peek(){
//         if(this.isEmpty()){
//             return undefined;
//         }
//         return this.items[0]
//     }
//     isEmpty (){
//         return this.items.length === 0
//     }
//     print(){
//         console.log("Start", this.items.join(" --- "), " --- End");
//     }
// }
// const queue = new Queue()
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// console.log(queue.peek());

// queue.print()
// queue.dequeue()
// queue.print()


// Linked List Implementation - Basic concept of Node -------------
// class Node {
//     constructor(Value){
//         this.value = Value;
//         this.next = null
//     }
// }
// const head = new Node(10)
// head.next = new Node(20)
// head.next.next = new Node(20)
// console.log(head);

// let temp = head;
// while(temp !== null){
//     console.log(temp.value, " ");
//     temp = temp.next;
// }


// Linked List Implementation - append() and print() -------------

// class Node {
//     constructor(Value){
//         this.value = Value;
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
//     append(value){
//         const newNode = new Node(value)

//         if(this.head === null){
//             this.head = newNode;
//             this.tail = newNode;
//         }else{
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++;
//         return this
//     }
//     prepend(value){
//         const newNode = new Node(value)

//         if(this.head === null){
//             this.head = newNode;
//             this.tail = newNode;
//         }else{
//             newNode.next = this.head;
//             this.head = newNode;
//         }
//         this.length++;
//         return this
//     }
//     insert(index, value){
//         if(index < 0 || index > this.length){
//             console.error("Index out of bound : ")
//             return undefined
//         } 
//         if(index === 0){
//             return this.prepend(value);
//         }
//         if(index === this.length){
//             return this.append(value)
//         }

//         const leadingNode = this._traversToIndex(index - 1)
//         const holdingNode = leadingNode.next;

//         const newNode = new Node(value)
//         leadingNode.next = newNode;
//         newNode.next = holdingNode;

//     }
//     remove(index){
//         if(index === 0){
//             const removeItem = this.head.value;
//             this.head = this.head.next;
//             if(this.length === 0){
//                 this.tail = null
//             }
//             this.length--;
//             return removeItem;
//         }
//         const leadingNode = this._traversToIndex(index - 1);
//         const nodeToRemove = leadingNode.next;
//         leadingNode.next = nodeToRemove.next;

//         if(leadingNode.next === null){
//             this.tail = leadingNode;
//         }
//         return nodeToRemove.value
//     }

//     _traversToIndex(index){
//         let count = 0;
//         let currentNode = this.head;
//         while(count !== index){
//             currentNode = currentNode.next;
//             count ++;
//         }
//        return currentNode
//     }
//     print(){
//         const arr = []
//         let currentNode = this.head
//         while(currentNode !== null){
//             arr.push(currentNode.value);
//             currentNode = currentNode.next;
//         }
//         console.log(arr.join("---"), " -- null" );
//     }
// }
// const linkedList = new LinkedList()
// // linkedList.append(1)
// // linkedList.append(2)
// // linkedList.append(3)

// // linkedList.prepend(10)
// // linkedList.prepend(20)
// // linkedList.prepend(30)
// // linkedList.insert(2,100)


// // linkedList.append(0).append(1).append(3)
// // linkedList.insert(2,100)

// linkedList.append("A")
// linkedList.append("B")
// linkedList.append("D")

// linkedList.print()
// linkedList.remove(2)
// linkedList.remove(0)
// linkedList.print()


// example same Queue Implementation and Linked List  Implementation -----------------
// Queue -------------------------------------------------------
class Node {
    constructor(Value){
        this.value = Value;
        this.next = null
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek(){
        return this.first ? this.first.value : undefined;
    }
    enqueue(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.first = newNode;
            this.last = newNode
        }else{
            this.last.next = newNode;
            this.last = newNode
        }
        this.length++;
        return this
    }
    dequeue(){
        if(this.isEmpty()){
            return undefined
        }
        const nodeToRemove = this.first;
        if(this.first = this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.length--;
        return nodeToRemove.value
    }
    isEmpty(){
        return this.length === 0;
    }
    size(){
        return this.length
    }
    print(){
        const array = [];
        let currentNode = this.first;
        while(currentNode){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log("First ---" + array.join(" --- ") + "Back");

    }

}