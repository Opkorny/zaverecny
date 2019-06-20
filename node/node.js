const fs = require('fs');
const Joi = require('joi');
const cors = require('cors');
const express = require('express');
const app = express();
app.use(express.json());
app.use(cors());

const comments = require('./comments.json');

app.get("/", (req, res) => {
    res.send("<h1>KOMENTÁŘE</h1>");
});

app.get('/api/comments', (req, res) => {
    res.send(comments);
});

app.get('/api/comments/:id', (req, res) => {
    const id = Number(req.params.id);
    const comment = comments.find(comment => comment.id === id);
    if (comment) {
        res.send(comment);
    } else {
        res.status(404).send('Komentář nebyl nalezen.');
    }
});

app.post('/api/comments', (req, res) => {
    const { error } = validatecomment(req.body);
    var datum = new Date();
    if (error) {
        res.status(400).send(error.details[0].message);
    } else {
        const comment = {
            id: comments.length !== 0 ? comments[comments.length - 1].id + 1 : 1,
            name: req.body.name,
            text: req.body.text,
            date: req.body.date
        };
        comments.push(comment);
        res.send(comment);
        writeJSON(comments, 'comments.json');
    }
});

app.put('/api/comments/:id', (req, res) => {
    const id = Number(req.params.id);
    const comment = comments.find(comment => comment.id === id);
    var datum = new Date();
    if (!comment) {
        res.status(404).send('Komentář nebyl nalezen.');
        return;
    }
    const { error } = validatecomment(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
    } else {
        comment.name = req.body.name;
        comment.text = req.body.text;
        comment.date = "Upraveno - " + req.body.date;
        res.send(comment);
        writeJSON(comments, 'comments.json');
    }
});

app.delete('/api/comments/:id', (req, res) => {
    const id = Number(req.params.id);
    const comment = comments.find(comment => comment.id === id);
    if (!comment) {
        res.status(404).send('Komentář nebyl nalezen.');
    } else {
        const index = comments.indexOf(comment);
        comments.splice(index, 1);
        res.send(comment);
        writeJSON(comments, 'comments.json');
    }
});

app.listen(3000, () => console.log('Listening on port 3000...'));

function validatecomment(comment) {
    const schema = {
        name: Joi.string().min(2).required(),
        text: Joi.string().required(),
        date: Joi.string()
    };
    return Joi.validate(comment, schema);
}

function writeJSON(jsonData, pathToFile) {
    let data = JSON.stringify(jsonData, null, 2);
    fs.writeFile(pathToFile, data, (err) => {
        if (err) {
            throw err;
        } else {
            console.log('Data written to file');
        }
    })
}