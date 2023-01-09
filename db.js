const  mongoose=require('mongoose');

const mongoURI="mongodb+srv://lalit:g6FXrgR1QMm4wJyA@cluster0.blglhm9.mongodb.net/?retryWrites=true&w=majority";

const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to Mongoose Successfully");
    })
}

module.exports= connectToMongo;