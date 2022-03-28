const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, 'Please add First Name'],
    maxlength: [20]
  },
  lastname: {
    type: String,
    required: [true, 'Please add Last Name'],
    maxlength: [20]
  },
  email: String,
  phone: String,
  address: String
})

module.exports = mongoose.models.Data || mongoose.model('Data', DataSchema);