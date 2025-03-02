alert("Hello World!!");

prompt("What is your name?");

typeof("Pooja");
2+3;
typeof(28);
typeof(true);

var myName = "Pooja";
alert(myName);

var myName = "Pooja";
var yourName = prompt("What is your name?");
alert("My name is " + myName +  " " + yourName);

var tweet = prompt("Compose your tweet");
var tweetcount = tweet.length;
alert("You have written " + tweetcount + " character " + (180-tweetcount) + " are remaining");;

var tweet = prompt("Compose your tweet");
var tweetUnder180 = tweet.slice(0, 140);
alert(tweetUnder180);


alert(prompt("Compose your tweet:").slice(0, 140));


var myName = "Pooja";
myName.slice(0, 3);

var name = "Pooja";
name = name.toUpperCase();
name = name.toLowerCase();
    
//first letter upper case rest lower case

var name = prompt("What is your name? ");
var firstLetter = name.slice(0, 1);
var firstLetterUpper = firstLetter.toUpperCase();

var restLetter = name.slice(1, name.length);
var restLetterLower = restLetter.toLowerCase();

alert("Hello " + firstLetterUpper + restLetterLower);
    