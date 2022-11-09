const mongoose = require('mongoose')


const MONGO_URI = 'mongodb+srv://Dabby:Chiazom.123@book-repository.ph6oikv.mongodb.net/test'

async function connectToMongo () {
  try {
    console.log('ere')
    await mongoose.connect(MONGO_URI , {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } );
    console.log('DB connected successfully');
  } catch (err) {
    console.log(err);
   
  }
};

module.exports = { connectToMongo }
