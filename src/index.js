const express = require("express")
const app = express()

app.use(express.json())

app.get("/usuario/:nome", (req,res)=>{
    
    res.send(req.params)
})


app.post("/usuario", (req,res)=>{
    if(req.body.age >=18){
        
        res.status(201).send("Maior de idade")
    }else{
        res.status(201).send("Menor de idade")
    }
})

app.put("/usuario/:id",(req,res)=>{
    if(req.params.id == 325){
        res.send(req.body.nome)
    }else{
        res.send("not found")
    }
    
})

app.delete("/usuario/:id",(req,res)=>{
    if(req.params.id == 325){
        res.send("User deleted")
    }else{
        res.send("not found")
    }
})


app.listen(8000,()=>{console.log("server listen 8000")})