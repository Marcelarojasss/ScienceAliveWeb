// javascript to print all values from form
document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const resultsDiv = document.getElementById("results");

    const form = event.target;
    const formData = new FormData(form);
    const outputMap = {}; 

    for (let [name, value] of formData.entries()) {
        if (!outputMap[name]) {
            outputMap[name] = [];
        }
        outputMap[name].push(value);
    }

    let output = "<ul>";

    for (let name in outputMap) {
        const values = outputMap[name];
        output += `<li><strong>${name}</strong>: ${values.join(", ")}</li>`;
    }

    output += "</ul>";
    resultsDiv.innerHTML += output;
});
