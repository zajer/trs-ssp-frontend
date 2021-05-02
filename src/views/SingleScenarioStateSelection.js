var m = require("mithril")
var DetailedScenario = require("../models/DetailedScenario")

module.exports = {
    view: function() {
        return m("form", [
			m(".pure-g", [
				m(".pure-u-1-1",m("h1", "Provide a moment of scenario at which you want to examine its state.")),
				m(".pure-u-1-1",m("h2", "(Accepted values range from 0 to "+(DetailedScenario.num_of_states-1)+")")),
				m(".pure-u-1-1", [
					m("label", "Moment: "),
					m("input.input[type=number][placeholder=First name]", {
						oninput: function (e) { 
							var new_val = -1;
							if (e.target.value < DetailedScenario.num_of_states && e.target.value > 0 ) 
								new_val = e.target.value;
							else if (e.target.value >= DetailedScenario.num_of_states)
								new_val = DetailedScenario.num_of_states-1;
							else
								new_val = 0;
							DetailedScenario.current_state = new_val;
						},
						value: DetailedScenario.current_state
					}),
					m(".pure-button[type=submit]", 
						{ 
							onclick:function (e) { 
								if (DetailedScenario.is_current_state_valid())
									location.hash="#!/single/"+DetailedScenario.scenario_main_file+"/"+DetailedScenario.current_state;
									
							} 
						},
						"Go to the selected moment"
					)
				]),
				m(".pure-u-1-1", m("h3", "Output message (if any):")),
				m(".pure-u-1-1", m("label", DetailedScenario.output_message)),
				m(".pure-u-1-1", m("h3", "This scenario main file name:")),
				m(".pure-u-1-1", m("label", DetailedScenario.scenario_main_file))
				
			])
		])
    }
}