const mocha = require('mocha'); //npm install
const assert= require('assert');
const MarioChar = require('../models/mariochar');

// Describe tests
describe('Saving records', function(){
  // Create tests
  it('saving records', function(done){
    //create a new instance
    var char = new MarioChar({
      name:'Mario'
    })
    //saving to the database
    char.save().then(function(){
      assert(char.isNew === false);
      done(); // meaning this test is done.
    });



  })
  
})
