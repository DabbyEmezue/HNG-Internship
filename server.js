// const express = require('express')
// const app = express()
// const port = process.env.PORT || 9000


// app.get('/', (req,res)=> {
//     res.send('My name is Dabby')
// })




// console.log('hello')
// app.listen(port, ()=>{console.log(`App listening at http://localhost:${port}`)})



// import http from 'http';
const http = require('http')
const {app} = require('./app')
const {connectToMongo}  = require('./db/conn')




const server = http.createServer(app);

//function to ensure database connects before server starts.
const startServer = async () => {
  console.log('connecting to the databse');
  await connectToMongo();
  server.listen(3000, () => {
    if (process.env.NODE_ENV !== 'test') {
      console.log(`
        ################################################
        🛡️  Server listening on port: 3000 🛡️
        ################################################
        SERVER IN ${process.env.NODE_ENV} MODE
      `);
    }
  });
};

startServer();

module.exports = { app }
