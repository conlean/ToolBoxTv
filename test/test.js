//Test module
'use strict';

var app = require('../app'),
chai = require('chai'),
request = require('supertest');
var expect = chai.expect;

it("Responds with 'Hello ToolBoxTv api!'", function(done) {
    request(app)
        .get("/")
        .expect(200)
        .expect("Hello ToolBoxTv api!")
      //  .end(done);
      done();
});

it("Responds with 'Text Exmample ToolBoxTv!'", function(done) {
    request(app)
        .get("/api/message")
        .query({ str: 'Text Exmample ToolBoxTv!' })
        .expect(200)
        .expect("Text Exmample ToolBoxTv!")
      //  .end(done);
      done();

});
