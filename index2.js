const { nextISSTimesForMyLocation } = require('./iss_promised');

// nextISSTimesForMyLocation().then((body) => {
//   console.log(body);
// })

nextISSTimesForMyLocation()
  .then((body) => console.log(body))
  .catch((error) => console.log("Error: ", error.message))