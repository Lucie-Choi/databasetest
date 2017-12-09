const mocha = require('mocha'); //npm install
const assert= require('assert');
const MarioChar = require('../models/mariochar');

// Describe tests
describe('Updating records', function(){
  var char;
  beforeEach(function(done){
    char = new MarioChar({
      name:'Mario',
      weight: 50
    });

    char.save().then(function(){
      done()
    })
  })
  // Create tests
  it('Update one record from the database', function(){
    MarioChar.findOneAndUpdate({name: 'Mario'}, {name: 'Luigi'}).then(function(done){
      MarioChar.findOne({_id: char.__id}).then(function(result){
        assert(result.name === "Luigi")
        done()
      })
    })
  })
  it('Update weight from the database', function(){
    MarioChar.update({}, {$inc: {weight: 1}}).then(function(done){
      MarioChar.findOne({name: 'Mario'}).then(function(record){
        assert(record.weight === 51);
      })
    })
  })

})
