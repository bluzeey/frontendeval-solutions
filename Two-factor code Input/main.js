let password=3456
let passwordString=password.toString()
let passwordParagraph=document.getElementById("password")
passwordParagraph.innerHTML=password
var container = document.getElementsByClassName("container")[0];
    container.onkeyup = function(e) {
    var target = e.srcElement || e.target;
    console.log(target)
    var myLength = target.value.length;
    if (myLength === 1) {
        var next = target;
        while (next = next.nextElementSibling) {
            if (next == null)
                break;
            if (next.tagName.toLowerCase() === "input") {
                next.focus();
                break;
            }
        }
    }
    // Move to previous field if empty (user pressed backspace)
    else if (myLength === 0) {
         var previous = target;
       // Move to previous field if backspace is pressed
        if (event.keyCode == 8) {
            previous = previous.previousElementSibling;
            if (previous != null) {
                if (previous.tagName.toLowerCase() === "input") {
                    previous.focus();
                }
            }
        } else {
            while (previous = previous.previousElementSibling) {
                if (previous == null)
                    break;
                if (previous.tagName.toLowerCase() === "input") {
                    var mLength = parseInt(previous.attributes["maxlength"].value, 10);
                    var pMyLength = previous.value.length;
                    // Move to previous field if it does not have required length
                    if (mLength == pMyLength) {
                        break;
                    } else {
                        previous.focus();
                        break;
                    }
                }
            }
        }
    }
}
function preventNonNumericalInput(e) {
  e = e || window.event;
  var charCode = (typeof e.which == "undefined") ? e.keyCode : e.which;
  var charStr = String.fromCharCode(charCode);

  if (!charStr.match(/^[0-9]+$/))
    e.preventDefault();
}
function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}
function myFunction(){
    event.preventDefault()
    let forminputs=container.children
    var arr = Array.from(forminputs);
    let combination=[]
    arr.map((input)=>combination.push(input.value))
    console.log(combination)
    let myFunc = num => Number(num);
    let intArr = Array.from(passwordString);
    console.log(intArr)
    if(arrayEquals(intArr,combination)){
        document.querySelector("#Checkpassword").innerText="Password matched"
        console.log("Password Matched")
    }else{
        document.querySelector("#Checkpassword").innerText="Password didn't match"
        console.log("Password didn't match")
    }
}