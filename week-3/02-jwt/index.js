const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';


/**
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */
const zod = require('zod');

const schema = zod.object({
    username: zod.string().email(), 
    password: zod.string().min(6)
});

function signJwt(username, password) {
    // Your code here
    const ob = {username: username, password: password};
    const parsed = schema.safeParse(ob);
    if(parsed.success === true) {
        return jwt.sign(ob, jwtPassword);
    } else {
        return null;
    }
}
/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {
    // Your code here
    if(token === null)
        return false;

    return jwt.verify(token, jwtPassword, (err, decoded) => {
        if(err)
            return false;
        return true;
    });
}

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */

function isJWT(jwt) {
    let jwtSplitted = jwt.split('.');
    if (jwtSplitted.length !== 3)
        return false;
    
    try {
        let jsonFirstPart = Buffer.from(jwtSplitted[0], 'base64').toString('utf-8');
        let firstPart = JSON.parse(jsonFirstPart);
        if (!firstPart.hasOwnProperty('alg'))
            return false;
        let jsonSecondPart = Buffer.from(jwtSplitted[1], 'base64').toString('utf-8');
        let secondPart = JSON.parse(jsonSecondPart);
        
        
    } catch (err) {
        return false;
    }
    
    return true;
}

function decodeJwt(token) {
    // Your code here
    if(!isJWT(token))
        return false;
    return true;
}


module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
