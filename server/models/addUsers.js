const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const addUser = mongoose.Schema({
    name: { type: String,required: true},
    surname: {type: String,required: true},
    contact: { type: Number,required: true},
    address: {type: String,required: true},
    username: { type: String,required: true},
    password: {type: String,required: true}
});

addUser.pre('save', async function(next){
    try {
        const salt = await bcrypt.genSalt(10);
        const hasPass = await bcrypt.hash(this.password, salt)
        this.password = hasPass;
        next();
    } catch (error) {
        next(error);
    }
})


module.exports = mongoose.model('users', addUser);