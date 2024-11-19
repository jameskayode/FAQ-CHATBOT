const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const stringSimilarity = require('string-similarity');
const faqData = require('./data/faq.json');

const app = express();
const server = http.createServer(app);
app.use(express.static('frontend'));

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('userMessage', (msg) => {
        console.log('Received message:', msg);
    
        const questions = faqData.map(item => item.question.toLowerCase());
        const bestMatch = stringSimilarity.findBestMatch(msg.toLowerCase(), questions);
    
        if (bestMatch.bestMatch.rating > 0.5) {
            const response = faqData.find(item => item.question.toLowerCase() === bestMatch.bestMatch.target);

            // Check if the response is an object (like for CEO info) and handle accordingly
            if (typeof response.answer === 'object') {
                // Send the answer as an object (for CEO)
                socket.emit('botMessage', response.answer);
            } else {
                // Otherwise, check if the answer contains a URL and format it as a clickable link
                if (response.answer.includes('https://')) {
                    response.answer = response.answer.replace(/(https:\/\/[^\s]+)/g, '<a href="$1" target="_blank">$1</a>');
                }
                socket.emit('botMessage', response.answer);
            }
        } else {
            socket.emit('botMessage', "I'm sorry, I couldn't find an answer to that. For more assistance, please contact our customer care via WhatsApp <a href='https://wa.me/1234567890' target='_blank'>Contact Us on WhatsApp</a>");
        }
        
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });

});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
