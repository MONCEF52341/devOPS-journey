require('dotenv').config();
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
const swaggerDocument = require('./swagger.json');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204
}));


// Endpoint API
app.get('/api/data', (req, res) => {
  res.json({
    message: "Hello from API!",
    data: [
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" }
    ]
  });
});

// Endpoint HTML
app.get('/html', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>MERN App</title>
    </head>
    <body>
        <h1>Hello from Backend!</h1>
        <p>Ceci est une page HTML de base</p>
    </body>
    </html>
  `);
});

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});