let allDataList = []

function allCategoryObject() {
    const map = allDataList.reduce((result, item) => {
        result[item.category] = result[item.category] || []
        result[item.category].push(item)
        return result
    }, {})

    return map
}

function OpenWebSokcet() {
    var url = "ws://" + window.location.hostname + ":8888"
    var ws = new WebSocket(url,
        'corbin-websocket-echo-protocol');
    console.log(url)

    // $.ajax({
    //     type: "GET",
    //     url: "WebSocketConfig.json",
    //     success: function(data) {
    //         console.log(data);
    //     }
    // })
    
    ws.onopen = function () {
    };

    ws.onmessage = function (evt) {
        const receiveList = JSON.parse(evt.data).value
        allDataList.push.apply(allDataList, receiveList);
        allCategoryObject()
        // console.log(allDataMap["func_protocol_business_log"])


        /*
        func_protocol_log  日志
        im_log IM
        func_protocol_business_log 业务埋点
        tracing_analysis_log 链路埋点
        [
            {
                "category" : "func_protocol_log",
                "tag" : "",
                "time" : "",
                "name" : "",
                "detail" : {

                }
            }, 
            {
                "category" : "func_protocol_log",
                "tag" : "",
                "time" : "",
                "name" : "",
                "detail" : {

                }
            }
        ]
        {
            "func_protocol_log" : {

            },
            "func_protocol_business_log" : {

            },
            "tracing_analysis_log" : {

            },
            "im_log" : {

            }
        }
        */

        // broadcast.fire('login_success')

    };

    ws.onclose = function () {
        
    };

    ws.onerror = function () {
        
    };
}

module.exports = OpenWebSokcet;

