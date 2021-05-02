var m = require("mithril")
var DetailedScenario = require("../models/DetailedScenario")

function _makeRowsBasedOnArrayOfPairs(arr) {
	var result = arr.map(function( pair ) {
		return m("tr", [
				m("th", pair[0]),
				m("th", pair[1])
		])
	});
	return result;
};

module.exports = {
    view: function(vnode) {
        return m(".table-wrapper-scroll-y .my-custom-scrollbar ", 
			m("table", {class:"pure-table pure-table-horizontal"}, [
				m("thead", [
					m("tr", [
						m("th", vnode.attrs.head1),
						m("th", vnode.attrs.head2)
				])
			]),
			_makeRowsBasedOnArrayOfPairs(vnode.attrs.dataPairsSet)
			])
		)
    }
}