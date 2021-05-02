var m = require("mithril")
var DetailedScenario = require("../models/DetailedScenario")
var midLayout = require("./SingleScenarioMidLayout")
var SSStateBigraph = require("./SingleScenarioStateBigraph")
var SSStateInfo = require("./SingleScenarioStateInfo")

var _downloadedState = -1;

var midExtended = {
		onupdate: function() {
			console.log("update");
			if ( DetailedScenario.current_state !== _downloadedState ){
				_downloadedState = DetailedScenario.current_state;
				DetailedScenario.load_state_data();
				
			}
		},
		oninit: function() {
			DetailedScenario.load_state_data();
			_downloadedState = DetailedScenario.current_state;
		},
		view: midLayout.view,
	}

module.exports = midExtended