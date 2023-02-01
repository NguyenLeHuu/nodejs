const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/dbTest',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected ok!');
    } catch (error) {
        console.log('fail!')
    }
}

module.exports = { connect };