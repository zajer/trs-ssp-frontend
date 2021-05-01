var pure = require('purecss')
var m = require("mithril")

var AllScenarios = require("./views/AllScenarios")
var SSLayout = require("./views/SingleScenarioLayout")
var SSTimeline = require("./views/SingleScenarioTimeline")
var SSMenu = require("./views/SingleScenarioBottom")
var SSBasicInfo = require("./views/SingleScenarioBasicInfo")
var SSStateSelection = require("./views/SingleScenarioStateSelection")
m.route(document.body, "/all", {
    "/all": AllScenarios,
	"/single/:name": {
        render: function(vnode) {
            return m(SSLayout, {
					topChild: m(SSTimeline,vnode.attrs),
					midLeftChild: m(SSStateSelection),
					midRightChild: m(SSBasicInfo,vnode.attrs),
					botChild: m(SSMenu)
			})
        }
    },
	
})
