var n = Math.random();
n = n * 6        // between 0 to 6 for range
n = Math.floor(n) + 1;   //to round up
console.log(n);



// whos playing

function whosPaying(names) {
 var names = ["Pooja", "Akshay", "Shweta", "Mohit", "Sneha"];
//console.log(names.lenght);   

var numberOfPeople = names.length;
var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
var randomPerson = names[randomPersonPosition];
return randomPerson + "is going to buy lunch today!";

}