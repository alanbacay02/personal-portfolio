const express = require('express');
const cors = require('cors')
const app = express();

const corsOptions = {
  origin: '*', // Replace with your frontend domain
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
  const processedData = { name, email, message, serverMessage: 'Data processed on server!' };
    console.log(processedData);

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