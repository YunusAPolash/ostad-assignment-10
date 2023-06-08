const JWT =require("jsonwebtoken");
require('dotenv').config({path: './.env'});

exports.authenticate = (req, res, next) => {
    try {
        // checking has token!
        const hasToken = req.headers.authorization;
        if(!hasToken){
            return res.status(401).json({error: "Unauthorized"})
        }

        const decoded = JWT.verify(
            req.headers.authorization,
            process.env.JWT_SECRET
          );
        req.userId = decoded.userId;
        next();
        
    } catch (error) {
        return res.json(error);
    }
}