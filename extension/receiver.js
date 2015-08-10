(function() {
    var receiveUrl = "http://192.168.0.107:8080/remoteflix/get";
    
    // websocket/poll receive
    var poll = window.setInterval( function() {
        myFetch(receiveUrl).then(function(response) {
            console.log("GOT RESPONSE",response);
            if(response.success.length > 0)
                handleRequest(response.success);
        },function(fail) {
            console.log("FAIL:",fail);
        });
    },1000);

    function myFetch(url) {
        return $.getJSON(url);
    }
    
        
    // pause, next episode, sync to a central person (for shared watching)
    //document.querySelector(".player-play-pause").click();
    
    // next episode may differ depending on whether you're on
    // either the big one to the right or immitating the "controls"
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
    }
})();
