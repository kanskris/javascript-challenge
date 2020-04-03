// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

function load_table(data)
{
    tbody.html("");
    //modified code based on BONUS: Refactor to use Arrow Functions! week 3 activity 3
    data.forEach((uforeport) => {
        //console.log(uforeport);
        var row = tbody.append("tr");
        Object.entries(uforeport).forEach(([key,value]) => {
            //console.log(uforeport);
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

//function to filter based on date
function filter_data(){
    var filter_date = d3.select("#datetime").property("value");
    let temp_data = tableData;
    console.log(filter_date);
    if (filter_date) {
        //filter data based on last activity of week 3
        temp_data = temp_data.filter(row => row.datetime === filter_date);
    }
    console.log(temp_data);
    load_table(temp_data);
}

//code to trigger filter function
d3.selectAll("#filter-btn").on("click", filter_data);

//load table by default
load_table(tableData);

