document.getElementById("getQuoteButton").addEventListener("click", function() {
    var length = parseFloat(prompt("Enter sum length/diameter of all parcels in meters or 0 if not sure"));
    var height = parseFloat(prompt("Enter sum height in m:"));
    var width = parseFloat(prompt("Enter sum width in m:"));
    var actual = parseFloat(prompt("Enter sum actual/estimated weight of all parcels in kg:"));
    var distance = parseFloat(prompt("Enter total distance between pickup & delivery point in km"));

    var dimension = Math.round(length * height * width);
    var dimensionalWeight = Math.round(dimension / 50);
    var distanceRate = Math.round(distance * 5);
    var labour = distanceRate;
    var billable = Math.round(dimensionalWeight + distanceRate + labour);
    var billableActual = Math.round(actual + distanceRate + labour);

    if (billable < billableActual) {
        alert("Your quote: " + billableActual);
    } else {
        alert("Your quote: " + billable);
    }
});
