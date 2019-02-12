var cubicMetre = function(a, b) {
return a * b;
};
var a = parseInt(prompt("Enter volume to the nearest litres"));
var b = 1000;
var result = "In cubic metres, " + a + "litres " + "= " + cubicMetre(a, b) + "cubic metres.";
alert(result);
