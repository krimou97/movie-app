const Movie = require('../shemas/movie')

module.exports.HELLO = (req, res) => {
    res.send('Hello word !')
}

module.exports.SEND_DATA = (req, res) => {
    console.log(req.body)
    res.send('OK!')
}

module.exports.ADD_MOVIE = (req, res) => {
    console.log(req.body)
    if (!req.body.title) {
        return res.send({error: true, msg: 'title required'})
    }
    if (!req.body.description) {
        return res.send({error: true, msg: 'description required'})
    }
    if (!req.body.rating) {
        return res.send({error: true, msg: 'rating required'})
    }
    if (req.body.rating > 5 || req.body.rating < 0 || !Number(req.body.rating)) {
        return res.send({error: true, msg: 'rating invalid'})
    }
    if (!req.body.poster) {
        return res.send({error: true, msg: 'poster required'})
    }
    const movie = new Movie(req.body)
    movie.save()
        .then(ok => {
            res.send({error: false, msg: 'Movie Added'})
        })
        .catch(err => {
            console.log(err)
            res.send({error: true, msg: 'Movie not added !'})
        })
}
module.exports.ALL_MOVIES = (req, res) => {
    Movie.find()
        .then(movies => {
            res.send(movies)
        })
        .catch(err => {
            res.send('NOT OK')
        })
}
module.exports.EDIT_MOVIE = (req, res) => {
    const id = req.body._id
    if (!id) return res.send('NO ID')
    Movie.findByIdAndUpdate(id, {
        title: req.body.title,
        description: req.body.description,
        rating: req.body.rating,
        poster: req.body.poster
    })
        .then(ok => {
            res.send('OK')
        })
        .catch(err => {
            res.send('NOt OK')
        })
}
module.exports.DELETE_MOVIE = (req, res) => {
    const id = req.body._id
    if (!id) return res.send('NO ID')
    Movie.findByIdAndDelete(id)
        .then(ok => {
            res.send('OK')
        })
        .catch(err => {
            res.send('NOt OK')
        })
}
