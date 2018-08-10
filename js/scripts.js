var b= parseInt(prompt("enter length of side of b"))
var a = parseInt(prompt("enter length of side of a"))
var c = parseInt(prompt("enter length of side of c"))

if(a==b && b==c)
alert("Equilateral");

else if((a==b && b!=c ) || (a!=b && c==a) || (c==b && c!=a) )
alert("Isosceles");

else if(a!=b && b!=c && c!=a)alert("Scalene");

else if(a >= (b+c) || c >= (b+a) || b >= (a+c) )
alert("Not a triangle");
