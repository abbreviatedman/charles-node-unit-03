// 6a. Import the User model
const User = require ('./usersModel');

// 6b. Write functionality to create a user
const createUser = async function (userData) {
    try {

        const user = await User.create(userData);

        return user; 
        } catch (error) { 
        throw error; 
    }
}


// 6c. Export controller functions
module.exports = {
    createUser,
}