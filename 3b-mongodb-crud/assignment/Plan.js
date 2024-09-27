const mongoose = require ('mongoose');

const plansSchema = new mongoose.Schema ({

    date: {
    type: String, // client has to end in the format: "2024-09-25"
    required: true,
    unique: true,
},
    breakfast: String
    lunch: String
    dinner: String

})
module.exports = mongoose.model('Plan', plansSchema);



