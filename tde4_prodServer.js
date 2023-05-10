const express = require('express');
const server = express();

let products = [
    {
        id: 1,
        name: 'Skol',
        description: 'Puro malte',
        isDone: true
    },
    {
        id: 2,
        name: 'Brahma',
        description: 'Puro malte',
        isDone: true
    },
    {
        id: 3,
        name: 'Antarctica',
        description: 'Puro malte',
        isDone: true
    },
    {
        id: 4,
        name: 'Budweiser',
        description: 'Puro malte',
        value: 2.50
    }
];

server.get("/products", (req, res) => {
    res.json(products);
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
