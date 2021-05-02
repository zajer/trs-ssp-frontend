var m = require("mithril")
var DetailedScenario = require("../models/DetailedScenario")

function colorFromBool(b){
	if (b)
		return 'green';
	else
		return 'red';
}

module.exports = {
    view: function() {
		console.log("ssbi-view");
        return m("table", {class:"pure-table pure-table-bordered"}, [
			m("thead", [
					m("tr", [
						m("th", "Selected scenario"),
						m("th", "")
				])
			]),
			m("tr", [
				m("td","Scenario name"),
				m("td",DetailedScenario.name)
			]),
			m("tr", [
				m("td","Number of states"),
				m("td",DetailedScenario.num_of_states)
			]),
			m("tr", [
				m("td","Is scenario acceptable"),
				m("td", 
					{
						style: {
							color:colorFromBool(DetailedScenario.is_valid),
							fontWeight:700
							}
					}, 
					DetailedScenario.is_valid.toString()
				)
			])
		])
    }
}