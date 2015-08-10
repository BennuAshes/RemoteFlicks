# RemoteFlicks
an experiment to control a streaming video player running in a browser from a site or phone app

## Setup

### Extension
Update the URL for the video streaming service you are using in the manifest.json.

### Client
1) follow ionic setup instructions
2) fill in app ID in ionic.project if using Ionic View

### Server
Requires Flask and Python 3.x. Debug mode is active by default. Also if you are not on Windows you may be able to disable threaded=True


## TODO:
* more controls - pause, next (now or "end phase" of an episode), volume, fullscreen, episode select/view
* Flask lags on Windows. I had to set threaded=True but I suspect it's just hammering my CPU even more in its potentially inefficient way. Something to look into
* modularize the controls, so different players can be configured - for instance, by tweaking the class that click() is called on, you could easily change from a video player to common video/music streamers (some kind of config to store the various options?)
