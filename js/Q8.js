
function convertToMeters(distanceInKm) {
    return distanceInKm * 1000;
  }
  function convertToFeet(distanceInKm) {
    return distanceInKm * 3280.84;
  }
  function convertToInches(distanceInKm) {
    return distanceInKm * 39370.1;
  }
  function convertToCentimeters(distanceInKm) {
    return distanceInKm * 100000;
  }
  function printDistanceConversions() {
    var distanceInKm = parseFloat(prompt("Enter the distance between two cities in kilometers:"));
    var distanceInMeters = convertToMeters(distanceInKm);
    var distanceInFeet = convertToFeet(distanceInKm);
    var distanceInInches = convertToInches(distanceInKm);
    var distanceInCentimeters = convertToCentimeters(distanceInKm);
    console.log("Distance in meters: " + distanceInMeters + " m");
    console.log("Distance in feet: " + distanceInFeet + " ft");
    console.log("Distance in inches: " + distanceInInches + " in");
    console.log("Distance in centimeters: " + distanceInCentimeters + " cm");
  }
  printDistanceConversions();
  