const passwordLength = 12;
const containUpperCase = true
const containLowerCase = true
const includeNumber = true;
const includeSymbol = true;

function generatePassword(length, includeNumber, includeSymbol, containLowerCase, containUpperCase){
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lowercase = "abcdefghijklmnopqrstuvwxyz"
    const numbers = "0123456789"
    const specialchars = "!@#$%^&*()_-+="

    let allowedchars = ""
    let password = ""

    allowedchars += containUpperCase? uppercase: "";
    allowedchars += containLowerCase? lowercase: "";
    allowedchars += includeNumber? numbers: "";
    allowedchars += includeSymbol? specialchars: "";

    //console.log(allowedchars)

    if(length <= 0){
        console.log(`Length should be atleast 1`)
    }
    if(allowedchars.length === 0){
        console.log(`At least one set of character should be used`)
    }

    for(let i = 0; i <= length; i++){
        const randomIndex = Math.floor(Math.random()*allowedchars.length)
        password += allowedchars[randomIndex];
    }

    return password;
}

const password = generatePassword(passwordLength, includeNumber, includeSymbol, containLowerCase, containUpperCase);


console.log(`Generated password: ${password}`)