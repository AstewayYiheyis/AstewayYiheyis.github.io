const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }));

app.use(express.static('./'));

app.get('/', function(req, res){
    res.sendFile(__dirname + "\\dict.html");
});

app.post('/search', function(req, res){
    let wordSearch = require('./word');
    let definition = wordSearch(req.body.term,res);

});

const listen = app.listen(3000, () => {
    console.log("Server runnning on port: 3000");
});

