var m = require("mithril")
var DetailedScenario = require("../models/DetailedScenario")
module.exports = {
	oninit: function(vnode) {
		//DetailedScenario.load_timeline(vnode.attrs.name);
		},
    view: function(vnode) {
        return m(".pure-g boxed", [
				m(".pure-u-1-1 .top" ,vnode.attrs.topChild),
				m(".pure-u-18-24 .mid", vnode.attrs.midLeftChild),
				m(".pure-u-6-24 .mid", vnode.attrs.midRightChild),
				m(".pure-u-1-1", vnode.attrs.botChild),
				//vnode.children
			])
    }
}