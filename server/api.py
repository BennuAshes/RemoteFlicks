from flask import Flask
from flask import Response
from flask.ext.sqlalchemy import SQLAlchemy
from flask import jsonify
from functools import wraps
from flask import request, current_app


import os
def jsonp(func):
    """Wraps JSONified output for JSONP requests."""
    @wraps(func)
    def decorated_function(*args, **kwargs):
        callback = request.args.get('callback', False)
        if callback:
            data = str(func(*args, **kwargs).data)
            content = str(callback) + '(' + data + ')'
            mimetype = 'application/javascript'
            return current_app.response_class(content, mimetype=mimetype)
        else:
            return func(*args, **kwargs)
    return decorated_function

class FlixResponse:
    @staticmethod
    # data CANNOT be a list
    def success(data):
        w = {"success":data}
        return jsonify(w)
        # return Response(response=jsonData,status=200,mimetype="text/html")
        

class RemoteFlix:
    def __init__(self):
        self.requests = ["startStop"]
    def add(self,request):
        self.requests.append(request)
    def getAll(self):
        #print("getting all - "+len(self.requests))
        return self.requests
    def clear(self):
        self.requests = []
        
api = RemoteFlix()

app = Flask(__name__)
app.debug = True
#app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://demo:cygwerd1@localhost:5432/demo' # os.environ('DATABASE_URL') # 
db = SQLAlchemy(app)

baseAPI = "/remoteflix"

'''@app.route("/")
def index():
    return "Hello Index"
'''

@app.route(baseAPI + "/get")
@jsonp
def getAll(): 
    requests = api.getAll()
    api.clear()
    return FlixResponse.success(requests)    

  
@app.route(baseAPI + "/add/<params>")
@jsonp
def add(params):    
    api.add(params)
    return "added"

if __name__ == "__main__":
    app.run(host="192.168.0.107",port=8080,threaded=True)
