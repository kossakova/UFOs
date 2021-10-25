// import the data from data.js
const tableData = data;

// Reference the HTML table using d3,  tell JavaScript to look for the <tbody> tags in the HTML
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
}