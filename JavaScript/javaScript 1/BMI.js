

function bmiCalculator(weight, height)  { 

    var bmi = weight / (height * height);

    // var BMI = weight/Math.pow(height,2);
    return Math.round(bmi);

}
bmiCalculator(60, 1.8);
var bmi = bmiCalculator(60, 1.8);
console.log(bmi);

var weight = prompt("What is your weight in kg?");
var height = prompt("What is your height in m?");

if (bmi < 18.5){
    console.log("Your BMI is " +  bmi, + " so you are underweight.");
}

if (bmi === 18.5-24.9){
    console.log("Your BMI is" + bmi + "so you have a normal weight.");
} 

if(bmi >24.9){
    console.log("Your BMI is " + bmi, + "so you are overweight.");
} 


