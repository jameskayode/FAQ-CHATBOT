
# MegaSkills Academy Chatbot

This project is a dynamic chatbot designed for MegaSkills Academy. It assists users with FAQs, provides information about the academy, and displays rich media responses (e.g., CEO details with images and links). Built using **Node.js**, **Socket.IO**, and **Vanilla JavaScript**, this chatbot can be easily integrated into websites for interactive user engagement.

## Features

- **Interactive FAQ System**: Answers user queries based on a pre-defined FAQ dataset.
- **Rich Media Support**: Displays images, links, and other formatted content in responses.
- **Real-time Communication**: Utilizes WebSocket technology for instant message exchange.
- **Customizable**: The chatbot and FAQ dataset can be tailored for different use cases.
- **Static File Serving**: Easily serve frontend assets using Express.


---

## Technologies Used

- **Backend**: Node.js, Express, Socket.IO
- **Frontend**: Vanilla JavaScript, HTML, CSS
- **Data Handling**: JSON (FAQ Dataset)
- **Libraries**: String Similarity for query matching

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14+ recommended)
- A code editor like [VS Code](https://code.visualstudio.com/)

---

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/jameskayode/FAQ-CHATBOT.git
   cd FAQ-CHATBOT
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Server**
   ```bash
   npm start
   ```

4. **Access the Chatbot**
   Open your browser and navigate to `http://localhost:5000`.

---

## Project Structure

```plaintext
megaskills-chatbot/
├── backend/
│   ├── index.js           # Main server file
│   └── data/
│       └── faq.json       # FAQ dataset
├── frontend/
│   ├── index.html         # Chat UI
│   ├── style.css          # Chat styling
│   └── script.js          # Chat client logic
├── package.json           # Project dependencies and metadata
└── README.md              # Project documentation
```

---

## How to Add/Update FAQs

1. Open the `backend/data/faq.json` file.
2. Add a new question-answer pair in the following format:
   ```json
   {
       "question": "Who is the CEO?",
       "answer": {
           "text": "John Doe is the CEO of MegaSkills Academy.",
           "image": "/images/ceo-picture.jpg",
           "social": {
               "twitter": "https://twitter.com/johndoe",
               "linkedin": "https://linkedin.com/in/johndoe"
           }
       }
   }
   ```
3. Save the file and restart the server.

---

## Contributing

Contributions are welcome! If you'd like to improve this project, please fork the repository and submit a pull request.

---

## Contact

For inquiries or support, please reach out to me on jameskayode39@gmail.com