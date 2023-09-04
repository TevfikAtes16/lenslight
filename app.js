import express  from "express";

const app = express();
const port = 3000;
const http = 'http://127.0.0.1:'


app.get('/', (req,res) => {
    res.send('Index sayfasi')
})

app.listen(port, () => {
    console.log(`Application running on port: ${http}${port}/`);
});