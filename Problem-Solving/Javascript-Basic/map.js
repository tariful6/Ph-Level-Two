class BluePrint {
    constructor(name, age, adress){
        this.name = name
        this.age = age
        this.adress = adress
    }
}

const building1 = new BluePrint("Tariful Islam", 22, "Dhaka")
console.log(building1);

// map only give unique value ----------------------
const mp = new Map();
mp.set("Tariful Islam", 22)
mp.set("Islam", 22)
mp.set("Tanjid", 22)
mp.set("Tanjid", 22) // it never show...
console.log(mp);