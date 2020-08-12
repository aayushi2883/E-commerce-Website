const mongoose =  require("mongoose")

const {ObjectId} = mongoose.mongo.Schema;

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
       maxlength: 32

    },
    description : {
         type: String,
         required: true,
         trim: true,
         maxlength: 2000
    }, price: {
        required: true,
        maxlength: 32,
        trim : true,
        type: Number
    },
    category:{
        type: ObjectId,
        ref: "Category",
        required: true
    },
    stock: {
        type: Number
    },
    sold:{
        type: Number,
        default: 0

    },
    photo:{
        data: Buffer,
        contentType: String
    }
},
);


module.exports = mongoose.model("Product", productSchema);
