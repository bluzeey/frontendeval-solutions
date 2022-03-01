let jobIds
let detailofJobIds=[]
let showMoreButton=document.getElementById("showMore")
let jobs=document.getElementById('jobs')
let index=6
async function getJobIds(){
    await fetch('https://hacker-news.firebaseio.com/v0/jobstories.json').then(res => res.json()).then(data=>jobIds=data)
    for(let i=0; i<8; i++){
        await fetch(`https://hacker-news.firebaseio.com/v0/item/${jobIds[i]}.json`).then(res => res.json()).then(data=>response=data)
        let jobDate=new Date(response.time)
        let publishedDate=jobDate.getDate()+"/"+(jobDate.getMonth()+1)+"/"+jobDate.getFullYear()
        jobs.innerHTML+=`
                        <div style="border:1px black solid;text-align:center;margin:1rem">
                        <p>${response.title}</p>
                        <p>${publishedDate}</p>
                        </div>`
        console.log(response)
    }
}
async function showMoreJobs(){
    await fetch('https://hacker-news.firebaseio.com/v0/jobstories.json').then(res => res.json()).then(data=>jobIds=data)
    for(let i=index; i<index+6; i++){
        await fetch(`https://hacker-news.firebaseio.com/v0/item/${jobIds[i]}.json`).then(res => res.json()).then(data=>response=data)
        let jobDate=new Date(response.time)
        let publishedDate=jobDate.getDate()+"/"+(jobDate.getMonth()+1)+"/"+jobDate.getFullYear()
        jobs.innerHTML+=`
                        <div style="border:1px black solid;text-align:center;margin:1rem">
                        <p>${response.title}</p>
                        <p>${publishedDate}</p>
                        </div>`
    }
    index=index+6
}
getJobIds()


