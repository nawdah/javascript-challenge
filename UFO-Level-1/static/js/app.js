// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log(tableData);

var tbody = d3.select("tbody");

function display(sightings){
    tbody.text("");
    sightings.forEach((records) => {
        var row = tbody.append("tr");
        Object.entries(records).forEach(function([key, value]){
            var column = row.append("td").text(value);
        });
    });
};

display(tableData);

var inputDate = d3.select("#datetime");
var button = d3.select("filter-btn");

function filterButton(){
    d3.event.preventDefault();
    console.log(inputDate.property("value"));
    var table = tableData.filter(sighting => sighting.datetime === inputDate.property("value"));
    display(table);
};

inputDate.on("change", filterButton);
button.on("click", filterButton);
