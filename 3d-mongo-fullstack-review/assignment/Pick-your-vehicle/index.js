const express = require ('express');
const path = require ('path');



const app = express(); 


const PORT = 3000 

app.listen(PORT, () => { 
    console.log(`server is on port ${PORT}...`);

});
