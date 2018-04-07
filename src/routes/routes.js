const faker = require("faker");
const mock = require('../mocks/booksAppMock');
const _ = require('lodash');

const {mongoose} = require('../db/mongoose');
const {User} = require('../models/user');
const {Book} = require('../models/book');
const mongoMorgan = require('mongo-morgan');


const appRouter = (app) => {

    app.use(mongoMorgan(process.env.MONGODB_URI || 'mongodb://localhost:27017/Desktop', 'combined', {
        collection: 'logsRequests'
    }));

    let handleError = (res, err) => {
        res.status(400).send(err);
    };

    let userCatalog = [];

    // User API
    app.get("/user", (req, res) => {
        User.find({
            "userName": req.query.userName,
        }).then(userData => {
            if (req.query.pwd === userData[0].pwd) {
                res.status(200).send(userData[0].catalog);
            } else {
                res.status(401).send("Wrong Password, Please Try Again...");
            }
        }, e => {
            res.status(400).send(e);
        }).catch(e => {
            res.status(400).send("No Such User! Please Try Again...");
        });
    });

    app.post("/user", (req, res) => {
        let user = new User(req.body);
        user.save().then(doc => {
            return res.status(200).send(doc);
        }, e => {
            return res.status(400).send("User Name Is Taken. Please Try Another!");
        }).catch(e => {
            return res.status(500).send(e);
        });
    });

    // User Catalog API
    app.post("/user/:userName/catalog", (req, res) => {
        let book = new Book(req.body);
        User.find({"userName": req.params.userName}).then(userData => {
            if (userData[0].catalog.length !== 0) {
                const tmpBook = _.find(userData[0].catalog, (b) => {
                    return b.book_number === book.book_number
                });
                if (tmpBook) {
                    throw "Book Already In Catalog!";
                }
            }
        }).then(() => {
                User.update({"userName": req.params.userName}, {
                    "$push": {
                        "catalog": book
                    }
                }, (err, raw) => {
                    if (err) {
                        return res.status(err.statusCode).send(err.message);
                    }
                    res.status(200).send(`Added Book \"${book.title}\" To Catalog`);
                });
            }
        ).catch(e => {
            return res.status(400).send(e);
        });
    });

    app.delete("/user/:userName/catalog/:book_number", (req, res) => {
        Book.find({
            book_number: req.params.book_number
        }).then(book => {
            User.find({"userName": req.params.userName}).then(user => {
                User.update({"_id": user[0]._id}, {
                    "$pull": {
                        "catalog": {
                            "book_number": book[0].book_number
                        }
                    }
                }, (err, raw) => {
                    if (err) {
                        return res.status(err.statusCode).send("Something went wrong: " + err.message);
                    }
                });
                res.status(200).send(`Removed Book \"${book[0].title}\" From Catalog`);
            })
        }).catch(error => {
            res.status(500).send(error);
        });
    });

    // Books API
    app.get("/books", (req, res) => {
        Book.find().then(books => {
            res.status(200).send(books);
        }, e => {
            res.status(400).send(e);
        });
    });

    app.get("/books/:id", (req, res) => {
        Book.find({'book_number': req.params.id})
            .then(book => {
                res.status(200).send(book[0]);
            })
            .catch(e => {
                res.status(400).send(e);
            });
        //
        // const book = _.find(mock, 'book_number', req.params.id);
        // if (book) {
        // } else {
        //     res.status(400).send({message: 'invalid number supplied'});
        // }
    });
};

module.exports = appRouter;
