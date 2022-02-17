let amount=0
async function getValue(){
    event?.preventDefault()
    value=document.getElementById("value").value
    currency=document.getElementById("currency").value
    currencyString=currency.toString()
    await fetch(`https://api.frontendeval.com/fake/crypto/${currencyString}`).then(response => response.json()).then(data =>amount=data)
    console.log(amount.value,value)
    document.getElementById("wuc").innerHTML=`${value*amount.value} WUC`
    localStorage.setItem("previousValue", value*amount.value);
    return value*amount.value
}
async function updateValue(){
    let prevValue=localStorage.getItem("previousValue")
    let currentValue=await getValue()
    console.log(prevValue,currentValue)
    let difference=currentValue-prevValue
    console.log(difference)
    if (difference<0){
        document.getElementById('diff').style.color="red"
        document.getElementById('diff').innerHTML=difference
    }else{
        document.getElementById('diff').style.color="green"
        document.getElementById('diff').innerHTML=difference
    }
    
}
setTimeout(updateValue,10000)
