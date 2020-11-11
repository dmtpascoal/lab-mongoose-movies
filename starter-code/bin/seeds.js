const mongoose = require('mongoose');
const app = require('../app');

const Celebrity = require("../models/Celebrity.model")

const Movie = require("../models/Movies.model")

const DB_NAME = "starter-code";

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const celebrities = [{
    name: "Sr. Jacinto",
    occupation: 'Vendedor de Castanhas',
    catchPhrase: 'É três euros a dúzia, meninas'
}, {
    name: "Natalina de Jesus",
    occupation: 'Doméstica',
    catchPhrase: 'Valha-me Nossa Senhora'
}, {
    name: "Dona Custódia",
    occupation: 'Vizinha Vigilante',
    catchPhrase: 'A culpa é dos drogados'
}];

Celebrity.create(celebrities)
    .then((celebritiesDB) => {
        console.log(`${celebritiesDB.length} have been created`);
        mongoose.connection.close()
    })
    .catch((err) =>
        console.log(`Something went wrong with the celeb-creation ${err}`)
    );

const movies = [{
        title: "Lord of the Rings",
        genre: 'Fantasy',
        plot: 'Frodo has to destroy the ring'
    }, {
        title: "Harry Potter",
        genre: 'Fantasy',
        plot: 'A young wizard'
    }, {
        title: "Gladiator",
        genre: 'Epic',
        plot: 'A former roman general ends up fighting in the coloseum'
    }];
    
Movie.create(movies)
        .then((moviesDB) => {
            console.log(`${moviesDB.length} have been created`);
            mongoose.connection.close()
        })
        .catch((err) =>
            console.log(`Something went wrong with the celeb-creation ${err}`)
        );