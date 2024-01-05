const express = require('express');
const cors = require('cors')
const app = express();

const corsOptions = {
  origin: 'https://www.alanbacay.dev', // Replace with your frontend domain
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // If handling cookies or sessions
  optionsSuccessStatus: 200 // Some legacy browsers choke on 204
};

app.use(cors(corsOptions));

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Get Email Address and Password from .env
const email = process.env.EMAIL_ADDRESS
const password = process.env.EMAIL_PASSWORD

console.log(password ? 'password is set from env' : 'password not set from env')

// POST endpoint to handle form submissions
app.post('/submitForm', (req, res) => {
  const { name, email, message } = req.body;
  // Gets data from client and stores it into processed data
  const processedData = { name, email, message, serverMessage: 'Data processed on server!' };
  console.log(processedData); // Logs data to console

  // Sends back a message and the data to client for testing
  res.status(200).json({
    message: 'Form submitted successfully.',
    processedData: processedData
  });
});

app.use("/", (req, res) => {
  res.send("Server is running");
});

app.listen(3001, () => {
  console.log("Server has started on PORT: 3001");
});