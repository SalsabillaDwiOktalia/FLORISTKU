const mongoose = require('mongoose')
const mongoURL ='mongodb://localhost:27017/projectuas';
mongoose.connect(mongoURL,
    err => {
        if(err) throw err;
        console.log('Berhasil connect ke Mongo')
    });