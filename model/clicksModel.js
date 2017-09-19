var mongoose = require('mongoose');
var clickSchema = new mongoose.Schema({
  //Define the attributes of a click
  userId: Number,
  url: String,

  clickEvent: {
    //Define the attributes of events
  }
},{
  timestamps:{
    createdAt: 'created_at'
  }
});
var ClickModel = mongoose.model('Click', clickSchema);

exports.ClickModel = ClickModel;
