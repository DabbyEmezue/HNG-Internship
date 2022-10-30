const express = require('express')
const app = express()
const port = process.env.PORT || 9000


app.get('/', (req,res)=> {
    res.send('Hello Worlld')
})

app.listen(port, ()=>{console.log(`App listening at http://localhost:${port}`)})

