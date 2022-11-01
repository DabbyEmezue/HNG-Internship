const express = require('express')
const app = express()
const port = process.env.PORT || 9000


app.get('/', (req,res)=> {
    res.status(200).json({status: 'success', data: {"Dabby": String, "backend": True, "age": 22, "bio": "My name is Dabby and I run the Back-End track of HNG Internship. I am really glad to be a part of it and I am looking forward to this potentially life changing opportunity." }})
})
console.log('hello')
app.listen(port, ()=>{console.log(`App listening at http://localhost:${port}`)})
