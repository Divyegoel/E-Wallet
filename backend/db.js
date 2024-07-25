const  mongoose = require('mongoose');
mongoose.connect('mongodb+srv://f20212730:dbUser_f20212730@cluster0.dvmss58.mongodb.net/');

// Schema for User table in Database 
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

// Schema for Accounts table 
const accountSchema = new mongoose.Schema({
        userId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User',
            required : true
        },
        balance : {
            type : Number,
            required : true
        }
})

// Create a model from the schema
const User = mongoose.model('User', userSchema);
const Accounts = mongoose.model('Accounts', accountSchema);

module.exports = {
	User,
    Accounts,
    mongoose
};
