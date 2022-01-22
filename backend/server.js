const express = require('express');
const path = require('path')
const dotenv = require('dotenv')
const colors = require('colors')
const axios = require("axios")

dotenv.config();

const app= express();
app.use(express.json())
const _dirname = path.resolve()

// @desc Get random user from api
// @method GET
// @access Public
app.get('/getUser', async (req,res) => {
    try {
        const data = await axios.get("https://randomuser.me/api/")
        console.log(data.data.results[0]);
    } catch (error) {
        console.log(error);
    }
})

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(_dirname, '/frontend/build')))

    app.get('*', (req,res) => res.sendFile(path.resolve(_dirname, 'forntend', 'build', 'index.html')))
} else{
    app.get('/', (req,res)=>{
        res.send("Api running...")
    })    
}

const PORT= process.env.PORT || 5000;
app.listen( PORT, ()=>{
    console.log("Server running".green.bold);
})