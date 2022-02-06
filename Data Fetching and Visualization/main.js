var ctx = document.getElementById("myChart").getContext('2d');
let chartDataArray=[]
let chartEndPoints=[]
async function getChartData(){
   const chartData=await fetch('https://www.random.org/integers/?num=200&min=1&max=10&col=1&base=10&format=plain&rnd=new')
  .then(response => response.text())
  .then(data => {
      chartDataArray=data.split('\n')
      let elements=[...new Set(chartDataArray)].length 
      for(let i=1; i<elements; i++){
          chartEndPoints.push(sortArray(chartDataArray,i.toString()))
      }
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            datasets: [{
            label: 'Solution',
            data: chartEndPoints,
            backgroundColor: 'rgba(255, 99, 132, 1)',
            }]
        },
        options: {
            scales: {
            xAxes: [{
                display: false,
                barPercentage: 1.30,
            }, {
                display: true,
            }],
            yAxes: [{
                ticks: {
                beginAtZero:true
                }
            }]
            }
        }
        });
    }); 
}
function sortArray(array,value){
    var n = 0;
    for(i = 0; i < array.length; i++){
        if(array[i] == value){n++}
    }
    return n;
}
getChartData();

