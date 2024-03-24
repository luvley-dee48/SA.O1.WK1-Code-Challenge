//Speed Detector
//for obtaining a speed of a moving object i might name my function as calculate speed/getspeed
//if my functions is performing the calculations related to speed i could name it calculatespeed

function calculate(speed) {
  //the value with an input field with an id of 'speed'
  //i shall use const because we have a value that does not change.
  const speedLimit = 70;
  const kmPerDemeritPoint = 5;
  let points = 0;

  //this is for whether the speed is less than 70, if it is then the id which is speed should be able to come up with the result "Ok"
  if (speed < 70) {
    console.log("OK");
  } else {
    //driver recieves one point for every 5 km/hr over the speed limit of 70km /hr
    points = Math.floor((speed - 70) / 5);
    //will check whether number exceeds 12. If it does then then the id will be set to Licence suspended
    if (points > 12) {
      console.log("Licence Suspended");
    } else {
      console.log("points:" + points);
    }
  }
}
calculate(80);
