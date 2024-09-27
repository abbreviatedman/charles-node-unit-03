// 2a. Import the Album model
const Album = require('./albumsModel');
// 2b. Write functionality to create an album
const createAlbum = async function(albumData) {
    try {
    const album = await Album.create(albumData);

    return album; 
  } catch (error) {
        throw error;
  }   
}

// 2c. Export controller functions
module.exports = {
     createAlbum,
     


}