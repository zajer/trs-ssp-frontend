var m = require("mithril")
var DetailedScenario = require("../models/DetailedScenario")

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
			m(".pure-button", "Previous state"),
			m(".pure-button", "Next state")
		]
    }
}