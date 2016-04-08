// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);


function drawChart() {

// Create the quarter sales data table.
	var quarter_sales = new google.visualization.DataTable();
	quarter_sales.addColumn('string', 'Quarter');
	quarter_sales.addColumn('number', 'South East');
	quarter_sales.addColumn('number', 'North East');
	quarter_sales.addColumn('number', 'South West');
	quarter_sales.addColumn('number', 'North West');

	quarter_sales.addRows([
	    ['Q1',14013,24149,23409,22486],
	    ['Q2',18600,13119,13113,18383],
	    ['Q3',23353,23284,17097,19190],
	    ['Q4',20756,12697,21796,21011],
	    ['Q1',18378,21630,11436,15282],
	    ['Q2',22284,19603,18152,16454],
	    ['Q3',22473,23947,17919,19653],
	    ['Q4', 21630,11436,15282,10284]
	]);

	var quarter_sales_options = {
		hAxis: {
		  title: 'Quarter',
		  textStyle: {color: '#E0E0E0'}
		},
		colors: ['#AED581', '#4FC3F7', '#9575CD', '#F06292'],
		vAxis: {
		  title: 'Sales',
		  format: 'short',
		  viewWindowMode:'explicit',
		      viewWindow:{
		        max:25000,
		        min:9000
		      },
	      textStyle: {color: '#E0E0E0', fontName: 'Lato'}
		},
		pointSize: 5,
		backgroundColor: {fill: 'transparent'},
		legend: {
			textStyle: {color: '#E0E0E0', fontName: 'Lato'}
		}
	};

	var formatter = new google.visualization.NumberFormat(
	{prefix: '$'});

	formatter.format(quarter_sales,1);
	formatter.format(quarter_sales,2);
	formatter.format(quarter_sales,3);
	formatter.format(quarter_sales,4);

	var avg_manager = google.visualization.arrayToDataTable([
		['Manager', 'Average Sales', {role: 'style'}],
		['John', ((14013 + 18600)/2), '#C5E1A5'],
		['Leonardo', ((23353 + 20756 + 18378 + 22284) / 4), '#AED581'],
		['Donatello', ((24473 + 16286) / 2), '#9CCC65'],
		['Paul', ((24149 + 13119 + 23284 + 12697 + 21630 + 19603 + 23947 + 22444) / 8), '#4FC3F7'],
		['George', ((23409 + 13113 + 17097) / 3), '#9575CD'],
		['Michelangeo', ((21796 + 11436 + 18152 + 17919 + 12747) / 5), '#7E57C2'],
		['Ringo', 22486, '#F06292'],
		['Raphael', ((18383 + 19190 + 21011 + 16454 + 19653 + 10284) / 6), '#EC407A']
	]);

	formatter.format(avg_manager, 1);

	var avg_manager_options = {
		hAxis: {
			title: 'Sales',
			format: 'short',
			viewWindowMode:'explicit',
		      viewWindow:{
		        max:24000,
		        min:13000
		      },
		      textStyle: {color: '#E0E0E0', fontName: 'Lato'}
		},
		vAxis: {
			title: 'Manager',
			textStyle: {color: '#E0E0E0', fontName: 'Lato'}
		},
		backgroundColor: {fill: 'transparent'},
		legend: 'none'
	};

	var total_sales = new google.visualization.arrayToDataTable([
		['Region', '2013', {role: 'style'}, { role: 'annotation' }, '2014', {role: 'style'}, { role: 'annotation' }],
		["South East", (14013 + 18600 + 23353 + 20756), '#AED581', '2013', (18378 + 22284 + 24473 + 16286), '#9CCC65', '2014'],
		["North East", (24149 + 13119 + 23284 + 12697), '#4FC3F7', '2013', (18378 + 22284 + 24473 + 16286), '#29B6F6', '2014'],
		["South West", (23409 + 13113 + 17097 + 21796), '#9575CD', '2013', (21630 + 19603 + 23947 + 22444), '#7E57C2', '2014'],
		["North West", (22486 + 18383 + 19190 + 21011), '#F06292', '2013', (15282 + 16454 + 19653 + 10284), '#EC407A', '2014']
	]);
	// total_sales.addColumn('string', 'Region');
	// total_sales.addColumn('number', '2013');
	// total_sales.addColumn('number', '2014');

	// total_sales.addRows([
	// ]);

	formatter.format(total_sales, 1);
	formatter.format(total_sales, 4);

	var total_sales_options = {
		hAxis: {
			title: 'Region',
			textStyle: {color: '#E0E0E0', fontName: 'Lato'}
		},
		vAxis: {
			title: 'Sales',
			format: 'short',
			textStyle: {color: '#E0E0E0', fontName: 'Lato'}
		},
		backgroundColor: {fill: 'transparent'},
		legend: 'none'
	}

	var quarter_sales_chart = new google.visualization.LineChart(document.getElementById('quarter-sales'));
	quarter_sales_chart.draw(quarter_sales, quarter_sales_options);

	var avg_manager_chart = new google.visualization.BarChart(document.getElementById('avg-manager'));
	avg_manager_chart.draw(avg_manager, avg_manager_options);

	var total_sales_chart = new google.visualization.ColumnChart(document.getElementById('total-sales'));
	total_sales_chart.draw(total_sales, total_sales_options);

}