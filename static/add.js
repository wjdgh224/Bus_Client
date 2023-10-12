
let socket = new WebSocket('ws://localhost:8000/ws/graph/');

socket.onmessage = function(e) {
    var pageUrl = window.location.href;
    var last = pageUrl.substring(pageUrl.length-4);
    
    console.log("socket", pageUrl, last);


    let djangoData = JSON.parse(e.data);
    console.log(djangoData);

    if (last == "bus2") {
      document.querySelector('#add2').innerHTML = djangoData.add2;
    } else {
      document.querySelector('#add1').innerHTML = djangoData.add1;
    }
}
