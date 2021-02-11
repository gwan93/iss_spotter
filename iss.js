const request = require('request');

const fetchMyIP = function(callback) {
  // use request to fetch IP address from JSON API
  const url = 'https://api.ipify.org/?format=json';
  request(url, (error, response, body) => {

    if (error) {
      callback(error, null);
      return;
    } 

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    
    const ipv4 = JSON.parse(body)['ip'];
    callback(null, ipv4);
    
  });
};

module.exports = { fetchMyIP };