const mongoose = require('mongoose')

const movieSchema = mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    rating: {
        type: Number
    },
    poster: {
        type: String
    }
})
module.exports = mongoose.model('Movie', movieSchema)
