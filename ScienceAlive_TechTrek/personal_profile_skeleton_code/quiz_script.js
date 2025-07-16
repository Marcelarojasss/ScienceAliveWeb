document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const resultsDiv = document.getElementById("results");

    const form = event.target;
    const formData = new FormData(form);
    const outputMap = {}; // Collect values per field name

    // First, group values by field name
    for (let [name, value] of formData.entries()) {
        if (!outputMap[name]) {
            outputMap[name] = [];
        }
        outputMap[name].push(value);
    }

    let output = "<ul>";

    // Then, print them all
    for (let name in outputMap) {
        const values = outputMap[name];
        // If multiple values (like checkboxes), join them
        output += `<li><strong>${name}</strong>: ${values.join(", ")}</li>`;
    }

    output += "</ul>";
    resultsDiv.innerHTML += output;
});
