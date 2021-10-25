// import the data from data.js
const tableData = data;

// Reference the HTML table using d3,  tell JavaScript to look for the <tbody> tags in the HTML
//Data-Driven Documents (D3)- JS library that adds interactive functionality
var tbody = d3.select("tbody");

function buildTable(data) {
    //tbody.html references the table, pointing JavaScript directly to the table in the HTML page we building, ("") an emty string
    //clear out any existing data
    tbody.html("");
    //Looped through each object in the array/data, Appended a row to the HTML table, Added each value from the object into a cell
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");
        // Object.values telling JSc to reference one object from the array of UFO sightings. (dataRow) the values goes into the dataRow, forEach((val) specifies one object per row.
        // Loop through each field in the dataRow and add, each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
        //append each value of the object to a cell in the table
        let cell = row.append("td");
        // val variable holds only each value from the object
        cell.text(val);
        });
    });
};

function handleClick() {
    //create variables to hold date data, d3.select("#datetime") telling D3 to look for the #datetime id in the HTML tags
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    //applying a filter method that will match the datetime value to the filtered date value
    // Check to see if a date was entered and filter the data using that date.
    if (date) {
        // Apply `filter` to the table data to only keep the rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // passing in our filteredData variable as our argument so that only the data that matches the filter is displayed
    // Rebuild the table using the filtered data @NOTE: If no date was entered, then filteredData will just be the original tableData.
    buildTable(filteredData);
};

//by adding .on("click", handleClick) telling D3 to execute our handleClick() function when the button with an id of filter-btn is clicked.
// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);