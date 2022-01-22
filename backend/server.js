const express = require('express');
const path = require('path')
const dotenv = require('dotenv')
const colors = require('colors')
const axios = require("axios")

dotenv.config();

const app= express();
app.use(express.json())
const _dirname = path.resolve()

app.get('/getUser', async (req,res) => {
    try {
        const data = await axios.get("https://randomuser.me/api/")
        console.log(data.data.results[0]);
    } catch (error) {
        console.log(error);
    }
})

const PORT= process.env.PORT || 5000;
app.listen( PORT, ()=>{
    console.log("Server running".green.bold);
})