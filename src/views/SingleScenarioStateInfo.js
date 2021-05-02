var m = require("mithril")
var DetailedScenario = require("../models/DetailedScenario")
var SSBasicInfo = require("./SingleScenarioBasicInfo")
var SSAdvancedInfo = require("./SingleScenarioAdvInfo")
module.exports = {
    view: function(vnode) {
        return m(".pure-g .my-custom-scrollbar2", [
					m(".pure-u-1 .pure-u-xl-1-3" , m(SSBasicInfo)),
					m(".pure-u-1 .pure-u-xl-1-3", 
						m(SSAdvancedInfo, 
						{
							head1:"Object's UID",
							head2:"Node's ID",
							dataPairsSet:DetailedScenario.current_state_ui_map
						})
					),
					m(".pure-u-1 .pure-u-xl-1-3", m(SSAdvancedInfo,{
							head1:"Agent's ID",
							head2:"Moment of time",
							dataPairsSet:DetailedScenario.current_state_sat_config
						})
					)
			])
    }
}