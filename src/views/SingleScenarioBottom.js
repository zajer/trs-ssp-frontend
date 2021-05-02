var m = require("mithril")
var DetailedScenario = require("../models/DetailedScenario")

function _isNextStateAvailable() {
	return DetailedScenario.current_state < DetailedScenario.num_of_states - 1
}
function _isEarlierStateAvailable(){
	return DetailedScenario.current_state > 0
}
function _classesForChangeStateButton(fun){
	var result = "pure-button"
	if ( ! fun() )
		result = result + " pure-button-disabled"
	else 
		result = result + " pure-button-primary"
	return result;
}

module.exports = {
    view: function() {
        return [
			m(".pure-button", {
                onclick: function () {
					DetailedScenario.reset();
					location.hash="#!/all";
				},
            }, "Back to scenario selection"),
			m(".pure-button", {
                onclick: function () {
					location.hash="#!/single/"+DetailedScenario.scenario_main_file;
				}
			}, "Back to selected scenario overview "),
			m("", { 
				class: _classesForChangeStateButton(_isEarlierStateAvailable), 
				onclick: function() { 
					DetailedScenario.current_state--; 
					location.hash="#!/single/"+DetailedScenario.scenario_main_file+"/"+DetailedScenario.current_state; 
				}					
			} ,"Previous state"),
			m("", {
				class: _classesForChangeStateButton(_isNextStateAvailable),
				onclick: function() {
					DetailedScenario.current_state++;
					location.hash="#!/single/"+DetailedScenario.scenario_main_file+"/"+DetailedScenario.current_state;
				}
			} ,"Next state")
		]
    }
}