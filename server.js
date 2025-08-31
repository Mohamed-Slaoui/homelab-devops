// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve frontend (index.html)
app.use(express.static(path.join(__dirname)));

// API route
app.get('/', (req, res) => {
    res.json({ message: 'Hello from Node.js ! Lets learn DevOps' });
});
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from Node.js backend API!' });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
