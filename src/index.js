const express = require('express');
const path = require('path');
const app = express();
const port = 3010;
const cors = require('cors');
const bodyParser = require('body-parser');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../public')));

app.use(cors()); // ✅ Allow all origins (or restrict to your domain)
app.use(bodyParser.json());
// Route for '/'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/indexvr.html'));
});

// Optional: Additional route example
// app.get('/loreal_studio', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/index2.html'));
// });
// app.get('/video', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/index5.html'));
// });
// app.get('/gps', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/location.html'));
// });
// app.get('/vr', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/indexvr.html'));
// });
// app.get('/water', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/idex.html'));
// });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
