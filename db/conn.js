require('dotenv').config();
const mongoose = require("mongoose");

//const url = process.env.DATABASE_URL;
const url = process.env.DATABASE_URL
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex: true,
    
}).then(() => {
    console.log("connect sucessful")
}).catch((error) => {
    console.log(error);
});

//mongodb+srv://wowhack:<wowhack>@cluster0.htofq.mongodb.net/<>?retryWrites=true&w=majority