const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://<username>:<password>@cluster0.hiv6e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true},
    (err) => {
        if (!err) {
            console.log('Successfully Established Connection with MongoDB')
        } else {
            console.log('Failed to Establish Connection with MongoDB with Error: ' + err)
        }
    });
module.exports = mongoose