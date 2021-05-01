var m = require("mithril")
var DetailedScenario = require("../models/DetailedScenario")

module.exports = {
    view: function() {
        return [
			m(".pure-button", {
                onclick: function () {
					console.log("back to the base");
					DetailedScenario.reset();
					location.hash="#!/all";
				},
            }, "Back to scenario selection"),
			m(".pure-button", {
                onclick: function () {
					console.log("back to overview");
					location.hash="#!/single/"+DetailedScenario.scenario_main_file;
				}
			}, "Back to selected scenario overview "),
			m(".pure-button", "Previous state"),
			m(".pure-button", "Next state")
		]
    }
}