const http = require('http');
const fs = require('fs');

const server = http.createServer();

const inicio = fs.readFileSync('index.html');

const productos = [{name:"Banana"},{name:"Frutilla"},{name:"Pepino"}]

server.prependListener('request', (req,res) => {
    console.log(`Incoming ${req.method} request for ${req.url}`)
    req.message = 'Message from Middleware'
    req.error = 'ERROR'
})

server.on("request",(req,res) => {
    console.log(req.message,"\n",req.error)
    if(req.url === '/'){
        res.setHeader("Content-type","text/html")
        res.statusCode = 200
        res.write(inicio)
        res.end()
    }else if(req.url === "/products"){
        if(req.method === "POST"){
            parse(req)
                .then(producto =>{
                    productos.push(producto);
                    
                    res.end(`Product craft \n
                        ${JSON.stringify(productos)}
                    `)
                }).catch(err => {
                    res.statusCode=400;
                    res.end(err )   
                })
        }else if(req.method === "GET"){
            res.setHeader("Content-Type","application/json")
            res.statusCode=200;
            res.end(JSON.stringify(productos))
        }
    }else{
        res.setHeader("Content-Type","text/plain")
        res.statusCode = 404
        res.end("Not Found")
    }
    
});

server.listen(3000,() => {
    console.log('Server up running at port 3000')
})

function parse(req){
    return new Promise((resolve,rejects) => {
        let body = ''
        req.on('data', (chunk) => {
            body += chunk.toString()
        })

        req.on('end', () => {
            if(body.includes("Product+name")){
                console.log(body)
                resolve({name: body.replace("Product+name=","")})
            } else {
                rejects("InvalidData")
            }
        })
    })
}