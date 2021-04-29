var m = require("mithril")

var AllScenarios = require("./views/AllScenarios")
var SingleScenario = require("./views/SingleScenario")
m.route(document.body, "/all", {
    "/all": AllScenarios,
	"/single/:name": SingleScenario
})
