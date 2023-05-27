const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const chefs = require("./chef.json");

app.get('/', (req, res) => {
    res.send('server is running')
})


app.get("/chefs", (req, res) =>{
    res.send(chefs);
})


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})