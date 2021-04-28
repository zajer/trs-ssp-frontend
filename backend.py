from flask import Flask, jsonify, make_response
from flask_cors import CORS, cross_origin
import os

app = Flask(__name__)
root_dir = "data"

@app.route('/chopstick/')
@app.route('/chopstick/<int:chopstick_id>')
def chopstick(chopstick_id=None):
    if not chopstick_id:
        message = jsonify(message='"chopstick_id" missing')
        return make_response(message, 400)
    chopstick = {
        'id' : chopstick_id,
        'color': 'bamboo',
        'left_handed': True
    }
    return jsonify(chopstick)

def list_scenarios():
    files = os.listdir(root_dir)
    keyword = 'trs-ssp-output.json'
    result = []
    for file in files:
        path_to_file = os.path.join(root_dir,file)
        if os.path.isfile(path_to_file):
            if keyword in file:
                result.append(file)
    return result

@app.route('/scenarios/')
@cross_origin(supports_credentials=True)
def scenarios():
    all_scenarios = list_scenarios()
    resp = jsonify(all_scenarios)
    return resp

if __name__ == '__main__':
    app.debug= True 
    app.run()