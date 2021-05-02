var m = require("mithril")

module.exports = {	
    view: function(vnode) {
        return m(".pure-g boxed", [
				m(".pure-u-18-24 .mid", m(vnode.attrs.leftChild)),
				m(".pure-u-6-24 .mid", m(vnode.attrs.rightChild)),
			])
    }
}