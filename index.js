const { fetchMyIP, fetchCoordsByIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , ip);
});


fetchCoordsByIP('68.147.5.95', (error, data) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log('Your coordinates are [lat, long] :', data);
});

