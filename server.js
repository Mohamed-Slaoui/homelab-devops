// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve frontend (index.html)
app.use(express.static(path.join(__dirname, 'frontend')));

const quotes = [
            {
                text: "The only way to do great work is to love what you do.",
                author: "Steve Jobs"
            },
            {
                text: "Life is what happens when you're busy making other plans.",
                author: "John Lennon"
            },
            {
                text: "The journey of a thousand miles begins with one step.",
                author: "Lao Tzu"
            },
            {
                text: "That which does not kill us makes us stronger.",
                author: "Friedrich Nietzsche"
            },
            {
                text: "Be the change that you wish to see in the world.",
                author: "Mahatma Gandhi"
            },
            {
                text: "It is never too late to be what you might have been.",
                author: "George Eliot"
            },
            {
                text: "Everything you can imagine is real.",
                author: "Pablo Picasso"
            },
            {
                text: "Whatever you are, be a good one.",
                author: "Abraham Lincoln"
            }
        ];

// API route

app.get('/api/quotes', (req, res) => {
    res.json(quotes);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
