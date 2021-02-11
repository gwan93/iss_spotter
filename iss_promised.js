const request = require('request-promise-native');

const fetchMyIP = () => {
  return request('https://api.ipify.org/?format=json');
};

const fetchCoordsByIP = (ip) => {
  const ipv4 = JSON.parse(ip)['ip'];
  return request(`https://freegeoip.app/json/${ipv4}`)
};

const fetchISSFlyOverTimes = (coords) => {
  const { latitude, longitude } = JSON.parse(coords);
  return request(`http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`);
};

const nextISSTimesForMyLocation = () => {
  return fetchMyIP()
  .then(ip => fetchCoordsByIP(ip))
  .then(coords => fetchISSFlyOverTimes(coords))
  .then(times => {
    const { response } = JSON.parse(times);
    return response;
  });
};

module.exports = { nextISSTimesForMyLocation };