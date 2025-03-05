const mongoose = require('mongoose');
require('dotnet').config();
mongoose.connect(process.env.MONGO_URI).then(
    ()=>{
        console.log('Connected to MongoDB Atlas');
    }
).catch((error)=>{
    console.error('Error connecting to MongoDB:', error);
})