var output = [];
var count = 1;

function fizzBuzz() {

    if (count % 3 === 0 && count % 5 === 0) {
        output.push("fizzbuzz");
    }

    else if (count % 3 === 0) {
        output.push("fizz");
    }
    else if (count % 5 === 0) {
        output.push("buzz");
    }
    else {
        output.push(count);
    }
    count++;
    console.log("output");
}
fizzBuzz();





// while loop

var output = [];
var count = 1;

function fizzBuzz() {
    while (count <= 100) {
        if (count % 3 === 0 && count % 5 === 0) {
            output.push("fizzbuzz");
        }

        else if (count % 3 === 0) {
            output.push("fizz");
        }
        else if (count % 5 === 0) {
            output.push("buzz");
        }
        else {
            output.push(count);
        }
        count++;
}
    console.log(output);
    return output;
}
fizzBuzz();


// for loop
var output = [];
var count = 1;

function fizzBuzz() {
    for (var count = 1; count < 101; count++) {
        if (count % 3 === 0 && count % 5 === 0) {
            output.push("fizzbuzz");
        }

        else if (count % 3 === 0) {
            output.push("fizz");
        }
        else if (count % 5 === 0) {
            output.push("buzz");
        }
        else {
            output.push(count);
        }
        
    }
    console.log(output);
    return output;
}
fizzBuzz();
