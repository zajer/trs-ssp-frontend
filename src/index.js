var m = require("mithril")

var AllScenarios = require("./views/AllScenarios")

m.route(document.body, "/all", {
    "/all": AllScenarios,
})
