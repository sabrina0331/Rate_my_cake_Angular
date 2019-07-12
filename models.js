const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rate_my_cakes',{ useNewUrlParser: true });

const RateSchema = new mongoose.Schema({
    rating: {type: Number, required: true},
    comment: {type: String, required: true}},
    {timestamps: true});

const CakeSchema = new mongoose.Schema({
    baker: {type: String, minlength:[2, "baker name should have at least 2 chars"]},
    imageUrl: {type: String},
    rating: [RateSchema],
},
    {timestamps: true});

module.exports = mongoose.model('Cakes',CakeSchema);

const Cake = mongoose.model('Cakes')