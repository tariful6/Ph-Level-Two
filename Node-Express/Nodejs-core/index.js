// console.log("node version", process.version);
// console.log("Platform", process.platform);


// const args = process.argv;
// const name = args[2] || "Guest";
// const time = new Date().getHours();
// let greeting;
// if(time < 12){
//     greeting = "Good Morning"
// }else if(time < 18){
//     greeting = "Goood Afternoon"
// }else{
//     greeting = "Goood Evining"
// }
// console.log(`${greeting} ${name}`);


// Read file with syncronous way -----------------------------------
// const fs = require("fs")
// try {
//     const data = fs.readFileSync("./data/note.text", "utf-8")
//     console.log("file coontent ---");
//     console.log(data);
// } catch (error) {
//     console.error(error.message)
// }
// console.log("finished --");


// Read file with asyncronous way -----------------------------------
// const fs = require("fs")
//   console.log("start reading  ---");
//  fs.readFile("./data/note.text", "utf-8",(error, data)=>{
//     if(error){
//         console.error("Error happen", error.message)
//     }
//     console.log("file content ---");
//     console.log(data);
//  })
//  console.log("this run immidetly no blocking --");



// write file syncronuslly ------------------------------------------
// const fs = require("fs")
// const content1 = "This is content \nNode is awesome";
// try {
//     fs.writeFileSync("./output/test-sync.txt", content1)
//     console.log("File written sync");
// } catch (error) {
//     console.error(error.message);
// }


// write file asyncronuslly ------------------------------------------
// const fs = require("fs")
// const content2 = "This is content two\nasyncronus";
// fs.writeFile("./output/test-async.txt", content2, (error)=>{
//     if(error){
//         console.error(error.message);
//     }else{
//         console.log("File written asyncronuslly ----");
//     }
// } )


// Append file syncronuslly ------------------------------------------
// const fs = require("fs")
// fs.writeFileSync("./output/app.log", "Application Started\n")
// console.log("file created"); // it work for create file --- 

// const logEntry1 = `${new Date().toISOString()} user logged in\n`
// fs.appendFileSync("./output/app.log", logEntry1)  // it work for append file --- 

// const logEntry2 = `${new Date().toISOString()} data fetch\n`
// fs.appendFileSync("./output/app.log", logEntry2)  // it work for append file --- 
// console.log("task completed");

// delete file  syncronuslly ----------------------------------------------------
// const fs = require("fs")
// fs.writeFileSync("./output/temp.txt", "This is a temp file")
// console.log("temp file created");
// if(fs.existsSync("./output/temp.txt")){
//     console.log("file exist !!!");
//     fs.unlinkSync("./output/temp.txt")
//     console.log("File deleted");
// }
// try {
//     fs.unlinkSync("./output/temp.txt") 
// } catch (error) {
//     console.log("Error : ", error.message);
// }

// delete file  asyncronuslly ----------------------------------------------------
// const fs = require("fs")
// fs.writeFile('./output/temp2.txt', "Anather temp file",(err)=>{
//     if(err) return console.error(err.message);
//     console.log("Anather file created");
//     fs.unlink("./output/temp2.txt", (err)=>{
//          if(err){
//             console.error("Error", err.message);
//          }else{
//             console.log("temp2 deleted");
//          }
//     })
// } )


// path Module -------------------------------------------------------------------
// const path = require("path");
// console.log("Current file info : \n" );
// console.log("filename: ", __filename);
// console.log("directory: ", __dirname);

// console.log("\n" + "-".repeat(50)+ "\n");

// const filePath = "/shafayat/documents/nextLevel.pdf";
// console.log("analyzing Path : ", filePath, "\n");
// console.log("Drictory: ", path.dirname(filePath)); // folder
// console.log("Base name : ", path.dirname(filePath)); // folder
// console.log("Base name : ", path.basename(__filename)); // file
// console.log("File Extention : ", path.extname(filePath)); // extentioon
// console.log("File Name : ", path.basename(filePath, path.extname(filePath))); // file name.

// console.log("\n" + "-".repeat(50)+ "\n");

// const parsed = path.parse(filePath)
// console.log("Parsed path object", parsed);
// console.log("Formeted path: ", path.format(parsed));

// console.log("\n" + "-".repeat(50)+ "\n");


// Building a Simple File Organizer CLI  --------------------------------------------
// const fs = require("fs");
// const path = require("path");

// const sourceDir = path.join(__dirname, "output", "messy-files");
// const organizedDir = path.join(__dirname, "output", "organized");
// const categories = {
//   images: [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".svg"],
//   documents: [".pdf", ".doc", ".docx", ".txt", ".rtf"],
//   videos: [".mp4", ".avi", ".mkv", ".mov", ".wmv"],
//   audio: [".mp3", ".wav", ".flac", ".aac", ".ogg"],
//   code: [".js", ".py", ".java", ".cpp", ".html", ".css"],
//   archives: [".zip", ".rar", ".tar", ".gz", ".7z"],
//   spreadsheets: [".xls", ".xlsx", ".csv"],
//   others: [],
// };
// const testFiles = [
//   "vacation.jpg",
//   "report.pdf",
//   "presentation.pptx",
//   "music.mp3",
//   "video.mp4",
//   "script.js",
//   "data.csv",
//   "archive.zip",
//   "photo.png",
//   "notes.txt",
//   "app.py",
//   "movie.avi",
//   "song.wav",
//   "backup.tar.gz",
//   "random.xyz",
//   "nodejs.zip"
// ];
// function initializeDirectories(){ // function one ---
//     if(!fs.existsSync(sourceDir)){
//         fs.mkdirSync(sourceDir, {recursive : true})

//         testFiles.forEach(file => {
//             fs.writeFileSync(path.join(sourceDir, file), `Content of ${file}`)
//         })
//     }
//     console.log("Messy directories file created");
    
//     if(!fs.existsSync(organizedDir)){
//         fs.mkdirSync(organizedDir, {recursive : true})
//     }
//     Object.keys(categories).forEach(category =>{
//         const categotyPath = path.join(organizedDir, category)
//         if(!fs.existsSync(categotyPath)){
//             fs.mkdirSync(categotyPath);
//         } 
//     })

// }

// function getCategory(filename){  // function two ---
//     const ext = path.extname(filename).toLowerCase(); // extensions..
//     for(const [category, extentions] of Object.entries(categories)){
//         if(extentions.includes(ext)){
//             return category;
//         }
//     }
//     return others
// }
// function organizedFiles(){ // function three ---
//     console.log("file organizer \n");
//     console.log("source", sourceDir);
//     console.log("destination", organizedDir);
//     console.log("\n"+"-".repeat(50)+"\n");

//     const files = fs.readdirSync(sourceDir)
//     if(files.length === 0){
//         console.log("No files to work on !!");
//         return
//     }
//     console.log(`Found ${files.length} files ro organized`);

//     const stats = {
//         total : 0,
//         byCategory:{}
//     }
//     files.forEach(file=>{
//         const sourcePath = path.join(sourceDir, file)
//         const stat = fs.statSync(sourcePath)
//         if(stat.isDirectory()){
//             return
//         }
//         const category = getCategory(file)
//         const destDir = path.join(organizedDir, category)
//         const destPath = path.join(destDir, file)

//         fs.copyFileSync(sourcePath, destPath)
//         stats.total++;
//         stats.byCategory[category] = (stats.byCategory[category]) + 1;

//         console.log(`${file}`);
//         console.log(`${category}`);
//         console.log(`${stat.size}`);
//     });
// }

// function showHelp(){ // function four ---
//     console.log(`
//         file organizer - usage : 

//         commands : 
//         int - create files
//         organize - organize files into categories

//         example :
//         node file organizer init : node index.js init
//         node file organizer organized : node index.js organized
//         `);
// }
// const command = process.argv[2];
// switch (command) {
//     case "init":
//         initializeDirectories();
//         break;
//     case "organized":
//         organizedFiles()
//         break;

//     default:
//         showHelp();
//         break;
// }


// OS Module -----------------------------------------------------------
// const os = require("os")
// console.log("System info \n");
// console.log("-".repeat(50));

// console.log("\nPlatform Details");
// console.log("Platform : ", os.platform());
// console.log("Architecture : ", os.arch());
// console.log("OS type : ", os.type());
// console.log("OS Release : ", os.release());
// console.log("Hostname : ", os.hostname());

// console.log("Cpu info \n");
// console.log("-".repeat(50));
// const cpus = os.cpus();
// console.log("Cpu Moodel : ", cpus[0].model);
// console.log("Cpu Cores : ", cpus.length);
// console.log("Cpu Speed : ", cpus[0].speed);


// console.log("Memory info\n");
// console.log("-".repeat(50));
// const totalMem = os.totalmem();
// console.log("Total Memory : ", (totalMem/1024/1024/1024).toFixed(2),"GB");
// const freeMem = os.freemem();
// console.log("Free Memory : ", (freeMem/1024/1024/1024).toFixed(2),"GB");


// console.log("cpu stand time\n");
// console.log("-".repeat(50));
// const uptime = os.uptime()
// const days = Math.floor(uptime/86400);
// const hours = Math.floor((uptime/86400)/3600)
// const minutes = Math.floor((uptime/3600)/60)
// console.log(`${days} days ${hours} hours ${minutes} minutes`);


//  crypto Module  Hashing Data ---------------------------------------------------
// const crypto = require("crypto") // password incription one ---
// console.log("\nMD5 Hash : ");
// const md5Hash = crypto.createHash("md5").update("password123").digest("hex") // not requirement...
// console.log("input : password123");
// console.log("MD5 HasedPassword : ", md5Hash);



// const crypto = require("crypto") // password incription two ---
// const shash256Hash = crypto.createHash('sha256').update("password123").digest("hex");
// console.log("input : password123");
// console.log("SHA256 HasedPassword : ", shash256Hash);


// const crypto = require("crypto")  // password incription three ---
// const shash512Hash = crypto.createHash('sha512').update("password123").digest("hex");
// console.log("input : password123");
// console.log("SHA512 HasedPassword : ", shash512Hash);



// crypto Module Encrypting and Decrypting Dat -----------------------------------------------
// const crypto = require("crypto")
// const algorithm = 'aes-256-cbc'
// const key = crypto.randomBytes(32)
// const iv = crypto.randomBytes(16)

// function encrypt(text){
//     const cipher = crypto.createCipheriv(algorithm, key, iv)
//     let encrypted = cipher.update(text, "utf-8", 'hex')
//     encrypted += cipher.final("hex")

//     return {
//         iv : iv.toString("hex"),
//         encryptedData : encrypted,
//     }
// }
// function deccrypt(encryptedData, ivHex){
//     const decipher = crypto.createDecipheriv(algorithm, key, Buffer.from(ivHex , "hex"))
//     let decrypted = decipher.update(encryptedData, "hex", "utf-8")
//     decrypted += decipher.final('utf-8');
//     return decrypted
// }

// console.log("Encryptioon data : ");
// const sensetiveData = "Cradit card : 4242 4242 4242 4242"
// console.log("Original Deta : ", sensetiveData);

// const encrypted = encrypt(sensetiveData)
// console.log("Encryptioon data : ", encrypted);

// console.log("decryped data ---");
// const decrypted = deccrypt(encrypted.encryptedData, encrypted.iv);
// console.log("decryped data : ", decrypted);
// console.log("Check match : ", sensetiveData === decrypted);


// -------------------------------------------------------------------------
// Last video was about dotenv. check dootenv and config.js file -----------

