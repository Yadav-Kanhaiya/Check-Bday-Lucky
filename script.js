const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
let checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");

function compareValues(sum, luckyNumber){
    if(sum%luckyNumber===0){
         outputBox.innerText ="Your Bithday is lucky🎂";
     }else{
         outputBox.innerText ="Your Birthday is not lucky😢";
     }
}


function checkBirthdateIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if(luckyNumber.value<0){
        outputBox.innerText = "Please enter positive number 🤷";
    }
    else if(sum&&dob)
    compareValues(sum, luckyNumber.value)
    else
    outputBox.innerText = "Please enter both the fields 🤷";
}


function calculateSum(dob){
    dob = dob.replaceAll("-","");
    let sum = 0;
    for (let index = 0; index < dob.length; index++){
        sum = sum + Number(dob.charAt(index));
    } 

    return sum;
}
checkNumberButton = addEventListener("click", checkBirthdateIsLucky)





