//alert("Kandice")
alert("Welcome");
var Option = prompt("Press 1 to count   Press 2 to calculate    press 'q' to Quit");

// if(Option === "q")


if (Option ==="1")
	{alert("Counting");
	var OnesOrTwos = prompt("Press '1' to count by 1s or '2' for by 2s");
{
	if (OnesOrTwos==="1") 
	{
var ConOne = parseInt(prompt("Enter 1st Value"));
var ConTwo = parseInt(prompt("Enter 2nd Value"));
for (var x = ConOne; x <= ConTwo; x = ConOne++) 
{
	console.log(x)
}
}
	else if (OnesOrTwos==="2") 
	{
var ConOneA = parseInt(prompt("Enter number to start"));
var ConOneB = parseInt(prompt("Enter number to stop "));
for (var x = ConOneA; x <= ConOneB; x = x+2) 
{
	console.log(x)
}
}
}
}

if (Option === "2") 
{
	alert("Calculating");
	var CalOpt = prompt("Press 'a' for ADD and 's' for SUBTRACT");
{
	if (CalOpt==="a") 
	{
var ValOne = parseInt(prompt("Enter Value"));
var ValTwo = parseInt(prompt("Enter 2nd Value"));
var TotalVal = (ValOne+ValTwo);
alert(TotalVal);
console.log(TotalVal)
	}
if (CalOpt=== "s") 
{
var ValOnea = parseInt(prompt("Enter Value"));
var ValTwoa = parseInt(prompt("Enter 2nd Value"));
var TotalVal2 = (ValOnea-ValTwoa);
alert(TotalVal2);
console.log(TotalVal2)
}
}
}
