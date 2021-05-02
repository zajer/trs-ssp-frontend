var m = require("mithril")
var DetailedScenario = require("../models/DetailedScenario")

module.exports = {	
    view: function(vnode) {
		console.log("mid-view");
        return m(".pure-g boxed", [
				m(".pure-u-18-24 .mid", m(vnode.attrs.leftChild)),
				m(".pure-u-6-24 .mid", m(vnode.attrs.rightChild)),
			])
    }
}