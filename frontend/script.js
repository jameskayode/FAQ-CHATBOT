// Connect to the server using Socket.IO
const socket = io('http://localhost:5000');

// Event listener for the "Send" button click
document.getElementById('send-btn').addEventListener('click', () => {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== "") {
        appendMessage('You', userInput);
        socket.emit('userMessage', userInput); // Send the message to the server
    }
    document.getElementById('user-input').value = ''; // Clear the input field
});

// Event listener for the "Enter" key press
document.getElementById('user-input').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const userInput = document.getElementById('user-input').value;
        if (userInput.trim() !== "") {
            appendMessage('You', userInput);
            socket.emit('userMessage', userInput); // Send the message to the server
        }
        document.getElementById('user-input').value = ''; // Clear the input field
    }
});

// Listen for messages from the server
socket.on('botMessage', (message) => {
    if (typeof message === 'object') {
        // If the response is an object (like for the CEO), render it differently
        const ceoInfo = message;
        const ceoElement = document.createElement('div');
        ceoElement.classList.add('ceo-info');
        
        ceoElement.innerHTML = `
            <img src="./praize.jpg" alt="CEO Picture" class="ceo-picture"/>
            <p><strong>Praise Muri</strong> is the CEO of MegaSkills Academy. He has a rich background in tech and business management.</p>
            <p>Follow him on social media:</p>
            <p>
                <a href="${ceoInfo.social.facebook}" target="_blank">Facebook</a> |
                <a href="${ceoInfo.social.linkedin}" target="_blank">LinkedIn</a>
            </p>
        `;
        document.getElementById('chat-box').appendChild(ceoElement);
    } else {
        // If the response is just a string, render it normally
        appendMessage('MegaBot', message);
    }
});

function appendMessage(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender === 'You' ? 'user' : 'MegaBot');
    messageElement.innerHTML = `${sender}: ${message}`; // Allows rendering of HTML content
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

