// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5001; // Ensure this port is available and not used by other services

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON bodies

// Sample polls data
const polls = [
    {
        id: 1,
        question: 'Who will win the 2024 Presidential Election?',
        options: ['Candidate A', 'Candidate B']
    },
    {
        id: 2,
        question: 'What is the most important issue for voters?',
        options: ['Economy', 'Healthcare', 'Education']
    },
    {
        id: 3,
        question: 'Who do you prefer for the next election?',
        options: ['Person A', 'Person B']
    }
];

// Endpoint to get polls
app.get('/elections/polls', (req, res) => {
    res.json(polls);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

