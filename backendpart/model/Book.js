
const mongoose  = require("mongoose")


const BookSchema  =new  mongoose.Schema({
    bookName: {type: String, required:true},
    writer: {type: String},
    image: {type: String},
    rating: {type:String},
    pages: {type:String}, 
    price: {type: Number}
})


module.exports = mongoose.model("Book", BookSchema)
// export default mongoose.model('Book', BookSchema);