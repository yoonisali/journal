// Buisness Logic

function Entry(title, body) {
    this.titleEntry = title;
    this.bodyEntry = body;
}

let title = document.getElementById("title");
let body = document.getElementById("body");
console.log(new Entry("title", "body"));

Entry.protoype.getVowels = function () {
    let vowelsCount = 0;
    for (i = 0; i <= bodyEntry.length; i += 1) {
        if (bodyEntry.charAt(i) === "a" || bodyEntry.charAt(i) === "e" || bodyEntry.charAt(i) === "i" || bodyEntry.charAt(i) === "o" || bodyEntry.charAt(i) === "u") {
            vowelsCount += 1;
        }
    } 
    return vowelsCount;
}

Entry.protoype.getConsonants = function (bodyEntry) {
    let consonantsCount = 0;
    for (i = 0; i <= bodyEntry.length; i += 1) {
        if (bodyEntry.charAt(i) === "a" || bodyEntry.charAt(i) === "e" || bodyEntry.charAt(i) === "i" || bodyEntry.charAt(i) === "o" || bodyEntry.charAt(i) === "u") {
            consonantsCount += 0;
        } else {
            consonantsCount += 1;
        }

    } return consonantsCount;


}

// UI Logic

function log(event) {
    event.preventDefault();
    console.log(title);
    console.log(body);
}

// Console Testing
window.addEventListener("load", function(event) {
    event.preventDefault();
    const journal = document.getElementById("journal");
    journal.addEventListener("submit", log)
});

