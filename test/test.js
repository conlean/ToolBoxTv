'use strict';

var app = require('../app'),
  chai = require('chai'),
  request = require('supertest');

var expect = chai.expect;

describe('API Tests', function() {
  var task = {
    name: 'integration test'
  };
  describe('# Get default route', function() {
    it("Should Responds with 'Hello ToolBoxTv api!'", function(done) {
      request(app).get('/').end(function(err, res) {
        expect(200);
        expect("Hello ToolBoxTv api!");
        done();
      });
    });
  });

  describe('## Get message ', function() {
    it("Should Responds with 'Text Exmample ToolBoxTv!'", function(done) {
      request(app).get("/api/message")
      .query({ str: 'Text Exmample ToolBoxTv!' })
      .end(function(err, res) {
        expect(200);
        expect("Text Exmample ToolBoxTv!");
        done();
      });
    });
  });
});
