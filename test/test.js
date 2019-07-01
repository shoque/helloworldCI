var request = require('supertest'); var app = require('../server.js')  
 describe('GET /', function() 
 {   it('displays "Hello World!"', 
 function(done) {         
  request(app).get('/').expect('Hello World!', done);  
 }); });  
