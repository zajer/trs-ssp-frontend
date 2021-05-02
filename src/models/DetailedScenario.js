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
    load_overview: function() {
		console.log("getting overview");
        return m.request({
            method: "GET",
            url: config.addr_single_overview(DetailedScenario.scenario_main_file)
        })
        .then(function(result) {
			console.log("retrieved overview");
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
	load_state_data: function() {
        return m.request({
            method: "GET",
            url: config.addr_single_moment(DetailedScenario.scenario_main_file,DetailedScenario.current_state)
        })
        .then(function(result) {
            DetailedScenario.current_state_network_nodes = result.network.nodes;
			DetailedScenario.current_state_network_edges = result.network.edges;
			DetailedScenario.current_state_sat_config = result.sat_config
			DetailedScenario.current_state_ui_map = result.ui_map
        })
        .catch(function(e) {
                console.log("Could not retrieve data about specified moment in the scenario");
				console.log("Returned error:"+e);
        })
    },
	load_timeline: function() {
		return m.request({
            method: "GET",
            url: config.addr_single_timeline(DetailedScenario.scenario_main_file,DetailedScenario.timeline_hash)
        })
        .then(function(result) {
			console.log("retrieved timeline");
			console.log(result);
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
	},
	is_current_state_valid(){
		console.log("csv");
		if (DetailedScenario.current_state >= 0 && DetailedScenario.current_state < DetailedScenario.num_of_states)
			return true;
		else
			return false;
	}
}

module.exports = DetailedScenario