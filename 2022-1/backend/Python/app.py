# import the Flask class from the flask module
from crypt import methods
from flask import Flask, render_template,request, jsonify

# create the application object
app = Flask(__name__)

products = [
    {"id": 1, "name": "producto 1", "price": 2000},
    {"id": 2, "name": "producto 2", "price": 1000},
    {"id": 3, "name": "producto 3", "price": 3000},
]

# use decorators to link the function to a url
@app.route('/')
def home():
    return jsonify(products)  # return a string

@app.route('/login', methods=['POST','GET'])
def login():
    if request.method=='POST':
        user=request.form["username"]
        password=request.form["password"]
        return jsonify([{"message":"datos correctos","username":user}])

# start the server with the 'run()' method
if __name__ == '__main__':
    app.run(debug=True)