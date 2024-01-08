const { Resend } = require('resend')
const express = require('express');
const cors = require('cors')
const app = express();

const corsOptions = {
  origin: 'https://www.alanbacay.dev',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // If handling cookies or sessions
  optionsSuccessStatus: 200, // Some legacy browsers choke on 204
  allowedHeaders: 'Content-Type, Authorization',
};

const webhookOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // If handling cookies or sessions
  optionsSuccessStatus: 200, // Some legacy browsers choke on 204
  allowedHeaders: 'Content-Type, Authorization',
};

// Sets CORS origin and content headers
app.use(cors(corsOptions));

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const auth_token = process.env.RESEND_API_TOKEN

const resend = new Resend(auth_token)

// submitForm endpoint to handle form submissions
app.post('/submitForm', cors(corsOptions), async (req, res) => {
  const { name, email, message } = req.body;
  // Gets data from client and stores it into processed data
  const processedData = { name, email, message, serverMessage: 'Data processed on server!' };
  console.log(processedData); // Logs data to console
  
  try {
    const { data, error } = await resend.emails.send({
      from: `${name ? name : 'Portfolio Emailer'} <outbound@alanbacay.dev>`,
      to: 'alan.social02@gmail.com',
      subject: `Website Inquiry from ${name ? name : 'Portfolio Emailer'}`,
      html: `
      <p>${message}</p>
      <small>Sender Email: <a href='mailto:${email}'>${email}</a></small>
      `
    });

    if (error) {
      return res.status(400).json({ error });
    }

    res.status(200).json({ data });
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// webhooks endpoint to handle webhook submissions
app.post('/webhooks', cors(webhookOptions), async (req, res) => {
  const payload = req.body
  console.log(payload['type'])
  res.status(200)
})

app.use("/", (req, res) => {
  res.send("Server is running");
});

app.listen(3001, () => {
  console.log("Server has started on PORT: 3001");
});