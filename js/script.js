// Alert to welcome user to Loop Lab 
alert("Welcome to FizzBuzz!");

// reload the page on click header link 
const myLink = document.getElementById('myLink');

myLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default behavior of following the link
    location.reload(); // Reload the page
    alert("Play with FizzBuzz!");
});

// // function to run when button is clicked
document.getElementById("btn").addEventListener("click", function() {
    
    const cont = document.querySelector(".container");

    // Create a loop that will run 100 times
    for (var i = 1; i <= 100; i++) {
        
        let myArray = [i];
        console.log("Value is" , myArray);

        // Check if the number is a multiple of 3 and 5
        if (i % 3 == 0 && i % 5 == 0) {
            cont.innerHTML += `<div class="myBox myFirstBg">fizzbuzz</div>`;
            console.log("This number is fizzbuzz");
        }
        // Check if the number is a multiple of 3
        else if (i % 3 == 0) {
            cont.innerHTML += `<div class="myBox mySecondBg">fizz</div>`;
            console.log("This number is fizz");
        }
        // Check if the number is a multiple of 5
        else if (i % 5 == 0) {
            cont.innerHTML += `<div class="myBox myThirdBg">buzz</div>`;
            console.log("This number is buzz");
        } 
        // If the number is not a multiple of 3 or 5
        else {
            cont.innerHTML += `<div class="myBox myFourthBg">${i}</div>`;
            console.log("This number is",i);
        }
    }}
);

//  function cancel when button is clicked 
document.getElementById("btn2").addEventListener("click", function() {

    const cont = document.querySelector(".container");
    cont.innerHTML = "";
});


