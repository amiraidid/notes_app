const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_KEY).then(() => {
    console.log('Connected to Database')
}).catch(() => console.log('Enable to Connect'))