const express = require('express')
const path = require("path")
const dotenv = require('dotenv')
const cors = require('cors')

const server = express();
server.use(express.json())
server.use(cors())

dotenv.config({path:"./.env"})
require('./config/db.js')

const _dirname = path.resolve();
const authRoutes = require('./Routes/authRoutes.js')
server.use('/auth', authRoutes)

const notesRoutes = require('./Routes/notesRoutes.js')
server.use('/notes', notesRoutes)

if (process.env.NODE_ENV === "production") {
    server.use(express.static(path.join(_dirname, "/frontend/dist")))

    server.get("*", (req, res) => {
        res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
    });
}

const  PORT = process.env.PORT || 8000;

server.listen(PORT, ()=> {
    console.log(`Listening Port Number ${PORT}`)
})


