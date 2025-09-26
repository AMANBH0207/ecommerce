const mongoose = require('mongoose');

const CategoriesSchema = mongoose.Schema({
    name:String,
    slug:String
})

module.exports = mongoose.model("categories",CategoriesSchema)