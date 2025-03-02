

var guestList = ["Pooja", "Akshay", "Shweta", "Mohit", "Sneha"];
console.log(guestList.length);
console.log(guestList[2]);

var guestName = prompt("What is your name?");
guestList.includes(guestName)


if (guestList.includes(guestName)) {
    alert("Welcome!!");
}
else{
        alert("Sorry!! Maybe next time.");
    }



    