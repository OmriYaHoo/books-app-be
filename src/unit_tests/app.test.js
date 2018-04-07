let expect = require('expect.js');
const request = require('supertest');
const app = require("../../app");

const firstBook = {
    "_id": "5ac919be611d8705b8655185",
    "book_number": 1,
    "title": "Replacements, The",
    "description": "Couldn't find a way to implement \"Lorem Ipsum\" generator for the description of the book \"Replacements, The\"",
    "isbn": "375113466-2",
    "author": "Fanechka Stainton",
    "publication_date": "28/05/1985",
    "genre": "Mystery",
    "price": 32
};

describe('Users', () => {

    describe('GET /user', () => {
        it('Checking no end-point', (done) => {
            request(app)
                .get('/users')
                .expect(404)
                .end(done);
        });
    });

    describe('GET /user', () => {
        it('Checking no inputs', (done) => {
            request(app)
                .get('/users')
                .expect(404)
                .end(done);
        });
    });

    describe('GET /user omriyahoo', () => {
        it('Verifying user is valid', (done) => {
            request(app)
                .get('/?userName=omriyahoo&pwd=1234')
                .expect(200)
                .end(done);
        });
    });

});
describe('Books', () => {

    describe('GET /books/1', () => {
        it('should return my first book object', (done) => {
            request(app)
                .get('/books/1')
                .expect(200)
                .expect((res) => {
                    expect(res.body).to.eql(firstBook);
                })
                .end(done);
        });
    });
});
