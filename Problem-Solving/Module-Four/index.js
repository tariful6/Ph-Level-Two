import Stack from "./stack.js";

// Basic cache implementation with Map -----------------
// const dataCache = new Map();
// const expensiveTask = (id) =>{
//     console.log("Run the expensive task for", id);
//     return {
//         id : id,
//         data : `Some data for id ${id}`,
//         timestamp : new Date().getTime()
//     }
// }

// const getData = (id) =>{
//     if(dataCache.has(id)){
//         return dataCache.get(id) 
//     }
//     console.log("Case data miss id ", id);
//    const data = expensiveTask(id)
//    dataCache.set(id, data)
//    return data
// }
// console.log(getData(123));
// console.log(getData(123));
// console.log(dataCache);


// Mutual friends counter with Set -----------------------------------------

const USER_COUNT = 50000;
let userA = [];
let userB = [];

const createUser = (id) => ({id: `user_${id}`, name : `User ${id}`})
for(let i = 0; i < USER_COUNT; i++){
    userA.push(createUser(i))
    userB.push(createUser(i + 25000))
}


// bad way approch at take too much time  -------
// const commonFriends = (userA, userB) =>{
//     const startTime = performance.now()
//     const commonFriends = []
//     userA.forEach((userA )=>{
//         userB.forEach((userB)=>{
//         if(userA.id === userB.id){
//             commonFriends.push(userB)
//           }
//         })
//     })
//     const endTime = performance.now()
//     return {count : commonFriends.length, timeTookToFinished : endTime - startTime}
// }
// console.log(commonFriends(userA, userB));





// good way approch at take tless time  --------
// const commonFriendsFirst = (userA, userB) =>{
//     const startTime = performance.now()
//     const commonFriends = []
//     const idListA = new Set(userA.map((user) => user.id))
//     console.log(idListA);

//     userB.forEach((userB)=>{
//         if(idListA.has(userB.id)){
//             commonFriends.push(userB)
//         }
//     })
//     const endTime = performance.now()
//     return {count : commonFriends.length, timeTookToFinished : endTime - startTime}
// }
// console.log(commonFriendsFirst(userA, userB));


// Valid Parentheses -----------------------------------------------------------------

// const bracketChecker = (str) => {
//     const stack = new Stack()
//     const breaketMap = {
//         ")" : "(",
//         "}" : "{",
//         "]" : "["
//     }
//     for(let i = 0; i <str.length; i++ ){
//         const char = str[i];
//         if(char === "(" || char === "{" || char === "["){
//             stack.push(char)
//         }else if(char === ")" || char === "}" || char === "]"){
//             if(stack.isEmpty()){
//                 return false;
//             }

//             const expected = breaketMap[char]
//             const got = stack.pop();

//             console.log("expected", expected , "got", got);

//             if(got !== expected){
//                 return false
//             }
//         }
//     }
//     return stack.isEmpty();
// }
// console.log(bracketChecker("()[]{}"));
// console.log("--------------------");
// console.log(bracketChecker(")()[]{}"));
// console.log("-------------------");
// console.log(bracketChecker("()[]{"));



// Two Sum ---------------------------------
// const twoSum = (arr, target) =>{
//     const numbMap = new Map();

//     for(let i = 0; i < arr.length; i++){
//         const currentNumber = arr[i]
//         const complement = target - currentNumber;

//         console.log("Current Number", currentNumber);
//         console.log("complement" , complement);

//         if(numbMap.has(complement)){
//             return [numbMap.get(complement), 1]
//         }
//         numbMap.set(currentNumber, i)
//         console.log(numbMap);
//     }
//     return undefined
// }
// console.log(twoSum([2,2,7,11], 9));


//  Palindrome Checker ---------------------------------
// bad approch --------------------
// const isPalindrome = (str) => {
//     const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, "")
//     const reversed = normalized.split("").reverse().join("")

//     if(reversed === normalized){
//         return true;
//     }
//     return false
// }
// console.log(isPalindrome("---level---"));



// // good approch ----------------------
// const isPalindromeTwoPointer = (str) => {
//     const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, "");
//     let left = 0;
//     let right = normalized.length - 1;

//     while(left < right){
//         if(normalized[left] !== normalized[right]){
//             return false
//         }
//         left ++;
//         right --;
//     }
//     return true
// }

// console.log(isPalindromeTwoPointer("A man, a plan, a canal: Panama"));


// Binary Search Algorithm ------------------------------------------------
// const binarySearch = (arr, target) =>{
//     let low = 0;
//     let high = arr.length - 1;

//     while(low <= high){
//         const mid = Math.floor((high + low) / 2)
//         const guess = arr[mid]
//         if(guess === target){
//             return mid;
//         }else if(guess > target){
//             high = mid - 1;
//         }else{
//             low = mid + 1
//         }
//     }
//     return -1;
// }
// console.log(binarySearch([3,5,6,7,9,11],7));



// Selection sort implementation -----------------------------------------------

// const selectionSort = (array)=>{
//     for(let i = 0; i <array.length; i++){
//          console.log("State of arr:", array);
//         let minIndex = i;
//         for(let j = i; j < array.length; j++){
//             if(array[j] < array[minIndex]){
//                 minIndex = j
//             }
//             // console.log("value", array[minIndex], "index", minIndex);
//         }
//         if(minIndex !== i ){
//             let temp = array[i]
//             array[i] = array[minIndex]
//             array[minIndex] = temp;
//         }
//         console.log(`After pass ${i + 1}, array`);
//     }
// }
// selectionSort([5,3,8,4,2])



// Insertion sort implementation -----------------------------------------------

// const insertionSort = (arr) => {
//     for(let i = 1; i < arr.length; i++){
//         let current = arr[i];
//         let j = i - 1;
//         while(j >=  0 && arr[j] > current){
//             arr[j + 1] = arr[j];
//             j--;
//         }
//         arr[j + 1] = current;
//     }
//     return arr
// }
// console.log(insertionSort([5,3,8,4,2]));