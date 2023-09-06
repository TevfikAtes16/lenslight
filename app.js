import express  from "express";
import dotenv  from "dotenv";
import conn  from "./db.js";
import pageRoute  from "./routes/pageRoute.js";
import photoRoute  from "./routes/photoRoute.js";

dotenv.config();

//Connection to the DB
conn();

const app = express();

//Ejs Template Engine
app.set('view engine','ejs');

//Static Files Middleware
app.use(express.static('public'));
app.use(express.json());

//Routes
app.use('/',pageRoute);
app.use('/photos',photoRoute);

// app.get('/', (req,res) => {
//     res.render('index');
// })

// app.get('/about', (req,res) => {
//     res.render('about');
// })

app.listen(process.env.PORT, () => {
    console.log(`Application running on port: ${process.env.HTTP}${process.env.PORT}/`);
});

