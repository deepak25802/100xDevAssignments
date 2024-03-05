const jwt = require('jsonwebtoken');

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const jwtToken = token.split(' ')[1];

    if(jwt.verify(jwtToken, "SECRET")) 
        next();
    else 
        res.send('admin not verified');
}

module.exports = adminMiddleware;