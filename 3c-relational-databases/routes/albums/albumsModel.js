// 1a. Import mongoose
const mongoose = require('mongoose');

// 9a. Define an ObjectId variable

// 1b. Create an album schema
const albumsSchema = new mongoose.Schema(
{
    title: {
        type: String, 
        default: '',
        lowercase: true,
    }, 
    artist: { 
        type: String,
        default: '',
        lowercase: true,
    }
  },
    {timestamps: true}
);



// 1c. Create the album model
const Album = mongoose.model('Album', albumsSchema);


// 1d. Export the album model
module.exports = Album;
