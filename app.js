const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./src/routes/routes.js");
const port = process.env.PORT || 3005;
const app = express();
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

routes(app);

app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});

module.exports = app;