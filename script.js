// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }


// Strings for the available characters

var	upperCase	=	["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var	lowerCase	=	["a","b","c","d","e","f","t","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var	numbers =	[0,1,2,3,4,5,6,7,8,9];

var	specialChar	= ["!","#","$","%","&","'","(",")","*","+",",","-",".","/","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];


// Main function that will generate the password

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    pwd = generatePassword();
    document.getElementById("password").placeholder = pwd;
});

// Start function to generate password
function generatePassword() {
    // Asks for user input
    input = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    // First if statement for user validation 
    if (!input) {
        alert("This needs a value");
    } else if (input < 8 || input > 128) {
        // Validates user input
        // Start user input prompts
        alert("You must choose between 8 and 128");
        generatePassword();


    } else {
        // Continues once user input is validated
        confirmNumber = confirm("Will this contain numbers?");
        confirmSpecial = confirm("Will this contain special characters?");
        confirmUppercase = confirm("Will this contain Uppercase letters?");
        confirmLowercase = confirm("Will this contain Lowercase letters?");
    };

    // Else if for 4 negative options
    if (!confirmSpecial && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose at least one option!");
        generatePassword();

    }
    // First if statement that uses user input prompts to determine choices
    // Else if for 4 positive options
    else if (confirmSpecial && confirmNumber && confirmUppercase && confirmLowercase) {

        choices = specialChar.concat(numbers, lowerCase, upperCase);
    }
    // Else if for 3 positive options
    else if (confirmSpecial && confirmNumber && confirmUppercase) {
        choices = specialChar.concat(numbers, upperCase);
    }
    else if (confirmSpecial && confirmNumber && confirmLowercase) {
        choices = specialChar.concat(numbers, lowerCase);
    }
    else if (confirmSpecial && confirmLowercase && confirmUppercase) {
        choices = specialChar.concat(lowerCase, upperCase);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = numbers.concat(lowerCase, upperCase);
    }
    // Else if for 2 positive options 
    else if (confirmSpecial && confirmNumber) {
        choices = specialChar.concat(numbers);

    } else if (confirmSpecial && confirmLowercase) {
        choices = specialChar.concat(lowerCase);

    } else if (confirmSpecial && confirmUppercase) {
        choices = specialChar.concat(upperCase);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = lowerCase.concat(numbers);

    } else if(confirmLowercase && confirmUppercase) {
        choices = lowerCase.concat(upperCase);

    } else if (confirmNumber && confirmUppercase) {
        choices = numbers.concat(upperCase);
    }
    // Else if for 1 positive option
    else if (confirmSpecial) {
        choices = specialChar;
    }
    else if (confirmNumber) {
        choices = numbers;
    }
    else if (confirmLowercase) {
        choices = lowerCase;
    }else if (confirmUppercase) {
        choices = upperCase;
    };

    // password variable is an array placeholder for user generated amount of length
    var password = [];

    // Start random selection variables:
    // Random selection for all variables: 
    for (var i = 0; i < input; i++) {
        var pickedChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickedChoices);
    }
    // This joins the password array and converts it to a string
    var pwd = password.join("");
    UserInput(pwd);
    return pwd;
}
// This puts the password value into the textbox
// Changed function input to use textcontent
function UserInput(pwd) {
    document.getElementById("password").textContent = pwd;
    

}