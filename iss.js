const request = require('request');

const fetchMyIP = function(callback) {
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

const fetchCoordsByIP = (ip, callback) => {

  request(`https://freegeoip.app/json/${ip}`, (error, response, body) => {
    if (error) {
      callback(error, null);

    } else if (response.statusCode !== 200) {
      callback(Error('Bad status code.'), null);

    } else {
      const parsed = JSON.parse(body);
      const latitude = parsed['latitude'];
      const longitude = parsed['longitude'];
      const coordinates = [latitude, longitude];
      // console.log(coordinates);
      callback(null, coordinates);

    }
  });
};

module.exports = {
  fetchMyIP,
  fetchCoordsByIP
};