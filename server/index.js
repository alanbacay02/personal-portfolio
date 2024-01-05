const { Resend } = require('resend')
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

const auth_token = process.env.RESEND_API_TOKEN
console.log(auth_token)

const resend = new Resend(process.env.RESEND_API_TOKEN.toString())

// POST endpoint to handle form submissions
app.post('/submitForm', async (req, res) => {
  const { name, email, message } = req.body;
  // Gets data from client and stores it into processed data
  const processedData = { name, email, message, serverMessage: 'Data processed on server!' };
  console.log(processedData); // Logs data to console

  try {

    resend.emails.send({
      from: email,
      to: 'alanportfoliowebsite@gmail.com',
      subject: `Website Email from ${name}`,
      html: `<p>${message}</p>`
    })

    // Sending response back to the client
    res.status(200).json({
      message: 'Form submitted successfully.',
      processedData: processedData,
    });
  } catch (error) {
    console.error('Error sending email:', error)
    res.status(500).json({ message: 'Error submitting form' });
  }
});

app.use("/", (req, res) => {
  res.send("Server is running");
});

app.listen(3001, () => {
  console.log("Server has started on PORT: 3001");
});