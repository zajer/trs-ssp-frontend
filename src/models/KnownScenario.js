var m = require("mithril")
var config = require("../Config")

var KnownScenario = {
    list: [],
    loadList: function() {
        return m.request({
            method: "GET",
            url: config.addr_all()
        })
        .then(function(result) {
            KnownScenario.list = result
        })
        .catch(function(e) {
                console.log("Could not retrieve a list of available scenarios");
				console.log("Returned error:"+e);
        })
    },
}

module.exports = KnownScenario