function SumCalculator(){
    let firstnumber = document.getElementById("number1").value;
    let secondnumber = document.getElementById("number2").value;
    let sum = Number(firstnumber) + Number(secondnumber);
    alert("Your number is: " + sum)
}

function SwitchMode(){
    let element = document.body;
    let button = document.getElementById("dmbutton");
        element.classList.toggle("dark-mode");
    if (button.value == "Dark mode"){
        button.value="Light mode"
    } else {
        button.value="Dark mode"
    }
}

function Calculate(){
    let firstnumber = document.getElementById("number1").value;
    let secondnumber = document.getElementById("number2").value;
    let operation = document.getElementById("Operation").value;
    firstnumber = parseFloat(firstnumber);
    secondnumber = parseFloat(secondnumber);
    if (operation == "+"){
        result = firstnumber + secondnumber
    } else if (operation == "-"){
        result = firstnumber - secondnumber
    } else if (operation == "x"){
        result = firstnumber * secondnumber
    } else if (operation == "/"){
        result = firstnumber / secondnumber
    } else {
        result = "Invalid Input"
    }
    document.getElementById("result").value = result;
}
