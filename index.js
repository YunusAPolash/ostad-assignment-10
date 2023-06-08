const mongoose = require('mongoose');
const app = require('./app');


require('dotenv').config({path: './.env'})
// Applicaiton PORT 
const PORT = process.env.PORT || 5050;

// database URI
const URI = process.env.DATABASE;

mongoose.connect(URI).then(()=>{
    console.log('Database Connected');      
    app.listen(PORT,function(){
        console.log(`application is runned successfully at http://localhost:${PORT}`);
    })
}).catch((err)=>console.log(err));
