
const Book = require('./model/Book')
const express = require('express');
const app = express();
const cors = require('cors')
const request = require('request');
const mongoose = require('mongoose');
const Razorpay = require('razorpay')
const dotenv = require('dotenv')
dotenv.config()

const signUp = require('./userApi/signup.js')
const port  =process.env.PORT ||  5000;
app.use(cors())
try {

mongoose.connect('mongodb://localhost:27017/bookabook');
console.log('connected mongo')
    
} catch (error) {
    console.log(error)
}



// var instance = new Razorpay({
//     key_id: 'rzp_test_BmcgFDWOCNN52j',
//     key_secret: 'iB1j9c4r319tJFJ2yldC0LU0',
//   });

app.get('/', (req, res)=>{
res.json({success: true})
})
app.post("/addbook", express.json(), async(req, res)=>{
// name, writer, image, rating, pages, 

try {
    const {bookName, writer, image, rating, pages, price} = req.body;

const data =  new Book({bookName, writer, image, rating, pages, price});

await data.save();

res.status(200).json({success: true, message: "Product added successfully"})
    
} catch (error) {
    res.status(400).json({success: false, message: "Something went wrong"})
}

})



app.get('/getbooks',async (req, res)=>{

    try {

        const data  = await Book.find({});
        res.status(200).json({success: true, message: "got the data", data})
        
    } catch (error) {
        res.status(500).json({success: false, message: "something went wrong"})
    }
})


app.post("/getbookdetails",express.json(), async(req, res)=>{


    console.log(req.body)

    try {
        const {bookId} = req.body;
    const book = await Book.findById({_id: bookId});

    res.status(200).json({success: true, message: "book loaded successfully", book})
    } catch (error) {
        res.status(500).json({success: false, message: "something went wrong", error})
    }
    

})

app.use('/api', require('./userApi/signup'))
app.use('/api', require('./userApi/signin'))



app.listen(port, ()=>{
    console.log("server started successfully on ", port)
})