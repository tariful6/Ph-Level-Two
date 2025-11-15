
// Big-O notation of basic Array methods==================================================================
// Array , Object , Set, Map : 4 are the way of data structure in js ----------------------------

// calculate time way number -- 1 : --------------------
// const startTime = performance.now();
// for(let i = 0; i < 5000; i++){
//     console.log(i);
// }
// const endTime = performance.now();
// console.log(`This code took ${endTime - startTime} ms`);



// calculate time way number -- 2 : --------------------
// console.time("task")
// for(let i = 0; i < 5000; i++){
//     console.log(i);
// }
// console.timeEnd("task")


// store number in array  : --------------------
const firstArray = [];
const secondArray = [];
for(let i = 0; i < 200000; i++){
    if(i < 100000){
        firstArray.push(i)
    }
    secondArray.push(i)
}
console.log("firstArray" , firstArray.length);
console.log("secondArray",secondArray.length);


console.time("map1");
const firstListUser = firstArray.map((number)=> ({userId: number}))
console.timeEnd("map1");

console.time("map2");
const secondListUser = secondArray.map((number)=> ({userId: number}))
console.timeEnd("map2");

console.time("find");
const user = secondListUser.find((user)=> user.userId === 1999 )
console.timeEnd("find");

// Set--------------------------------------------------------
// set do not allow to add duplicate data. it give unique values.

// const set = new Set()
// set.add("apple");
// set.add("Mango")
// set.add("banana")
// console.log(set)


// const mezba = {userName : "Mezma"}
// const mizan = {serName : "Mizan"}
// const tanmoy = {serName : "Tanmoy"}
// const set = new Set()
// set.add("Mezma");
// set.add("Mizan")
// set.add("Tanmoy")
// set.add("Tanmoy") // it does not add 
// console.log(set);



// const arr = ["apple", "mango", "banana"];
// const set = new Set(arr)
// set.add("orange")
// const test = Array.from(set)
// test.push("tomato")
// console.log(test);
// console.log(set.has("apple"));
// console.log(set.delete("apple"))
// console.log(set);


// array vs set  ----------------------------------------------------------------
// remove dublicate item  using array : --------------
// const arr = ["apple", "mango", "banana", "banana", "tomato"];
// const removeArray = (arr)=>{
//     const newArr = []
//     arr.forEach(element => {
//         if(!newArr.includes(element)){
//             newArr.push(element);
//         }
//     });
//     return newArr
// }
// console.log(removeArray(arr));

// remove dublicate item  using set : ----------------------
// const arr = ["apple", "mango", "banana", "apple", "orange"];
// const removeSet = (arr)=>{
//     const set = new Set(arr);
//     return Array.from(set)
// }
// console.log(removeSet(arr));


