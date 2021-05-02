var m = require("mithril")
var DetailedScenario = require("../models/DetailedScenario")

function _colorFromBool(b){
	if (b)
		return 'green';
	else
		return 'red';
}

module.exports = {
    view: function() {
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
							color:_colorFromBool(DetailedScenario.is_valid),
							fontWeight:700
							}
					}, 
					DetailedScenario.is_valid.toString()
				)
			]),
			m("tr", [
				m("td","Currently moment"),
				m("td",DetailedScenario.current_state)
			])
			
		])
    }
}