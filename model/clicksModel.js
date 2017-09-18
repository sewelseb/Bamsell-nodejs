var mongoose = require('mongoose');
var clickSchema = new mongoose.Schema({
  //Define the attributes of a click
  userId: Number,
  clickEvent: {
    //Define the attributes of events
  }
});
var ClickModel = mongoose.model('Click', clickSchema);

exports.ClickModel = ClickModel;
