
const Book = require('./model/Book')
const express = require('express');
const app = express();
const cors = require('cors')
const port  = 5000;
const mongoose = require('mongoose');
app.use(cors())
try {

mongoose.connect('mongodb://localhost:27017/bookabook');
console.log('connected mongo')
    
} catch (error) {
    console.log(error)
}

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

app.listen(port, ()=>{
    console.log("server started successfully on ", port)
})