const fs = require("fs");

// // Sync file writer ...
// fs.writeFileSync("./text_file.txtt" , "hello world!")

// // Async file writer ...
// fs.writeFile("./text_file1.txtt" , "madara uchiha" , (err)=>{})


// const result = fs.readFileSync("./contact.txt" , 'utf-8')
// console.log(result)


// fs.readFile("./contact.txt" , 'utf-8', (err , result)=>{
//     if(err){
//         console.log("Error :", err);
//     }
//     else{
//         console.log("Result : " , result)
//     }
// })

const date = new Date();
const formatted = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} ` + `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`;
fs.appendFileSync("./test.log", formatted + "\n");