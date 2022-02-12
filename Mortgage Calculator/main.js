function calculate(){
    event.preventDefault();
    let principal=document.getElementById("principal").value
    let interest=document.getElementById("interest").value/100
    let length=document.getElementById("length").value
    let monthlyMortgage=document.getElementById("monthlyInstallment")
    console.log(principal,interest, length)
    let monthlyInterestRate=interest/12
    let numerator=monthlyInterestRate*(1+monthlyInterestRate)**(length*12)
    let denominator=((1+monthlyInterestRate)**(length*12)) - 1
    let fraction=numerator/denominator
    let monthlyInstallment=Math.trunc(principal*fraction)
    monthlyMortgage.innerText+=`Your monthly mortgage payment will be $${monthlyInstallment}`
}