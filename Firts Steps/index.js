const express = require('express')
const adminRoutes = require('./routes/admin.js')
const shopRoutes = require('./routes/shop.js')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended:false }))

app.get("/",(req,res,next) =>{
    res.send("root responses")
})

app.use('/admin',adminRoutes)

app.use('/shop',shopRoutes)


app.listen(3000,()=>{console.log("Up and running")})





