//FILE MANAGEMENT OR fs


const fs = require('fs');

//CREATE A FILE
fs.writeFile('example.txt', 'some text', (err) =>{
         if(err){
             console.log(err);
         }
     }
);

//READ A FILE
fs.readFile('example.txt', 'utf-8',(err, data) =>{
    if(err){
        console.log(err);
        return;
    }
    console.log("File Data: \n " + data)
});
//DELETE A FILE
fs.unlink('example.txt', (err) =>{
    if(err){
        console.log(err);
    }
});


//CONSOLE LOG PERO DIFERENTE
process.stdout.write('sometext \n')

//INGRESAR TEXTO POR CONSOLA
process.stdin.on('data', (data) => {
    console.log(data.toString().trim())
    process.exit()
})

//Escribir y mostrar
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question('op \n', (data) =>{
    console.log(data);
    process.exit();
})


//LOG IN SOME WAY
const path = require('path')
const util = require('util')
console.log(path.join(__dirname, './path/file'))
console.log(util.log(path.basename(__filename)))

//Exports - Imports
module.exports = logMessage;
module.exports.test = {
    logFileName: "app.log",
    logDirectory: "./"
}

const logger = require('./app.js')
const {test} = require('./app.js')

//PROMISES

function fetchdata(url){
    return new Promise((resolve,reject) =>{
        console.log("Espera 2 segundos..")
     setTimeout(() => {
         const data = {
             id: 1,
             name: 'MIKE'
         }
         if(true)reject('Error');
         resolve(data);
     }, 2000);
    })
}

// fetchdata('a').then((data)=>{
//     console.log(data)
// }).catch((err) =>{
//     console.log(err)
// })


async function getdata(){
    try{
        const data = await fetchdata('a')
        console.log(data)
    }catch(err){
        console.log(err)
    }
}

getdata()