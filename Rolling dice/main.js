function addDices(){
    event.preventDefault();
    let totaldices=document.getElementById("dices").value
    let array=Array.from({length: totaldices}, () => Math.floor((Math.random() * 6)+1));
    document.getElementById("diceslayout").innerHTML=" "
    array.map(d=>{
        if(d===1){
            document.getElementById("diceslayout").innerHTML+=
            `<div class="first-face">
               <span class="pip"></span>
            </div>`
        }else if(d===2){
            document.getElementById("diceslayout").innerHTML+=
            `<div class="second-face">
            <span class="pip"></span>
            <span class="pip"></span>
            </div>`
        }else if(d===3){
             document.getElementById("diceslayout").innerHTML+=
             `<div class="third-face">
                <span class="pip"></span>
                <span class="pip"></span>
                <span class="pip"></span>
                </div>`
        }else if(d===4){
             document.getElementById("diceslayout").innerHTML+=
             `<div class="fourth-face">
                <div class="column">
                    <span class="pip"></span>
                    <span class="pip"></span>
                </div>
                <div class="column">
                    <span class="pip"></span>
                    <span class="pip"></span>
                </div>
                </div>`
        }else if (d===5){
              document.getElementById("diceslayout").innerHTML+=
              `<div class="fifth-face">
                <div class="column">
                    <span class="pip"></span>
                    <span class="pip"></span>
                </div>
                <div class="column">
                    <span class="pip"></span>
                </div>
                <div class="column">
                    <span class="pip"></span>
                    <span class="pip"></span>
                </div>
                </div>`
        }else{
                document.getElementById("diceslayout").innerHTML+=
                `<div class="sixth-face">
                <div class="column">
                    <span class="pip"></span>
                    <span class="pip"></span>
                    <span class="pip"></span>
                </div>
                <div class="column">
                    <span class="pip"></span>
                    <span class="pip"></span>
                    <span class="pip"></span>
                </div>
                </div>`
        }
    })
}