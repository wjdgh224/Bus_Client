const ctx = document.getElementById('myChart'); //.getContext("2d")


var graphData =  {
  type: 'line',
  data: {
    labels: ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 0, 0, 1)',
      ],
      borderColor : [	
        'rgba(255, 0, 0, 0.1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: false,
    scales: {
        yAxes: [{
            ticks: {
                suggestedMin : 0,
                suggestedMax : 50,
                stepSize : 1,
                fontSize : 14,
            }
        }]
    }
}
}

var myChart = new Chart(ctx, graphData);


var socket = new WebSocket('ws://localhost:8000/ws/graph/');

socket.onmessage = function(e) {  
    var djangoData = JSON.parse(e.data);
    console.log(djangoData);

    var newGraphData = graphData.data.datasets[0].data;
  
    if (newGraphData.length == 13) {
      graphData.data.datasets[0].data = [0];
      myChart = new Chart(ctx, graphData);
    }

    //newGraphData.shift();
    newGraphData.push(djangoData.value);

    graphData.data.datasets[0].data = newGraphData;
    myChart.update();

    document.querySelector('#app').innerHTML = djangoData.cong;
    document.querySelector('#hour').innerHTML = djangoData.hour;
}