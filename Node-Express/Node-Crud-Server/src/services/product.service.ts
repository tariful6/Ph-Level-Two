import path from "path";
import fs from "fs"

const filePath = path.join(process.cwd(),'./src/database/database.json');
console.log(filePath);

export function readProduct(){
    const data = fs.readFileSync(filePath, "utf-8")
    return JSON.parse(data);
}

export function writeProduct(product : any){
    fs.writeFileSync(filePath, JSON.stringify(product))
}
