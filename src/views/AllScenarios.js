var m = require("mithril")
var KnownScenario = require("../models/KnownScenario")
var DetailedScenario = require("../models/DetailedScenario")
function _colorFromBool(b){
	if (b)
		return 'rgb(28,184,65)';
	else
		return 'rgb(202,60,60)';
}

module.exports = {
	oninit: KnownScenario.loadList,
    view: function() {
        return m(".pure-g", KnownScenario.list.map(function(scenario) {
            return m(".pure-u-6-24 .pure-u-xl-3-24 pad-1", 
				m(".pure-button .custom-pure-button",{
					style : { background: _colorFromBool(scenario.is_scenario_valid) },
					onclick: function () { 
						DetailedScenario.scenario_main_file = scenario.main_file;
						location.hash="#!/single/"+scenario.main_file;
					},
				}, scenario.scenario_name )
			)
		}))
    }
}