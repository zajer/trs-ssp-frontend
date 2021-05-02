var m = require("mithril")
var DetailedScenario = require("../models/DetailedScenario")
module.exports = {
	oninit: function() {
		console.log("ssl-oninit")
		DetailedScenario.load_overview();
		},
    view: function(vnode) {
        return m(".pure-g boxed", [
				m(".pure-u-1-1" ,vnode.attrs.topChild),
				m(".pure-u-1-1", vnode.attrs.midChild),
				m(".pure-u-1-1", vnode.attrs.botChild)
			]);
    }
}