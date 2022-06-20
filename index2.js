const { nextISSTimesForMyLocation } = require('./iss_promised');

const printPassTimes = function(times) {
  for (const time of times) {
    const date = new Date(0);
    const duration = time.duration;
    date.setUTCSeconds(time.risetime);
    console.log(`Next pass at ${date} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });