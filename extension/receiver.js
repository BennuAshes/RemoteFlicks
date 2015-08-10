(function() {
    var receiveUrl = "http://192.168.0.107:8080/remoteflix/get";
    
    // websocket/poll receive
    var poll = window.setInterval( function() {
        // document.querySelector(".player-play-pause").click();
        // gets the next queued action
        
        myFetch(receiveUrl).then(function(response) {
            console.log("GOT RESPONSE",response);
            if(response.success.length > 0)
                handleRequest(response.success);
            
            // Examine the text in the response  
            // also prevent security issues
            /*response.json().then(function(data) {                       
                if(data.success.length > 0) {
                    handleRequest(data.success);
                }
            });     */
        
            
            
        },function(fail) {
            console.log("FAIL:",fail);
        });
    },1000);

    function myFetch(url) {
        return $.getJSON(url);
        /*return $.ajax(url,{
            dataType: "jsonp",
            //type : 'get',
            //processData: false,
            crossDomain: true,
            contentType: "application/javascript",
            jsonpCallback: 'callback',
            success:function() {
                console.log("IT WOOOOORKS");
            }
        });/*.then(function(response) {
            // manually process json if necessary
        });*/
    }
    function handleRequest(requests) {
        
        console.log("yaaaay",requests);
        
        var pos = 0;
        
        var worker = window.setInterval(function() {
            if(!requests  || requests.length == 0) {
                clearInterval(worker);
            }
            var request = requests[pos];
            
            if(request == "startStop") {
                document.querySelector(".player-play-pause").click();
            }
            
            requests.splice(pos,1);
            pos++;
        },2000);
        
        // pause, next episode, sync to a central person (for shared watching)
        //document.querySelector(".player-play-pause").click();
        
        // next episode may differ depending on whether you're on
        // either the big one to the right or immitating the "controls"
    }
})();