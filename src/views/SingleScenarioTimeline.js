var m = require("mithril")
var vis = require("vis-timeline")
require("vis-timeline/styles/vis-timeline-graph2d.css")

var DetailedScenario = require("../models/DetailedScenario")
var lastHash = ""
var timeline_content

module.exports = {
	oninit: function(vnode) {
			DetailedScenario.load_timeline();
		},
	oncreate: function(){
		var timeline_container = document.getElementById("timeline_container");
			
		var groups = [];
		var items = [{
				content: "",
				end: 0,
				group: 0,
				start: 0
			}
		]; //there has to be at least one item otherwise timeline won't be updated
			
		var timeline_options = {
			width: '100%',
			height:'100%',
			groupOrder: "content",
			format: {
				minorLabels: function (date, scale, step){
					var zero =new Date(0);
					var diff = date._d.getTime()-zero.getTime()
					return (diff.toString());
					}
			},
			showMajorLabels : false
				
		};
		timeline_content = new vis.Timeline(timeline_container, items, groups, timeline_options);
		lastHash = ""
	},
	onupdate: function() {
		
		console.log("timeline-onupdate");
		if (DetailedScenario.timeline_hash !== lastHash) {
			console.log("timeline-update");
			var groups = DetailedScenario.timeline_groups;
			var items = DetailedScenario.timeline_items;

			timeline_content.setData(
				{
					groups: DetailedScenario.timeline_groups,
					items: DetailedScenario.timeline_items
				})
			lastHash=DetailedScenario.timeline_hash;
		}
		
	},
    view: function(vnode) {
        return m(".top", {id: "timeline_container"})
    }
}