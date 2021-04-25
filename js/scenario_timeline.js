var timeline_container = document.getElementById("timeline_wrapper");

var groups_dataset = 
		[
			{"id":6,"content":"6"},
			{"id":4,"content":"4"},
			{"id":3,"content":"3"},
			{"id":2,"content":"2"},
			{"id":1,"content":"1"}
		]
var items_dataset = 
		[
			{"start":3,"end":4,"content":"r3","style":"color:white; background-color:hsl(159, 75%, 50%);","group":2},
			{"start":3,"end":4,"content":"r3","style":"color:white; background-color:hsl(159, 75%, 50%);","group":3},
			{"start":3,"end":4,"content":"r3","style":"color:white; background-color:hsl(159, 75%, 50%);","group":4},
			{"start":3,"end":4,"content":"r3","style":"color:white; background-color:hsl(159, 75%, 50%);","group":6},
			{"start":0,"end":3,"content":"r2","style":"color:white; background-color:hsl(22, 75%, 50%);","group":1},
			{"start":0,"end":3,"content":"r2","style":"color:white; background-color:hsl(22, 75%, 50%);","group":3},
			{"start":0,"end":3,"content":"r2","style":"color:white; background-color:hsl(22, 75%, 50%);","group":4},
			{"start":2,"end":3,"content":"r1","style":"color:white; background-color:hsl(281, 75%, 50%);","group":1},
			{"start":2,"end":3,"content":"r1","style":"color:white; background-color:hsl(281, 75%, 50%);","group":2},
			{"start":2,"end":3,"content":"r1","style":"color:white; background-color:hsl(281, 75%, 50%);","group":4},
			{"start":1,"end":2,"content":"r1","style":"color:white; background-color:hsl(205, 75%, 50%);","group":1},
			{"start":1,"end":2,"content":"r1","style":"color:white; background-color:hsl(205, 75%, 50%);","group":2},
			{"start":1,"end":2,"content":"r1","style":"color:white; background-color:hsl(205, 75%, 50%);","group":4},
			{"start":0,"end":1,"content":"r1","style":"color:white; background-color:hsl(144, 75%, 50%);","group":1},
			{"start":0,"end":1,"content":"r1","style":"color:white; background-color:hsl(144, 75%, 50%);","group":2},
			{"start":0,"end":1,"content":"r1","style":"color:white; background-color:hsl(144, 75%, 50%);","group":4}
		]

var groups = new vis.DataSet(groups_dataset);
var items = new vis.DataSet(items_dataset);

var timeline_options = 
	{
		width: '100%',
		height:'100%',
		groupOrder: "content",
		format: {
			minorLabels: function (date, scale, step){
				var zero =new Date(0);
				return (date._d.getTime()-zero.getTime())}
		},
		showMajorLabels : false
		
	};

var timeline = new vis.Timeline(timeline_container, items, groups, timeline_options);
