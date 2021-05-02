var pure = require('purecss')
var pure_resp = require('purecss/build/grids-responsive.css')
var m = require("mithril")

var AllScenarios = require("./views/AllScenarios")
var SSLayout = require("./views/SingleScenarioLayout")
var SSTimeline = require("./views/SingleScenarioTimeline")
var SSMenu = require("./views/SingleScenarioBottom")
var SSBasicInfo = require("./views/SingleScenarioBasicInfo")
var SSStateInfo = require("./views/SingleScenarioStateInfo")
var SSStateSelection = require("./views/SingleScenarioStateSelection")
var SSStateBigraph = require("./views/SingleScenarioStateBigraph")

var midLayout = require("./views/SingleScenarioMidLayout")
var midExtended = require("./views/SingleScenarioMoment")

m.route(document.body, "/all", {
    "/all": AllScenarios,
	"/single/:name": {
        render: function() {
            return m(SSLayout, {
					topChild: m(SSTimeline),
					midChild: m(midLayout, {leftChild: SSStateSelection, rightChild: SSBasicInfo}),
					botChild: m(SSMenu)
			})
        }
    },
	"/single/:name/:moment": {
        render: function() {
            return m(SSLayout, {
					topChild: m(SSTimeline),
					midChild: m( midExtended, {leftChild:SSStateBigraph, rightChild:SSStateInfo} ),
					botChild: m(SSMenu)
			})
        }
    },
	
	
})
