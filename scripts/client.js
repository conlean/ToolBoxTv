'use strict'

var rp = require('request-promise');
var message = '' ;

process.argv.forEach(function (val, index, array) {
   if (index > 1) {
    message = message.concat( " " + val);
    }
});

var options = {
    uri: 'http://localhost:8080/api/message',
    resolveWithFullResponse: true,
    qs: {
		      str: message
		    },
};
 //console.log(options);
rp(options)
    .then(function (response) {
  //    console.log("response " + response.statusCode);
      console.log(response.body);
    })
    .catch(function (err) {
         console.log('error', err);
    });
