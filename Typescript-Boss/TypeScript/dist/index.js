"use strict";
// Setup Typescript ===========================================================================
//    npm install typescript --save-dev --- for install only project.
//    or  
//    npm install -g typescript --- for install globaly in pc.
//    tsc -v
//    npx tsc --init  --- For create typescript config file.
//    Create a src folder in root.goto tsconfig.json file > and uncomment these > 
//       "rootDir": "./src",    "outDir": "./dist",
//    npx tsc --watch // auto convert tsc file to js file
//    tsc -w // convert tsc file to js file
Object.defineProperty(exports, "__esModule", { value: true });
// Premitive -----------------------------------------------------------------------------------
// const name: string = "eddddd";
// console.log(name);
// const number: number = 12233;
// console.log(number);
// const boolean: boolean = true;
// console.log(boolean);
// Premitive Array ------------------------------------------------------------------------------
// const names:string[] = ["aa", "bb", "cc"];
// console.log(names);
// const ages:number[] = [11,22,55,66];
// console.log(ages);
// const permissions:boolean[] = [true, false, true];
// console.log(permissions);
// const manInfo:(string | number | boolean)[] = [true, 123, "abc"];
// console.log(manInfo);
// manInfo.push("bcc")
// console.log(manInfo);
// Touple  --------------------------------------------------------------------------------------
// const two_Numbers:[number, number] = [20,20]
// console.log(two_Numbers);
// const number_string:[number, string] = [20, "Abc",]
// console.log(number_string);
// Object, Literal & Optional Type --------------------------------------------------------------
// const user : {
//     organization : "Programming Hero";
//     readonly fast_name : string;
//     last_name ? : string; // optional --
//     phone :number;
//     isMarried : boolean
// }={
//     organization : "Programming Hero",
//     fast_name : "Tariful",
//     phone : 1750,
//     isMarried : true
// }
// type User = {
//     organization : "Programming Hero";
//     readonly fast_name : string;
//     last_name ? : string; // optional --
//     phone :number;
//     isMarried : boolean
// }
// const user:User = {
//     organization : "Programming Hero",
//     fast_name : "Tariful",
//     phone : 1750,
//     isMarried : true
// }
// console.log(user);
// Function in typescript ---------------------------------------------------------------------
// function addNumber(num1:number, num2 : number):void{
//     const sum = num1 + num2;
//     console.log(sum);
// }
// addNumber(55, 22)
// function addNumber(num1:number, num2 : number):number{
//     const sum = num1 + num2;
//    return sum
// }
// console.log(addNumber(55, 22));
// function addNumber(num:number=1, str : string):string{
//    return str.repeat(num)
// }
// console.log(addNumber(12, "Function call-----\n  "));
// const addNumber = (num1:number, num2 : number):number => num1 + num2;
// console.log(addNumber(55, 22));
// Array map ---------------------------------------------------------------------------------
// const arr : number[] = [2,3,4,5,6,8,9];
// const squireArr = arr.map((elem : number): number => elem * elem)
// console.log(squireArr.join(", "));
// Spread Operator ----------------------------------------------------------------------------
// const friends:(string | string[])[] = ["Aa", "Bb", "Cc"]
// const schoolFriends:string[] = ["Dd", "Ee", "Ff", "Gg"]
// const oldFriends:(string | string[])[] = ["Hh", "Ii", "Jj", ["Kk", "Ll"]]
// friends.push(...schoolFriends)
// console.log(...friends.join(", "));
// friends.push(...oldFriends.flat())
// console.log(friends);
// interface UserInfo_One{
//     name : string;
//     phone : number;
// }
// interface UserInfo_Two{
//     hobby : string;
//     color : string
// }
// const user1:UserInfo_One = {
//     name : "Tariful",
//     phone : 175079,
// }
// const user2:UserInfo_Two = {
//     hobby: "Stay Alone",
//     color : "Red",
// }
// const userInfo = { ...user1, ...user2}
// console.log(userInfo);
// Rest operator -----------------------------------------------------------------------------
// const sendInvite = (...friends:string[])=>{
//    friends.forEach((friend : string)=> {
//     console.log(`My friends are - ${friend}`);
//    })
// }
// sendInvite("Aa", "Bb", "Cc", "Dd")
// Destructuring in typescript ---------------------------------------------------------------
// interface User {
//     id: number,
//     name : {
//         first_name : string;
//         last_name : string;
//     };
//     gender: "male" | "female";
//     fav_Color : string;
//     isMarried : boolean;
// }
// const person : User ={
//     id : 22,
//     name : {
//         first_name : "Tariful",
//         last_name : "Islam"
//     },
//     gender : "male",
//     fav_Color : "Orange",
//     isMarried : true,
// }
// const {id, name:{first_name, last_name}, isMarried, fav_Color} = person;
// console.log(fav_Color);
// const schoolFriend : string[] = ["Aa", "Bb", "Cc", "Dd"]
// const [, b, c] = schoolFriend;
// console.log(b, c);
// Type Alias in typescript : inline type annotation vs Type Alias -------------------------
// const user : { 
//     id : number;
//     name : {
//         first_name : string;
//         last_Name : string;
//     },
//     gender : "male" | "female";
//     contract : string;
//     address : {
//         city : string;
//         divition : string;
//     }; 
// }={
//     id : 22,
//     name :{
//         first_name : "Tariful",
//         last_Name : "Islam"
//     },
//     gender :"male",
//     contract : "0175079",
//     address : {
//         city : "Dhaka",
//         divition : "Rangpur"
//     }
// }
// console.log(user);
//  type User = { 
//     id : number;
//     name : {
//         first_name : string;
//         last_Name : string;
//     },
//     gender : "male" | "female";
//     contract : string;
//     address : {
//         city : string;
//         divition : string;
//     }; 
// }
// const user:User = {
//     id : 22,
//     name :{
//         first_name : "Tariful",
//         last_Name : "Islam"
//     },
//     gender :"male",
//     contract : "0175079",
//     address : {
//         city : "Dhaka",
//         divition : "Rangpur"
//     }
// }
// console.log(user);
// type AddNum = (num1 : number, num2 : number) => number;
// const addNum:AddNum = (num1, num2)=> num1 + num2;
// console.log(addNum(22, 55));
// Union types - or ( | ) ---------------------------------------------------------------------
// type UserRole = "admin" | "user" | "guest";
// const getAccess = (role: UserRole) =>{
//     if(role === "admin"){
//         return 'Welcome to Admin Dashboard'
//     }
//     if(role === "user"){
//         return 'Welcome to Guest Dashboard'
//     }
//     if(role === "guest"){
//         return 'Welcome to User Dashboard'
//     }else{
//         return 'Sorry Access Nai'
//     }
// }
// console.log(getAccess("admin"));
// intersection ( & ) -------------------------------------------------------------------------
// type Employee ={
//     id: number;
//     name : string;
//     isMarried : boolean
// }
// type EmployeeInfo = {
//     designation : string;
//     teamSize : number;
// }
// type EmployeeDetails = Employee & EmployeeInfo
// const memberOne : EmployeeDetails = {
//     id : 2222,
//     name : "Tariful",
//     isMarried : true,
//     designation : "CEO",
//     teamSize : 10
// }
// console.log(memberOne);
// Ternary ----------------------------------------------------------------------------------------
// const getJob = (age:number)=> {
//     const result = age >= 22 ? "Yes" : "Sorry"
//     console.log(result);
// }
// getJob(20)
// getJob(32)
// Nullish coalescing ( ?? ) ----------------------------------------------------------------------
// It work conditionally based on nullish and undifined value. and it only set defult value whwn it 
// found null or undifined value.. only null and undifined can set default value...
// const userTheme1 = "without null or undifined value";
// const selectTheme1 = userTheme1 ?? "Light Theme";
// console.log(selectTheme1);
// const userTheme2 = null;
// const selectTheme2 = userTheme2 ?? "Light Theme";
// console.log(selectTheme2);
// const userTheme3 = undefined
// const selectTheme3 = userTheme3 ?? "Light Theme";
// console.log(selectTheme3);
// Difference between ternary ( ? ) and nullish ( ?? ) -------------------------------------------
// const isAuthenticated1 = null; // ternary does not work on falsey value..
// const resultWithTernary1 = isAuthenticated1 ? isAuthenticated1 : "Guest";
// const resultWithNullish1 = isAuthenticated1 ?? "Guest";
// console.log(`Ternary Result : ${resultWithTernary1}, Nulish Result : ${resultWithNullish1}`);
// const isAuthenticated2 ="" // empty string return false value
// const resultWithTernary2 = isAuthenticated2 ? isAuthenticated2 : "Guest";
// const resultWithNullish2 = isAuthenticated2 ?? "Guest";
// console.log(`Ternary Result : ${resultWithNullish2}, Nulish Result : ${resultWithTernary2}`);
// Optional chaining -----------------------------------------------------------------------------
// const user :{
//     address : {
//         city : string;
//         village : string;
//     };
//     phone ?: number; // optional
// }={
//    address : {
//     city : "Dhaka",
//     village : "Andharijhar"
//    },
//    phone : 147
// }
// const villageName = user?.address?.village;
// console.log(villageName);
// Nullable : when we use null as a parameter it's called nullable --------------------------------
// const getUser = (input: string | null) => {
//     if(input){
//         console.log(`Wellcome - ${input}`);
//     }else{
//         console.log('Wellcome - All user');
//     }
// }
// getUser("Tariful")
// getUser(null)
// Unknown : when we not sure about user input. and must use type of operator -------------------
// const discoundPrice = (input:unknown)=>{
//     if(typeof input === 'number'){
//         console.log(input * 0.1);
//     }else if(typeof input === "string"){
//         const [offerPrice] = input.split(' ')
//         console.log(Number(offerPrice)*0.1);
//     }else{
//         console.log("Wrong Input");
//     }
// }
// discoundPrice(100)
// discoundPrice('100 Tk')
// discoundPrice(null)
// Void type : we use it when we return nothing ----------------------------------------------------
// const addNumber = (num1:number, num2:number):void => {
//     console.log(num1 + num2);
// }
// addNumber(22, 55)
// Never type : we use it when function never return anything ---------------------------------------
// const throwError = (msg:string):never => {
//     throw new Error(msg)
// }
// throwError("Error ------- ")
// Type Assertion : ( as ) when we know data types better then typescript ---------------------------
// let anything : any;
// anything = 222;
// (anything as number);  // (anything as number).toFixed() // now we can get type suggestion.
// if(typeof anything == "number"){
//     console.log('It is number --- ', anything);
// }
// let anything : any;
// anything = "222";
// (anything as string);  // (anything as string).charAt() // now we can get type suggestion.
// if(typeof anything == "number"){
//     console.log('It is number --- ', anything);
// }
// const kgToMgConverter = (input:string | number):number | string | undefined => {
//     if(typeof input === "number"){
//         return input * 1000;
//     }else if(typeof input === "string"){
//         const [value] = input.split(" ")
//         return `Converted output is : ${Number(value) * 1000}`
//     }
// }
// const result1 = kgToMgConverter(10) as number; // it confirmed that the return type will be number.
// const result2 = kgToMgConverter('10 Tk')
// console.log(result1);
// console.log(result2);
// type CustomerError = {
//     message : string;
// }
// try{}catch(error){console.log((error as CustomerError).message)} // for custom error suggest .message -
// Type Interface : mostly it use in none premitive data types -----------------------------------------
// interface User {
//     name : string;
//     age : number;
// }
// interface UserWithRole extends User{ // extends is a alternative of intersection..
//     role: "admin" | "user"
// }
// const user : UserWithRole = {
//     name : "Abcd",
//     age : 123,
//     role : "admin"
// }
// console.log(user);
// interface AddNums{(num1: number, num2:number):number}
// const sum:AddNums=(num1, num2) => num1 + num2;
// console.log(sum(22,33));
// interface Friends{[index : number]:string} // called index signeture.
// const friends:Friends = ["AA","bb", "cc"]
// console.log(friends[1]);
// console.log(friends);
// Generics in typescript : means dynamic -------------------------------------------------------
// const friends:string[] = ["Aa", "Bb", "Cc"] 
// const rollNumbers:number[] = [11,22,33,44];
// const eligable:boolean[] = [true, false, true];
// const friendsGen:Array<string> = ["Aa", "Bb", "Cc"] // Generics -
// const rollNumbersGen:Array<number> = [11,22,33,44]; // Generics -
// const eligableGen:Array<boolean> = [true, false, true]; // Generics -
// type GenericArray<T> = Array<T>  // here we can gives - types
// const friends:GenericArray<string> = ["Aa", "Bb","Cc"]
// const calenders: GenericArray<number> = [11,22,33]
// const aligables: GenericArray<boolean> = [true, false, true]
// type Coordinates<X,Y> = [X, Y] // here we can gives - types and values.
// const cordinates1 : Coordinates<number, number> = [10, 25];
// const cordinates2 : Coordinates<string, string> = ["Tariful", "Tariful"];
// type GenericArrObject<T> = Array<T>
// type User = {name : string; age : number}
// const userList:GenericArrObject<User> = [
//     {name : "Tariful", age : 123},
//     {name : "Islam", age : 222},
// ]
// Generics with interface  ---------------------------------------------------------------------
// interface Developer <T, X=null>{ // we set default value here for one parameter -
//     name : string;
//     salary : number;
//     device :{
//         brand : string;
//         model : string;
//         releaseYear : string;
//     };
//     smartWatch : T;
//     bike ? : X;
// }
// type NonBrandUser = {heartRate : string; stopWatch : boolean} // parameter one -
// const poorDeveloper : Developer<NonBrandUser> ={ // here we send 1 obj as a parameter..
//     name : "Tariful",
//     salary : 250,
//     device : {
//         brand : "Hp",
//         model : "840 G6",
//         releaseYear : "2022"
//     },
//     smartWatch:{
//         heartRate : "200",
//         stopWatch : true
//     }
// }
// type BrandUser = {heartRate:string;  callSupoort: boolean; calculator : boolean; aiFeature :boolean} // parameter two -
// type BrandUserByke = {brand : string; model : string; millage : string} // parameter two -
// const richDeveloper:Developer<BrandUser, BrandUserByke> = { // here we send 2 obj as a parameter..
//     name : "Blue Ocean",
//     salary : 350,
//     device : {
//         brand : "Apple",
//         model : "Mac 4",
//         releaseYear : "2023"
//     },
//     smartWatch:{
//         heartRate : "200",
//         calculator : true,
//         callSupoort : true,
//         aiFeature : true
//     },
//     bike :{
//         brand : "Yahama",
//         model : "Fzx Black",
//         millage : "40L"
//     }
// }
// Generics with function -------------------------------------------------------------------------
// const createArrayWithString = (value : string)=> [value] // it takes value and return array
// const createArrayWithNumber = (value : number)=> [value] // it takes value and return array
// const createArrayWithUserObj = (value : {id: number; name : string})=> [value] // it return array of obj
// const createArrayWithGen = <T>(value : T) => [value]
// const arrString = createArrayWithGen("Apple")
// const arrNumber = createArrayWithGen(253)
// const arrObj = createArrayWithGen({id : 123, name : "Next Level"})
// console.log(arrString);
// console.log(arrNumber);
// console.log(arrObj);
// const createArrayTuple = <X, Y>(param1 : X, param2 : Y) => [param1, param2]
// const res1 = createArrayTuple("Tariful", 222)
// const res2 = createArrayTuple(222, {name : "Tariful"})
// console.log(res1);
// console.log(res2);
// const addStudentToCourse = <T>(userInfo : T)=>{
//     return {
//         course : "Next Level..",
//         ...userInfo
//     }
// }
// const student1 = {
//     id : 123,
//     name : "Mezba",
//     hasPen : true
// }
// const student2 = {
//     id : 223,
//     name : "Jhanker Mahabub",
//     hasCar : true,
//     isMaried :true
// }
// const result1 = addStudentToCourse(student1)
// console.log(result1);
// const result2 = addStudentToCourse(student2)
// console.log(result2);
// Constraint in typescript : set rules  ------------------------------------------------------------
// type StudentInfo = {id: number; name : string; class : string}  // extends StudentInfo set rules -
// const addStudentToCourse = <T extends StudentInfo>(userInfo: T) => { // you have to muse give id, name.
//     return {
//         course : "Next Level",  // it is better way to use Constraint Generics..
//         ...userInfo
//     }
// }
// const student1 = {
//     id : 123,   // you have to must give name and id..
//     name : "Mezba",  // you have to must give name and id..
//     hasPen : true,
//     class : "Five"
// }
// const student2 = {
//     id :111, // you have to must give name and id..
//     name : "Tarif", // you have to must give name and id..
//     isMaried :true,
//     class : "Five"
// }
// const result1 = addStudentToCourse(student1)
// console.log(result1);
// const result2 = addStudentToCourse(student2)
// console.log(result2);
// keyof with generics ---------------------------------------------------------------------------------
// type RichPeoplesVehicle = {  // keyof help use to get obj key...
//     car : string;
//     bike: string;
//     cng : string;
// };
// type MyVichele = keyof RichPeoplesVehicle;
// const myViachele: MyVichele = "car" // same as --   "bike" | "car" | "cng"; 
// console.log(myViachele);
// keyof constraint with generics ----------------------------------------------------------------------
// type User = {
//     id : number;
//     name : string;
//     address : {
//         city : string;
//     },
// }
// const user:User = { 
//     id : 222,
//     name : "Mezba",
//     address : {
//         city : "ctg"
//     },
// }
// const product = {
//     brand : "Hp"
// }
// const student = {
//     id : 123,
//     clsss : "Four"
// }
// const getPropertyFromObj = <T>(obj: T, key : keyof T) => { // 1st parameter is obj & 2nd is obj's key...
//     return obj [key]  // in keyof constraint we can pass obj and obj keys..
// }
// console.log(getPropertyFromObj(user, "name"));
// console.log(getPropertyFromObj(product, "brand"));
// console.log(getPropertyFromObj(student, "clsss"));
// Explore Enum : work for type error - but it is not recomentded to use ------------------------------
// enum UserRoles {
//     Admin = "Admin",
//     Editor = "Editor",
//     Viewer = "Viewer"
// }
// const canEdit = (role : UserRoles)=>{  // it creates code garbes code collections -
//     if(role === UserRoles.Admin || role === UserRoles.Editor){
//         return true;
//     }else {
//         return false;
//     }
// }
// console.log(canEdit(UserRoles.Admin));
// console.log(canEdit(UserRoles.Editor));
// console.log(canEdit(UserRoles.Viewer));
// As const Use - instead of enum : same but better from enum ---------------------------------------
//  const UserRoles = {  // it makes all property readonly --- 
//     Admin : "Admin",
//     Editor : "Editor",
//     Viewer : "Viewer"
// } as const;
// const canEdit = (role : keyof typeof UserRoles)=>{
//     if(role === UserRoles.Admin || role === UserRoles.Editor){
//         return true
//     }else {
//         return false
//     }
// }
// console.log(canEdit(UserRoles.Admin));
// console.log(canEdit(UserRoles.Editor));
// const UserRoles = {  // If Value String are all uparecase use this.
//     Admin : "ADMIN",
//     Editor : "EDITOR",
//     Viewer : "VIEWER"
// } as const;
// const canEdit = (role : typeof UserRoles[keyof typeof UserRoles])=>{ 
//     if(role === UserRoles.Admin || role === UserRoles.Editor){
//         return true
//     }else return false
// }
// console.log(canEdit(UserRoles.Admin));
// console.log(canEdit(UserRoles.Editor));
// Explore conditional type - here one type depend  on anather type -----------------------------------------
// type A = null;
// type B = undefined;
// type C = A extends number ? true : B extends undefined? true : false;
// type RichPeopleVichels = {
//     bike : string;
//     car  : string;
//     ship : string
// };
// type CheckVehicle<T> = T extends  keyof RichPeopleVichels ? true : false // Generic use here - 
// type HasBike = CheckVehicle<"bike"> // hover HasBike for true or false..
// Explore mapped types ---------------------------------------------------------------------------------
// type AreaOfNum = {
//     height : number;
//     weight : number;
// }
// type AreaOfString = {
//     [key in keyof AreaOfNum] : string; // it makes height weight string - 
// }
// type AreaOfBoolean = {
//     [key in keyof AreaOfNum] : boolean; // hover AreaOfBoolean --
// }
// type AreaOfNumber = {
//     [key in keyof AreaOfNum] : number; // it makes height weight number - 
// }
// type Area<T> = {  // Useing dynamic generic -----
//     [key in keyof T] : T[key];
// }
// const arrea1:Area<{height:number; width : number}> = {height : 50 , width : 66 } 
// console.log(arrea1);
// Explore Utility types -------------------------------------------------------------------------
// type Product = {
//     id : number;
//     name : string;
//     price: string;
//     stock : number;
//     color ? : string;
// }
// type PriductSamary = Pick<Product, 'id' | 'name' | 'price'> // it works for choose keys
// type PriductOutStock = Omit<Product, 'stock' | 'color'> // it works for ignore keys
// type PriductOptional = Partial<Product> // all values are optional.
// type PriductReadOnly = Readonly<Product> // all values are readonly
// type PriductRequire = Required<Product> // require all -
// const product : PriductRequire = { // we have must give all keys and propertics.
//     id : 11,
//     name : "abcd",
//     price: "22 tk",
//     stock : 50,
//     color : "res"
// }
// console.log(product);
// const emptyObj : Record<string, unknown> = {} // for declared empty obj and we can make sure keys is string..
// Start OOP : Object Oriented Programming ----------------------------------------------------
// OOP create class with typescript ------------------------------------------------------------
// class Animal {  // blueprint to create object --
//     name : string;
//     species :string;
//     sound : string;
//     constructor(name : string, species :string, sound : string){
//         this.name = name
//         this.species = species
//         this.sound = sound
//     }
//     makeSound(){ // its called method -
//         console.log(`${this.name} The animal is making sound :  ${this.sound}`);
//     }
// }
// const dog = new Animal("Dog", "bangladeshi","Gew Gheu");
// console.log(dog.sound);
// dog.makeSound()
// const cat = new Animal("Cat", "Russian","Meu mew");
// cat.makeSound()
// OOP create class using anather way : Parameter propertics ( public ) - make class simple ----------
// class Animal { // only using public we can ignore xtra code -- 
//     constructor(public name : string, public species :string, public sound : string){}
//     makeSound(){ // its called method -
//         console.log(`${this.name} The animal is making sound :  ${this.sound}`);
//     }
// }
// const dog = new Animal("Dog", "bangladeshi","Gew Gheu");
// console.log(dog.sound);
// dog.makeSound()
// const cat = new Animal("Cat", "Russian","Meu mew");
// cat.makeSound()
// Normal OOP with methods -------------------------------------------------------------
// class Student {
//     name : string;
//     age : number;
//     address : string;
//     designation : string;
//     constructor(name:string, age:number, address:string,  designation : string){
//         this.name = name;
//         this.age = age;
//         this.address = address;
//         this.designation = designation;
//     }
//     getSleep(time : number){ // method one 
//         console.log(`${this.name} -------- ${time}h Sleep`);
//     }
//     takeClass(time : number){ // method two 
//         console.log(`${this.name} Class ney ${time}`);
//     }
// }
// const student1 = new Student("Tariful", 26, "Dhaka" , "student")
// student1.getSleep(10)
// const teacher1 = new Student("Tariful", 26, "Dhaka" , "Lecturar")
// teacher1.takeClass(5)
// Inheritance 2nd pillar of OOP - using (super & extends) in typescript ---------------------
// class Parrent {
//     name : string;
//     age : number;
//     address : string;
//     constructor(name:string, age:number, address:string){
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }
//     getSleep(time : number){
//         console.log(`${this.name} -------- ${time}H. Sleep`);
//     }   
// }
// class Student extends Parrent{} // all Property is common thats why we not call constractor -
// class Teacher extends Parrent{
//     designation : string;
//     constructor(name:string, age:number, address:string, designation : string){
//         super(name, age, address) // we have to give parrent property in super - 
//         this.designation = designation
//     }
//     takeClass(time : number){
//         console.log(`${this.name} -------- ${time}h Sleep`);
//     } 
// }
// const student1 = new Student("Tariful", 26, "Dhaka" )
// student1.getSleep(10)  // for student class -
// const teacher1 = new Teacher("Sir Tariful", 26, "Dhaka" , "Lecturar")
// teacher1.takeClass(5) // for teacher class -
// In guard in typescript : guards try to find key or property in a object -------------------------
// type NormalUser = {
//     name: string;
// }
// type AdminUser = {
//     name : string;
//     role : "Admin";
// }
// const getUserInfo = (user : NormalUser | AdminUser) => {
//     if("role" in user){  // It check does the object have a key named "role"?
//         console.log(`Your name is - ${user.name} and you are : ${user.role}`);
//     }else{
//         console.log(`${user.name}`);
//     }
// }
// getUserInfo({name : "Normal"})
// getUserInfo({name : "Admin"})
// Type guard - instance of : It check Is this object created from this class or instance ------------------
// Easy example of instance : -
// class Person {}; const p = new Person(); console.log(p instanceof Person);  // true
// class Person{
//     name : string;
//     constructor(name : string){
//         this.name = name
//     }
//     getSleep(time : number){
//         console.log(`${this.name} Sleep -------- ${time}Hour`);
//     } 
// }
// class Student extends Person {
//     constructor(name : string){
//         super(name)
//     }
//     doStudy(time : number){
//         console.log(`${this.name} Reading in a day : ${time} Hours`);
//     }
// }
// class Teacher extends Person{
//     constructor(name : string){
//         super(name)
//     }
//     takeClass(time : number){
//         console.log(`${this.name} took class : ${time} Hour Sleep`);
//     } 
// }
// const getUserInfo = (user : Person)=>{
//     if(user instanceof Student){
//         user.doStudy(10)
//     }else if(user instanceof Teacher){
//         user.takeClass(5)
//     }else{
//         user.getSleep(6)
//     }
// }
// const student1 = new Student ("Tariful")
// const teacher1 = new Teacher ("Mr. X")
// const person1 = new Person ("Mr. Person")
// getUserInfo(student1) // object created from this class..
// getUserInfo(teacher1) // object created from this class..
// getUserInfo(person1)  // object created from this class..
// instance of function gurd  ------------------------------------------------------------------
// class Person{ // class one --
//     name : string;
//     constructor(name : string){
//         this.name = name
//     }
//     getSleep(time : number){
//         console.log(`${this.name} Sleep -------- ${time}Hour`);
//     } 
// }
// class Student extends Person {  // class two  --
//     constructor(name : string){
//         super(name)
//     }
//     doStudy(time : number){
//         console.log(`${this.name} Reading in a day : ${time} Hours`);
//     }
// }
// class Teacher extends Person{  // class three --
//     constructor(name : string){
//         super(name)
//     }
//     takeClass(time : number){
//         console.log(`${this.name} took class : ${time} Hour Sleep`);
//     } 
// }
// const isStudent = (user : Person)=>{ // fn guard (student) - check is the parameter instanceof Student.
//     return user instanceof Student;
// }
// const isTeacher = (user : Person)=>{ // fn guard (Teacher) - check is the parameter instanceof Teacher.
//     return user instanceof Teacher;
// }
// const getUserInfo = (user : Person)=>{
//     if(isStudent(user)){  // use of function guard (student) ---
//         user.doStudy(10)
//     }else if(isTeacher(user)){ // use of function guard (teacher) ---
//         user.takeClass(5)
//     }else{
//         user.getSleep(6)
//     }
// }
// const student1 = new Student ("Tariful")
// const teacher1 = new Teacher ("Mr. X")
// const person1 = new Person ("Mr. Person")
// getUserInfo(student1)
// getUserInfo(teacher1)
// getUserInfo(person1)
// Access Modifiers : Private -----------------------------------------------------------------
// class BankAccound {
//     readonly userId : number; // for readonly we can't modify it.
//     userName : string;  // by default all properties are public.
//     private _userBlance : number; // we can't access this from outside of this class..
//     constructor(    userId : number, userName : string, userBlance : number){
//         this.userId = userId;
//         this.userName = userName;
//         this._userBlance = userBlance; // for private property we must use underscore(_)
//     }
//     addBalance(balance : number){  // we can't access private property from outside oof class.
//       return this._userBlance = this._userBlance + balance;
//     }
// }
// const tarifulAccound = new BankAccound(121, "Tariful", 50 );
// tarifulAccound.userId // tarifulAccound.userId = 222 (we can't modify it)
// tarifulAccound.addBalance(100) // add balance using function..
// console.log(tarifulAccound);
// Access Modifiers : protected ---------------------------------------------------------------
// class BankAccound {
//     readonly userId : number;
//     userName : string; 
//     protected _userBlance : number; // we can only access this from it's child class ..
//     constructor(    userId : number, userName : string, userBlance : number){
//         this.userId = userId;
//         this.userName = userName;
//         this._userBlance = userBlance; // for protected property we must use underscore(_)
//     }
//     addBalance(balance : number){ // we also can make method private, protected..
//       return this._userBlance = this._userBlance + balance;
//     }
// }
// class StudentBankAccound extends BankAccound{ // BankAccound class child class
//   test(){ 
//     this.addBalance(55) // only we can access protected property from anather child class.
//     console.log(this._userBlance," : personal student accoound");
//   }
// }
// const tarifulAccound = new BankAccound(121, "Tariful", 50 );
// tarifulAccound.userId // tarifulAccound.userId = 222 (we can't modify it)
// tarifulAccound.addBalance(100)
// console.log(tarifulAccound); 
// const PersonStudentAccound = new StudentBankAccound(121, "Tariful", 50 )
// PersonStudentAccound.test()
// Getter and Setter in OOP --------------------------------------------------------------------
// class BankAccound {
//     readonly userId : number; // for readonly we can't modify it.
//     userName : string;
//     protected _userBlance : number; // we can only access this from it's child class ..
//     constructor(userId : number, userName : string, userBlance : number){
//         this.userId = userId;
//         this.userName = userName;
//         this._userBlance = userBlance;
//     }
//     set addBalance (amount:number){  // set use --
//         this._userBlance = this._userBlance + amount; 
//     }
//     get getBalance(){  // get use --
//       return this._userBlance
//     }
// }
// const tarifulAccound = new BankAccound(121, "Tariful", 50 );
// tarifulAccound.addBalance = 100;
// tarifulAccound.addBalance = 20;
// console.log(tarifulAccound);
// console.log(tarifulAccound.getBalance);
// Static use in typescript --------------------------------------------------------------------
// class Counter { // without use static it create 2 memory locations ---
//   count : number = 0;
//   incremant(){
//     return (this.count = this.count + 1)
//   }
//   decremant(){
//     return (this.count = this.count - 1)
//   }
// }
// const instance1 = new Counter() // instance one 
// console.log(instance1.incremant());
// console.log(instance1.incremant());
// console.log(instance1.incremant());
// const instance2 = new Counter() // instance two 
// console.log(instance2.incremant());
// console.log(instance2.incremant());
// class Counter {  //  use static it create single memory locations ---
//   static count : number = 0;
//   static incremant(){
//     return (Counter.count = Counter.count + 1)
//   }
//   static decremant(){
//     return (Counter.count = Counter.count - 1)
//   }
// }
// console.log(Counter.incremant()); // no instance need --
// console.log(Counter.incremant());
// console.log(Counter.incremant());
// console.log(Counter.decremant());
// console.log(Counter.decremant());
// Polymorphism the 2nd pillar of OOP -----------------------------------------------------
// class Person { // same name but give different output its called Polymorphism.
//   getSleep(){
//     console.log(`Boy sleep 8 hours in a day`);
//   }
// } 
// class Student extends Person{
//     getSleep(){
//     console.log(`Girl sleep 6 hours in a day`);
//   }
// }
// class NextLevelDeveloper extends Person{
//     getSleep(){
//     console.log(`Developer sleep 5 hours in a day`);
//   }
// }
// const getSleepHours = (param : Person)=>{
//   param.getSleep()
// }
// const person1 = new Person()
// const person2 = new Student()
// const person3 = new NextLevelDeveloper()
// getSleepHours(person1)
// getSleepHours(person2)
// getSleepHours(person3)
// class Shape { // anather example of Polymorphism..
//   getArea():number{
//     return 0
//   }
// }
// class Circle extends Shape{
//   radious : number;
//   constructor(radious : number){
//     super()
//     this.radious = radious;
//   }
//   getArea(): number {
//     return Math.PI * this.radious * this.radious
//   }
// }
// class Ractangle extends Shape{
//   height : number;
//   width : number;
//   constructor(height : number,width: number ){
//     super()
//     this.height = height;
//     this.width = width
//   }
//   getArea(): number {
//     return this.height * this.width
//   }
// }
// const getArea = (param : Shape)=>{
//   console.log(param.getArea());
// }
// const shape1 = new Shape()
// const shape2 = new Circle(10)
// const shape3 = new Ractangle(10,20)
// getArea(shape1)
// getArea(shape2)
// getArea(shape3)
// Abstraction 3rd pillar - it Show only what is necessary and hiding the complex details -------------------
// interface MediaPlayer {  // interface Abstraction 
//     play() : void;   
//     pause() : void; // MediaPlayer's all methods are only idea. it not explain details
//     stop() : void;
// }
// class MusicPLayer implements MediaPlayer{ 
//     play() {
//         console.log("Playing music...."); // MusicPLayer's all methods are implementation of MediaPlayer.
//     }
//     pause(){
//          console.log("Pause music....");
//     }
//     stop() {
//          console.log("Stop music....");
//     }
// }
// const MezbaPlayer = new MusicPLayer();
// MezbaPlayer.play()
// abstract class MediaPlayer{   // abstract Abstraction  -  interface alternative-
//     abstract play() : void;
//     abstract pause() : void; // abstract show only necessary infoofmation
//     abstract stop() : void;
// }
// class VlcPlayer extends MediaPlayer{
//     play() {
//         console.log("Playing music....");
//     }
//     pause(){
//          console.log("Pause music....");
//     }
//     stop() {
//          console.log("Stop music....");
//     }
// }
// const vlcPlayer = new VlcPlayer();
// vlcPlayer.play()
// Encapsulation the 4th pillar of OOP - You cannot access it from outside the class --------------------
// class BankAccound {
//     readonly userId : number;
//     userName : string;
//     private _userBlance : number; // we can't access this from outside of this class..
//     constructor(    userId : number, userName : string, userBlance : number){
//         this.userId = userId;
//         this.userName = userName;
//         this._userBlance = userBlance;
//     }
//     private addBalance(balance : number){
//       return this._userBlance = this._userBlance + balance;
//     }
//     callHideMethod(balance:number){
//         console.log(this.addBalance(balance));
//     }
// }
// const tarifulAccound = new BankAccound(121, "Tariful", 50 );
// tarifulAccound.callHideMethod(55) // we cant't direct access addBalance..
//# sourceMappingURL=index.js.map