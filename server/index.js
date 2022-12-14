const express = require('express'); 
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

require('dotenv/config');
const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));

// app.use(express.static('productImages'));
app.use('/productImages', express.static("productImages"))

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(routes);

mongoose.connect(process.env.DB_CONNECTION, (err) => {
    if(err){
        console.log("|There is a problem connecting")
    } else {
        console.log("MongoDB Atlas Connection Established")
    }
});

const PORT = process.env.Port || 5000;

app.listen(PORT, ()=> {console.log(`Server started on Port: ${PORT}`)});