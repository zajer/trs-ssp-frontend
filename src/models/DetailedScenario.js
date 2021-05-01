var m = require("mithril")
var config = require("../Config")

var DetailedScenario = {
	is_valid: false,
	name: "init value",
	scenario_main_file: "",
	num_of_states: -1,
	output_msg: "",
	timeline_items: [],
	timeline_groups: [],
	timeline_hash: "",
	current_state: -1,
	current_state_network_nodes: [],
	current_state_network_edges: [],
	current_state_ui_map: [],
	current_state_sat_config: [],
	reset: function() {
		console.log("reset");
		DetailedScenario.is_valid = false;
		DetailedScenario.name = "init value";
		DetailedScenario.scenario_main_file = "";
		DetailedScenario.num_of_states = -1;
		DetailedScenario.output_msg = "";
		DetailedScenario.timeline_items = [];
		DetailedScenario.timeline_groups = [];
		DetailedScenario.timeline_hash = "";
		DetailedScenario.current_state = -1;
		DetailedScenario.current_state_network_nodes = [];
		DetailedScenario.current_state_network_edges = [];
		DetailedScenario.current_state_ui_map = [];
		DetailedScenario.current_state_sat_config = [];
	},
    load_overview: function(name) {
        return m.request({
            method: "GET",
            url: config.addr_single_overview(name)
        })
        .then(function(result) {
            DetailedScenario.is_valid = result.is_valid;
			DetailedScenario.name = result.name;
			DetailedScenario.num_of_states = result.num_of_states;
			DetailedScenario.output_msg = result.message;
        })
        .catch(function(e) {
                console.log("Could not retrieve details about specified scenario");
				console.log("Returned error:"+e);
        })
    },
	load_timeline: function(name) {
		return m.request({
            method: "GET",
            url: config.addr_single_timeline(name,DetailedScenario.timeline_hash)
        })
        .then(function(result) {
			if (!result.hasOwnProperty('message')) {
				DetailedScenario.timeline_hash = result.hash;
				DetailedScenario.timeline_items = result.timeline_items_dataset;
				DetailedScenario.timeline_groups = result.timeline_groups_dataset;
			}
			else
				console.log("timeline has not changed since the last check")
        })
        .catch(function(e) {
                console.log("Could not retrieve timeline of specified scenario");
				console.log("Returned error:"+e);
        })
	}
}

module.exports = DetailedScenario