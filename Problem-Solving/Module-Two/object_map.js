// object has a limitation it convert all value as a string..

// const obj ={
//     nextLevel : {courseId : "Level2"},
//     "Programming Hero" : {courceId : "level1"}
// };
// console.log(obj);
// console.log(obj["Programming Hero"]);
// console.log(obj.nextLevel);



// const obj2 = {}
// obj2.nextLevel = { courseId : "level2"};
// obj2[true] = {courceId : "level1"}
// console.log(obj2);

// For solve this problem we can use map  ----------------------------

const cource1 = {name : "Programming hero"};
const cource2 = {name : "NExt Level development"};

const maap = new Map();
maap.set(cource1, {courceId : "Level1"});
maap.set(cource2, {courceId : "Level2"}); // but if we use obj it gives -- obj obj.
console.log(maap);
console.log(maap.size);
console.log(maap.has(cource1));

maap.forEach((value, key)=> console.log("Key", key, "value" , value))
maap.forEach((value, key)=> (key.name = "Bangladesh -------" , + key.name))
console.log(maap);
console.log([...maap.keys()]);
console.log([...maap.values()]);

for(let key of maap.keys()){
    key.name = "Andharijhar" + key.name;
}
console.log(maap);
console.log(maap.entries());


const cources = [
    ["Programming Hero", "Level 1"],
    ["Next Level", "Level 2"],
];
const courseMap = new Map(cources)
console.log(courseMap);
