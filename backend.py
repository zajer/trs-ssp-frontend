from flask import Flask, jsonify, make_response
from flask_cors import CORS, cross_origin
import os, json, re

app = Flask(__name__)
root_dir = "data"

def _load_json (relative_path_to_file):
    path_to_file = os.path.join(root_dir,relative_path_to_file)
    f = open(path_to_file)
    data = json.load(f)
    f.close()
    return data
def _num_of_states (relative_directory_with_states,regex):
    absolute_dir = os.path.join(root_dir,relative_directory_with_states)
    files = os.listdir(absolute_dir)
    result = 0
    for file in files:
        match = re.search(regex,file)
        if not ( match is None ):
            result = result + 1
    return result
def _scenario_overview_data(scenario_main_file):
    scenario = _load_json(scenario_main_file)
    result = {        
        'name': scenario['name'],
        'num_of_states': _num_of_states(scenario['directory'],scenario['states_regex']),
        'is_valid': scenario['is_scenario_valid']
    }
    return result
def _get_timeline(scenario_main_file):
    scenario = _load_json(scenario_main_file)
    result = { 
            'timeline_groups_dataset': _load_json(scenario['groups_filename']),
            'timeline_items_dataset': _load_json(scenario['timeline_filename'])
        }
    return result
def _get_ith_state(directory,regex,i):
    dir_absolute = os.path.join(root_dir,directory)
    files = os.listdir(dir_absolute)
    result = []
    for file in files:
        match = re.search(regex,file)
        if not ( match is None ):
            result.append(file)
    res_filename = result[i] 
    return _load_json(os.path.join(directory,res_filename))
def _scenario_state_data(scenario_main_file,i):
    scenario = _load_json(scenario_main_file)
    states_regex = scenario['states_regex']
    states_dir = scenario['directory']
    state_data = _get_ith_state(states_dir,states_regex,i)
    print(state_data)
    network_file = state_data['network_data_file']
    result = {        
        'network': _load_json(network_file),
        'ui_map': state_data['ui_map'],
        'sat_config': state_data['sat_config'],
    }
    return result
def _does_scenario_exist(scenario_main_file):
    path_to_file = os.path.join(root_dir,scenario_main_file)
    if scenario_main_file == "" or not os.path.isfile(path_to_file):
        return False
    else:
        return True
def _does_state_exist(scenario_main_file,state_number):
    scenario =_load_json(scenario_main_file)
    num_of_states = _num_of_states(scenario['directory'],scenario['states_regex'])
    if num_of_states < state_number or state_number < 0:
        return False
    else:
        return True  
@app.route('/single/<string:scenario_main_file>/<int:state_number>')
@cross_origin(supports_credentials=True)
def single_in_moment(scenario_main_file="",state_number=-1):
    if not _does_scenario_exist(scenario_main_file):
        message = jsonify(message='No such scenario')
        return make_response(message, 400)
    if not _does_state_exist(scenario_main_file,state_number):
        message = jsonify(message='This scenario does not have:'+str(state_number)+' states')
        return make_response(message, 404)
    return _scenario_state_data(scenario_main_file,state_number)
@app.route('/single/<string:scenario_main_file>/timeline')
@cross_origin(supports_credentials=True)
def single_timeline(scenario_main_file=""):
    scenario_validity_result = _does_scenario_exist(scenario_main_file)
    if not scenario_validity_result:
        message = jsonify(message='No such scenario')
        return make_response(message, 400)
    return _get_timeline(scenario_main_file)
@app.route('/single/<string:scenario_main_file>')
@cross_origin(supports_credentials=True)
def single_overview(scenario_main_file=""):
    if scenario_main_file == "":
        message = jsonify(message='Scenario name is missing')
        return make_response(message, 400);
    if not _does_scenario_exist(scenario_main_file):
        message = jsonify(message='No such scenario.')
        return make_response(message, 404)
    else :
        result = _scenario_overview_data(scenario_main_file)
        return result
def _list_scenarios():
    files = os.listdir(root_dir)
    keyword = 'trs-ssp-output.json'
    result = []
    for file in files:
        path_to_file = os.path.join(root_dir,file)
        if os.path.isfile(path_to_file):
            if keyword in file:
                result.append(file)
    return result
@app.route('/all/')
@cross_origin(supports_credentials=True)
def all():
    all_scenarios = _list_scenarios()
    resp = jsonify(all_scenarios)
    return resp
if __name__ == '__main__':
    app.debug= True 
    app.run()