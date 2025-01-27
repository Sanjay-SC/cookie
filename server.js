const express = require('express');
const app = express();

app.use((req, res, next) => {
  // Allow cross-origin requests
  res.setHeader('Access-Control-Allow-Origin', 'https://other-domain.com'); // Replace with your domain
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

app.get('/set-cookie', (req, res) => {
  res.cookie('crossDomainCookie', 'cookieValue', {
    httpOnly: true,
    secure: true, // Use HTTPS
    sameSite: 'None', // Allow cross-site requests
    domain: '.example.com', // Set for your domain or subdomains
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  });
  res.send('Cookie set');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
