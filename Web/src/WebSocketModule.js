'use strict';

function OpenWebSokcet() {
    var url = "ws://" + window.location.hostname + ":8888"
    var ws = new WebSocket(url,
        'corbin-websocket-echo-protocol');
    console.log(url)
    
    ws.onopen = function () {
    };

    ws.onmessage = function (evt) {
        console.log(evt)
    };

    ws.onclose = function () {
        
    };

    ws.onerror = function () {
        
    };
}

module.exports = OpenWebSokcet;

