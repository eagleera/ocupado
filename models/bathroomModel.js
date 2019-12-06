const mongoose = require('mongoose')
mongoose.set('useCreateIndex',true);
const Schema = mongoose.Schema

const bathroomSchema = new Schema({
  name: {type:String, require: [true, 'Se tiene que mandar un name']},
  status: { type: Boolean}
})

module.exports = mongoose.model('Bathroom', bathroomSchema);
