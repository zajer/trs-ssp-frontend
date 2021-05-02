var m = require("mithril")
var vis = require("vis-network")
var DetailedScenario = require("../models/DetailedScenario")
require("vis-network/styles/vis-network.min.css")

var network

module.exports = {
	oncreate: function() {
		var network_container = document.getElementById("bigraph_container");
		var data = {
		  nodes: [],
		  edges: [],
		};
		var network_options = 
			{
			height: '100%',
		  };
		network = new vis.Network(network_container, data, network_options);
	},
	onupdate: function() {
		network.setData({
			nodes:DetailedScenario.current_state_network_nodes,
			edges:DetailedScenario.current_state_network_edges
			})
	},
    view: function() {
		console.log("sssb-view");
        return m("#bigraph", m("", {id: "bigraph_container"}))
    }
}