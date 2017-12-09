const mongoose = require('mongoose');

// ES6 Promises
mongoose.Promise = global.Promise;

// Connect to the db before tests run
before(function(done){
  // Connect to mongodb
  // mongoose.connect('mongodb://lucie:lucie@ds133876.mlab.com:33876/connectingmlab')
  mongoose.connect('mongodb://localhost/testaroo');
  mongoose.connection.once('open', function(){
    console.log('connection has been made, now make fireworks');
    done();
  }).on('error', function(error){
    console.log('Connection error', error)
  })
});

// empty the database before we run the tests
// delete the characters
// run before mocha tests
beforeEach(function(done){
  mongoose.connection.collections.mariochars.drop(function() {
    done();
  })
})
