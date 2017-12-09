const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author');

//Describe our test
describe('Nesting records', function(){
  beforeEach(function(done){
    mongoose.connection.collections.authors.drop(function(){
      done();
    })
  })
  it('Creates an author with sub-documents', function(done){
    var pat = new Author({
      name: 'Patrick Rothfuss',
      books: [{title: 'Name of the Wind', pages: 400}]
    })
    pat.save().then(function(){
      Author.findOne({name: 'Patrick Rothfuss'}).then(function(record){
        //adds a book to the books array
        record.books.push({title: 'Wise Man Fear', pages: 500});
        record.save().then(function(){
          Author.findOne({name: 'Patrick Rothfuss'}).then(function(result){
            assert(result.books.length == 2);
            done()
          })
        })
      })
    })
  })
})
