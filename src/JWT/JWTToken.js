const JWT = require('jsonwebtoken');
require('dotenv').config({path: './.env'});

// Get Secrect Key From .env
const jwtSecret = process.env.JWT_SECRET;

// Taking demo user id for test purpose
const userId = "648127ed676c10068162db82";

// Task 3 
// Write a function called generateToken that generates a JWT token using the 'jsonwebtoken' library. The function should accept a user ID and a secret key as parameters and return the generated token.

function generateToken(userid,secret){
    const token = JWT.sign({userid},secret);
    return token;
}

// Lets call the generateToken (testing)

generateToken(userId,jwtSecret);