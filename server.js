const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Root (home) page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Form page
app.get('/form', (req, res) => {
  res.sendFile(path.join(__dirname, 'form.html'));
});

// About Us page
app.get('/about_us', (req, res) => {
  res.sendFile(path.join(__dirname, 'about_us.html'));
});

// Contact page
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact.html'));
});

// What page
app.get('/what', (req, res) => {
  res.sendFile(path.join(__dirname, 'what.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
