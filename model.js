var mongoose = require('mongoose'),
    db = mongoose.connect(process.env.MONGOHQ_URL || 'mongodb://localhost/firstapp'),
    Post, validator;

validator = function(v) {
  return v.length > 0;
}

Post = new mongoose.Schema({
  text:    {type: String, validate: [validator, "Empty Error"]},
  created: {type: Date, default: Date.now}
});

exports.Post = db.model('Post', Post);
