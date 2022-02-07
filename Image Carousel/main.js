async function getImages(){
    let Images= await fetch('https://www.reddit.com/r/aww/top/.json?t=all').then(response => response.json()).then(data=>{
    let ImagesArray=[]
    let ImagesData=data.data.children
    console.log(ImagesData)
    ImagesData.map(image =>{
        if(image.data.url_overridden_by_dest.includes('jpg')){
            ImagesArray.push(image?.data?.url_overridden_by_dest)
        }
    })
    const slides = document.querySelector(".slides");
    for(let i=0; i<ImagesArray.length; i++){
        var img = document.createElement('img');
        img.classList.add("slide")
        img.src = ImagesArray[i]
        console.log(img)
        slides.appendChild(img);
    }
    const delay = 3000; //ms

    
    const slidesCount = slides.childElementCount;
    const maxLeft = (slidesCount - 1) * 100 * -1;

    let current = 0;

    function changeSlide(next = true) {
    if (next) {
        current += current > maxLeft ? -100 : current * -1;
    } else {
        current = current < 0 ? current + 100 : maxLeft;
    }

    slides.style.left = current + "%";
    }

    let autoChange = setInterval(changeSlide, delay);
    const restart = function() {
    clearInterval(autoChange);
    autoChange = setInterval(changeSlide, delay);
    };

    // Controls
    document.querySelector(".next-slide").addEventListener("click", function() {
    changeSlide();
    restart();
    });

    document.querySelector(".prev-slide").addEventListener("click", function() {
    changeSlide(false);
    restart();
    });

    console.log(slides.innerHTML)
  })
}
getImages()
