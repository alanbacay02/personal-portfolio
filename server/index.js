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

// POST endpoint to handle form submissions
app.post('/submitForm', (req, res) => {
  const { name, email, message } = req.body;
  // Perform actions here to send email or handle the data
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  res.status(200).send('Form submitted successfully');
});

app.use("/", (req, res) => {
  res.send("Server is running");
});

app.listen(3001, () => {
  console.log("Server has started on PORT: 3001");
});