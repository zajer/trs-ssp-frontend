var m = require("mithril")
var KnownScenario = require("../models/KnownScenario")
var extract_name = function (name) {
	return name.replace("_trs-ssp-output.json", "");
}
module.exports = {
	oninit: KnownScenario.loadList,
    view: function() {
        return m(".pure-g boxed", KnownScenario.list.map(function(scenario) {
            return m(".pure-u-4-24 pad-1", {
                onclick: function () { 
					location.hash="#!/single/"+scenario
				},
            }, "to "+extract_name(scenario) )
        }))
    }
}