
// Destructure and spread operator =============================================
const student = {
    name: "Tariful Islam",
    age: 24,
    address :"Dhaka, Bangladesh",
    grade : "A"
};
console.log(student.name); // old process.
const {name:myname, age, address, grade, role="user"} = student; // new processs destructure.. 
console.log(myname);
console.log(role);


const data = {
    profile : {
        email : "abc@gmail.com"
    }
}
const {profile: {email}={}} = data;  // nested destructure
console.log(email);


const arr = [1,2,3,4,5];
const [, second, third, ...rest] = arr; // destructure array
console.log(second);
console.log(rest);


const obj = {
    x: 10,
    y: 20,
    z: 30,
    a: 40
};
const {x=null, y, ...others} = obj; // rest parameter in object destructure
console.log({y, others});


function sum(...num){
    return num.reduce((a,b) => a + b, 0);  // rest parameter in function
}
console.log(sum(1,2,3,4,5));



const std1 = {
    name: "Tariful Islam",
    age: 24,
}
const std2 = {
    address: "Dhaka, Bangladesh"
} 
const stds = {...std1, ...std2}; // spread operator in object
console.log(stds);

 
// short hand object ------------------------------------------------------
const mentorName = "Mentor", mentorAge = 30, mentorAddress = "Chittagong";
const mentor = { mentorName, mentorAge, mentorAddress}; // spread operator in object
console.log(mentor);

// Backtic - templete literal =========================================
let name = "Tariful Islam";
let ages = 24;
console.log(`My name is ${name} and my age is ${ages}`); // templete literal use backtic `   


// ======================================

// const records = [
//     {name: "Tariful", score: 85, age: 24},
//     {name: "Sky", score: 48, age: 34},
//     {name: "Moon", score: 65, age: 41},
//     {name: "Star", score: 55, age: 25},
//     {name: "Bd", score: 56, age: 33},
// ]
// const topclass = records.reduce((acc, curr) => {
//     const runs = curr?.score >= 50 ? "topclass" : "average";
//     console.log(runs);
// },{})

console.log(" ------------------------------------");
const records2 = [
    {name: "Tariful", score: 85, age: 24},
    {name: "Sky", score: 48, age: 34},
    {name: "Moon", score: 65, age: 41},
    {name: "Star", score: 55, age: 25},
    {name: "Bd", score: 56, age: 33},
]
const arry = []
const topclass2 = records2.reduce((acc, curr) => {
    const runs = curr?.score >= 50 ? "topclass" : "average";
    runs === 'topclass' && arry.push(curr);
    return arry
},{})
console.log(arry);


// 1: 36 running -------------------------------------------
