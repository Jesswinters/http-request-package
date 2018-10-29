const request = require('request');
const fs = require('fs');

request
  .get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function(err) {
    throw err;
  })
  .on('response', function(response) {
    console.log('Downloading image...');
    console.log('Response Status Message: ', response.statusMessage);
    console.log('Response Content Type: ', response.headers['content-type']);
    console.log('Download complete.');
  })
  .pipe(fs.createWriteStream('./future.jpg'));
