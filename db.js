import mongoose from "mongoose";

const conn = () => {
    mongoose.connect(process.env.DB_URL,{
        dbName: "lenslight",
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => {
        console.log("Connected to the DB successfully");
    })
    .catch((err) => {
        console.log(`DB connection err:, ${err}`);
    
    });
}

export default conn;