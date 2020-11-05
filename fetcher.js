const request = require('request');
// const http = require('http');
const fs = require('fs');

let url = process.argv.slice(2);

request(url.toString(), (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  

  let download = fs.createWriteStream('./index.html');
  download.write(body);
  console.log('Downloaded and saved 1235 bytes to ./index.html')
});