// Alert to welcome user to Loop Lab 
alert("Welcome to FizzBuzz!");

// Create a loop that will run 100 times
for (var i = 1; i <= 100; i++) {
    
    var number = i;

    // Check if the number is a multiple of 3 and 5
    if (i % 3 == 0 && i % 5 == 0) {
        number = "FizzBuzz";
    }
    // Check if the number is a multiple of 3
    else if (i % 3 == 0) {
        number = "Fizz";
    }
    // Check if the number is a multiple of 5
    else if (i % 5 == 0) {
        number = "Buzz";
    }

    console.log(number);
    document.getElementById("result").innerHTML += number + "<br>";
}

