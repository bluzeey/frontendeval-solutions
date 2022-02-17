async function getValue(){
    event.preventDefault();
    let value=document.getElementById("value").value
    let currency=document.getElementById("currency").value
    currencyString=currency.toString()
    console.log(currencyString)
    await fetch(`https://api.frontendeval.com/fake/crypto/${currencyString}`).then(response => response.json()).then(data => console.log(data))
}