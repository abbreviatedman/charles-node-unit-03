// 5a. Import mongoose
const mongoose = require('mongoose');

// 10a. Define an ObjectId variable
const usersSchema = new mongoose.Schema(
    {
        username: {
            type: String, 
            unique: true,
            required: true,
            lowercase: true,

        }
    },
            {timestamps: true}
)
// 5b. Create a user schema

// 5c. Create the user model
const User = mongoose.model('User, user')
// 5d. Export the User model
