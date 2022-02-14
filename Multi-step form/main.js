let currentPage=0
let NameForm=document.getElementById("NameForm")
let EmailForm=document.getElementById("EmailForm")
let DateForm=document.getElementById("DateForm")
let PasswordForm=document.getElementById("PasswordForm")
let SuccessForm=document.getElementById("SuccessForm")
EmailForm.style.display="none"
PasswordForm.style.display="none"
DateForm.style.display="none"
SuccessForm.style.display="none"
function changePage(){
     event.preventDefault()
     currentPage++;
     if(currentPage ===1){
         NameForm.style.display="none"
         EmailForm.style.display="block"
     }else if(currentPage ===2){
         EmailForm.style.display="none"
         DateForm.style.display="block"
     }else if (currentPage ===3){
         DateForm.style.display="none"
         PasswordForm.style.display="block"
     }
}

function previousPage(){
    event.preventDefault();
    currentPage--;
    if(currentPage === 0){
        NameForm.style.display="block"
        EmailForm.style.display="none"
        DateForm.style.display="none"
        PasswordForm.style.display="none"
    }
    else if(currentPage ===1){
         NameForm.style.display="none"
         EmailForm.style.display="block"
         DateForm.style.display="none"
         PasswordForm.style.display="none"
     }else if(currentPage ===2){
         EmailForm.style.display="none"
         DateForm.style.display="block"
         PasswordForm.style.display="none"
     }else if (currentPage ===3){
         DateForm.style.display="none"
         PasswordForm.style.display="block"
         EmailForm.style.display="none"
     }
}

function showSuccess() {
    event.preventDefault()
    EmailForm.style.display="none"
    PasswordForm.style.display="none"
    DateForm.style.display="none"
    SuccessForm.style.display="block"
}