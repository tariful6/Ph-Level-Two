// Uses  map , filter, sort, slice --------------------------------------

const products = [
  {
    id: 1,
    productName: "Wireless Mouse",
    category: "Electronics",
    price: 1200,
    rating: 4.5,
    stock: 25,
  },
  {
    id: 2,
    productName: "Bluetooth Headphones",
    category: "Electronics",
    price: 3200,
    rating: 4.3,
    stock: 18,
  },
  {
    id: 3,
    productName: "Smart Watch",
    category: "Electronics",
    price: 4500,
    rating: 4.6,
    stock: 12,
  },
  {
    id: 4,
    productName: "USB Flash Drive 64GB",
    category: "Accessories",
    price: 800,
    rating: 4.2,
    stock: 40,
  },
  {
    id: 5,
    productName: "Gaming Keyboard",
    category: "Electronics",
    price: 2500,
    rating: 4.7,
    stock: 10,
  },
  {
    id: 6,
    productName: "Laptop Stand",
    category: "Accessories",
    price: 1500,
    rating: 4.4,
    stock: 20,
  },
  {
    id: 7,
    productName: "Office Chair",
    category: "Furniture",
    price: 8500,
    rating: 4.1,
    stock: 8,
  },
  {
    id: 8,
    productName: "LED Monitor 24-inch",
    category: "Electronics",
    price: 12000,
    rating: 4.8,
    stock: 6,
  },
  {
    id: 9,
    productName: "Water Bottle",
    category: "Home",
    price: 400,
    rating: 4.0,
    stock: 50,
  },
  {
    id: 10,
    productName: "Notebook",
    category: "Stationery",
    price: 120,
    rating: 4.3,
    stock: 100,
  },
  {
    id: 11,
    productName: "Ball Pen",
    category: "Stationery",
    price: 20,
    rating: 4.1,
    stock: 200,
  },
  {
    id: 12,
    productName: "Coffee Mug",
    category: "Home",
    price: 350,
    rating: 4.5,
    stock: 30,
  },
  {
    id: 13,
    productName: "Desk Lamp",
    category: "Home",
    price: 1800,
    rating: 4.4,
    stock: 15,
  },
  {
    id: 14,
    productName: "Power Bank 10000mAh",
    category: "Electronics",
    price: 2200,
    rating: 4.6,
    stock: 25,
  },
  {
    id: 15,
    productName: "Wireless Charger",
    category: "Electronics",
    price: 1800,
    rating: 4.2,
    stock: 18,
  },
  {
    id: 16,
    productName: "Backpack",
    category: "Fashion",
    price: 1600,
    rating: 4.3,
    stock: 22,
  },
  {
    id: 17,
    productName: "Sunglasses",
    category: "Fashion",
    price: 900,
    rating: 4.0,
    stock: 35,
  },
  {
    id: 18,
    productName: "Sneakers",
    category: "Fashion",
    price: 3200,
    rating: 4.5,
    stock: 16,
  },
  {
    id: 19,
    productName: "Smartphone Case",
    category: "Accessories",
    price: 300,
    rating: 4.1,
    stock: 45,
  },
  {
    id: 20,
    productName: "Portable Speaker",
    category: "Electronics",
    price: 2800,
    rating: 4.7,
    stock: 14,
  },
];

//? expected output : Output => [{namme : "Phone"}, {name : "Smart Watch"}] --------------
// Todo filter => Electronics
// Todo sort By => Rating
// Todo slice => first 3 (top 3)
// Todo Map => first 3 (top 3)

// const topElectricsProduct = products.filter(product => product.category === "Electronics")
// .sort((a,b)=> a.rating - b.rating )
// .slice(0, 3)
// .map(item => {
//   return {name : item.productName}
// }) 
// console.log(topElectricsProduct);



// sorting and filtering -----------------------------------------------

// const numbers = [40, 100, 1, 5, 25, 10];
// const fruits = ["banana", "apple" ,"orange", "lemon", "tomato"]

// const sortNumber = numbers.sort((a, b) => a - b);
// console.log(sortNumber); 
// console.log(numbers); // change also original array..

// const sortFruit = fruits.sort((a, b) => a.localeCompare(b));
// console.log(sortFruit); // change also original array..
// console.log(fruits); 


// nasted arry to flat array --------------------------------------------
// const arr = [1, 2, 3, [4, 5, [6, 7, [8, 9]]]]
// // const flatArr = arr.flat() // for one nasted
// // const flatArr = arr.flat(2) // for 2 nasted
// const flatArr = arr.flat(Infinity) // for unknown.
// console.log(flatArr);


// for ignore duublicate value from array --------------------------------
// const tagsFromPost = [
//   ["javascript", "react", "css"],
//   ["node", "express"],
//   ["css", "html", "react"],
// ]
// const filterTags = [...new Set(tagsFromPost.flat())]
// console.log(filterTags);



// Array cross matching and Array.from ------------------------------
// const numbers = [1, 2, 3, 4, 5]
// const hasNumber = numbers.some(number => number % 2 === 0);
// console.log( hasNumber);


// const currentUserRoles = ["user", "editor", "admin"];
// const featureAccessRoles = ["manager", "admin"];

// const canAccess = currentUserRoles.some((role)=> featureAccessRoles.includes(role))
// console.log(canAccess);


// create array with fixed value --------------------------------------

// const arr = Array.from({length : 5}).fill(0)
// console.log(arr);

// const arr2 = Array.from([1,2,3], (value)=> value * value)
// console.log(arr2);


// const range = (start, stop, step) => Array.from({ length : Math.ceil((stop - start) / step)}, (_, i)=> start + i * step);
// console.log(range(1, 11, 2));


// Aggregation (reduce) --------------------------------

// const catrItems = [
//   { id: 1, name: "Laptop", price: 1500, quantity: 1 },
//   { id: 2, name: "Mouse", price: 350, quantity: 2 },
//   { id: 3, name: "Keyboard", price: 2200, quantity: 1 },
// ];
//  const subTotal = catrItems.reduce((subTotal, product)=>{
//   console.log(subTotal, product);
//   return subTotal + product.price * product.quantity;
//  },0)
//  console.log(subTotal);



// const players = [
//   { name: "Rahim", score: 85 },
//   { name: "Karim", score: 78 },
//   { name: "Hasan", score: 92 },
//   { name: "Sadia", score: 88 },
//   { name: "Nusrat", score: 91 },
//   { name: "Mitu", score: 76 },
// ];
// const bestScorer = players.reduce((bestPlayer, player)=> {
//   if(bestPlayer.score > player.score){
//     return bestPlayer
//   }
//   return player
// }, players[0])
// console.log(bestScorer);


//  lookup table reduce ?  --------------------------
// const books = [
//   { id: 1, title: "The Silent River", author: "J.K. Rahman" },
//   { id: 2, title: "Dreams of Tomorrow", author: "Nadia Ahmed" },
//   { id: 3, title: "Code of Life", author: "Arif Hossain" },
//   { id: 4, title: "Journey Beyond Stars", author: "Sumaiya Islam" },
//   { id: 5, title: "Whispers of Time", author: "Tanvir Hasan" },
// ];
// const lookupTable = books.reduce((table, post)=> {
//   table[post.id] = post;
//    return table
// },{})
// console.log(lookupTable);


// Scenario Based Activity - Grouping Data ------------------------

const surveyResponses = [
  "B",
  "A",
  "C",
  "B",
  "C",
  "A",
  "B",
  "C",
  "A",
  "B",
  "C",
  "A",
  "B",
  "A",
  "C",
  "B",
  "C",
  "A",
  "B",
  "A"
];

// TODO initiate empty object
// TODO 

// const survey = surveyResponses.reduce((table, response)=> {
//   console.log(table, " : ", response);
//     if(table[response]){
//       table[response] = table[response] + 1
//     }else {
//       table[response] = 1;
//     }
//     return table
// }, {})
// console.log(survey);

// ----------------- or ----------------------------------------------
// const survey = surveyResponses.reduce((table, response)=> {
//     table[response] = (table[response] || 0 ) + 1;
//     return table
// }, {})
// console.log(survey);




// Scenario Based Activity - Aggregating Data --------------------------
// const sales = [
//   { category: "Electronics", item: "Laptop", price: 1200, quantity: 1 },
//   { category: "Books", item: "JS Basics", price: 30, quantity: 2 },
//   { category: "Electronics", item: "Mouse", price: 25, quantity: 2 },
//   { category: "Home", item: "Chair", price: 150, quantity: 1 },
//   { category: "Books", item: "React Deep Dive", price: 50, quantity: 1 },
//   { category: "Electronics", item: "Keyboard", price: 80, quantity: 1 },
// ];

// const totalSalesByCategory = sales.reduce((table, sale)=> {
//   console.log(table, " : ", sale, "------------------");
//   const {price, category, quantity} = sale
//   if(!table[category]){
//     table[category]= {
//       totalRevenue : 0,
//       itemCount : 0,
//     };
//   }
//   table[category].totalRevenue += price * quantity;
//   table[category].itemCount += quantity;
//   return table;
// },{}) 
// console.log(totalSalesByCategory);


// Scenario Based Activity - Denormalizing Data ---------------------------
const users = [
  { id: 101, name: "Alice" },
  { id: 102, name: "Bob" },
  { id: 103, name: "Charlie" },
];

const posts = [
  { id: 1, userId: 102, title: "My first post" },
  { id: 2, userId: 101, title: "React Hooks" },
  { id: 3, userId: 101, title: "Data Structures" },
  { id: 4, userId: 103, title: "CSS is fun" },
  { id: 5, userId: 102, title: "Node.js streams" },
];

// const postByUserId = posts.reduce((table, post)=>{
//   const {userId} = post;

//   if(!table[userId]){
//     table[userId] = []
//   }
//   table[userId].push(post);
//   return table;
// },{})


// const userWithPosts = users.map((user)=> {
//   return {
//     ...user,
//     posts : postByUserId[user.id] || [],
//   }
// })
// console.log(postByUserId);
// console.log(JSON.stringify(userWithPosts));


//  Scenario Based Activity - Binning (Resampling) Time Series Data ------------------------
const events = [
  { timestamp: "2025-10-22T10:01:00Z", type: "click" },
  { timestamp: "2025-10-22T10:05:00Z", type: "scroll" },
  { timestamp: "2025-10-22T10:14:00Z", type: "click" },
  { timestamp: "2025-10-22T10:31:00Z", type: "click" },
  { timestamp: "2025-10-22T10:45:00Z", type: "scroll" },
  { timestamp: "2025-10-22T11:02:00Z", type: "click" },
];
const INTERVEL = 30 * 60 * 1000
const getBinningTimeStamp = (timestamp)=>{
  const date = new Date(timestamp)
  const floorDate = Math.floor(date.getTime()/INTERVEL) * INTERVEL;
  return new Date(floorDate).toISOString();
}

const binnedData = events.reduce((acc, event)=>{
   const bin = getBinningTimeStamp(event.timestamp)
   if(!acc[bin]){
    acc[bin] = {total : 0}
   }
   acc[bin].total = acc[bin].total +1;
   return acc
}, {})
console.log(binnedData);