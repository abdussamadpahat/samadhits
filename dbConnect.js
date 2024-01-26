const mongoose = require("mongoose")

const db = "mongodb+srv://samadhits:samadhits12345@cluster0.0052s6x.mongodb.net/samadhitsDB"

async function getConnect(){
    try {
        // await mongoose.connect(process.env.DB_KEY)
        // await mongoose.connect("mongodb://127.0.0.1:27017/videoPlayerDB")

        await mongoose.connect(db)
        console.log("Database is connected!!!");
    } catch (error) {
        console.log(error);
    }
}

getConnect()
