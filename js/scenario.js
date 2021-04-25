var scenario_info = {name:"my scenario 1",num_of_states:777,is_valid:true}
var info_table_area = document.getElementById('scenario_info_area');

var create_scenario_info_table = function (scenario) 
	{
		var info_table = document.createElement('table');
			info_table.className = "pure-table pure-table-bordered";
		var scenario_name_row = document.createElement('tr');
		var num_of_states_row = document.createElement('tr');
		var result_row = document.createElement('tr');
		
		var snc1 = document.createElement('td');
		var snc2 = document.createElement('td');
		var snc1_text = document.createTextNode('Scenario name:');
		var snc2_text = document.createTextNode(scenario.name);

			snc1.appendChild(snc1_text);
			snc2.appendChild(snc2_text);
			scenario_name_row.appendChild(snc1);
			scenario_name_row.appendChild(snc2);
		
		var nosc1 = document.createElement('td');
		var nosc2 = document.createElement('td');		
		var nosc1_text = document.createTextNode('Number of states:');
		var nosc2_text = document.createTextNode(scenario.num_of_states);

			nosc1.appendChild(nosc1_text);
			nosc2.appendChild(nosc2_text);
			num_of_states_row.appendChild(nosc1);
			num_of_states_row.appendChild(nosc2);
			
		var resc1 = document.createElement('td');
		var resc2 = document.createElement('td');		
		var resc1_text = document.createTextNode('Is scenario acceptable:');
		var resc2_text;
		
		if (scenario.is_valid){
			resc2_text = document.createTextNode("yes");
			resc2.style.color = 'green';
			resc2.style.fontWeight = '700';
		}
		else{
			resc2_text = document.createTextNode("no");
			resc2.style.color = 'red';
			resc2.style.fontWeight = '700';
			
		}

			resc1.appendChild(resc1_text);
			resc2.appendChild(resc2_text);
			result_row.appendChild(resc1);
			result_row.appendChild(resc2);
			
			
			info_table.appendChild(scenario_name_row);
			info_table.appendChild(num_of_states_row);
			info_table.appendChild(result_row);

		return info_table;
	}

var info_table = create_scenario_info_table (scenario_info);
	info_table_area.appendChild(info_table);

var ui_map_table_area = document.getElementById('ui_map_area'),
    ui_map_table = document.createElement('table');
	ui_map_table.className = "pure-table pure-table-horizontal";
	ui_map_table.id = "ui_map";
var create_ui_map_table_header = function ()
	{
		var thead = document.createElement('thead');
		var tr = document.createElement('tr');
		tr.appendChild( document.createElement('th') );
		tr.appendChild( document.createElement('th') );
		tr.cells[0].appendChild( document.createTextNode("Unique object id") );
		tr.cells[1].appendChild( document.createTextNode("Node's id") );
		thead.appendChild(tr);
		
		return thead;
	}
var ui_map_thead = create_ui_map_table_header();
var ui_map_tbody = document.createElement('tbody');

	ui_map_table.appendChild(ui_map_thead);

for (var i = 1; i < 30; i++) {
    var tr = document.createElement('tr');

    tr.appendChild( document.createElement('td') );
    tr.appendChild( document.createElement('td') );

    tr.cells[0].appendChild( document.createTextNode('Text1') )
    tr.cells[1].appendChild( document.createTextNode('Text2') );

    ui_map_tbody.appendChild(tr);
}
	ui_map_table.appendChild(ui_map_tbody);
	ui_map_table_area.appendChild(ui_map_table);

var create_sat_table_header = function ()
	{
		var thead = document.createElement('thead');
		var tr = document.createElement('tr');
		tr.appendChild( document.createElement('th') );
		tr.appendChild( document.createElement('th') );
		tr.cells[0].appendChild( document.createTextNode("Agent's id") );
		tr.cells[1].appendChild( document.createTextNode("Time for the agent") );
		thead.appendChild(tr);
		
		return thead;
	}
var sat_table_area = document.getElementById('sat_config_area'),
	sat_table = document.createElement('table');
	sat_table.className = "pure-table";
	sat_table.id = "sat_config";
var sat_thead = create_sat_table_header();
var sat_tbody = document.createElement('tbody');

	sat_table.appendChild(sat_thead);

for (var i = 1; i < 7; i++) {
    var tr = document.createElement('tr');

    tr.appendChild( document.createElement('td') );
    tr.appendChild( document.createElement('td') );

    tr.cells[0].appendChild( document.createTextNode('Text1') )
    tr.cells[1].appendChild( document.createTextNode('Text2') );

    sat_tbody.appendChild(tr);
}
	sat_table.appendChild(sat_tbody);
	sat_table_area.appendChild(sat_table);
