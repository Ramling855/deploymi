const express = require('express');
const app = express()
const path = require('path');
const host = '0.0.0.0'
const port =process.env.PORT || 8081;


app.use(express.static('build'))



app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'build','index.html'))
})

app.listen(port,host,()=>{
    console.log("listening from server...");
})