const connectToMongo=require('./db');
const express=require('express');
//var cors =require('cors')

connectToMongo();

const app=express()
const port=5000

//app.use(cors())

// CORS
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "OPTIONS, GET, POST, PUT, PATCH, DELETE",
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization",
    );
    next();
});

app.use(express.json())

// Available Routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.get('/',(req,res)=>{
    res.send('Hello Lalit!');
}),


app.listen(port,()=>{

    console.log(`iNotebook app listening at http://localhost:${port}`);
})
