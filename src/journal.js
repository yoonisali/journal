// Buisness Logic

function Entry(title, body) {
    this.titleEntry = title;
    this.bodyEntry = body;
}

Entry.protoype.getVowels = function(bodyEntry) {
    let vowelsCount = 0;
    for (i = 0; i <= bodyEntry.length; i += 1) {
        if (bodyEntry.charAt(i) === "a" || bodyEntry.charAt(i) === "e" || bodyEntry.charAt(i) === "i" || bodyEntry.charAt(i) === "o" || bodyEntry.charAt(i) === "u") {
            vowelsCount += 1;
        }
        return vowelsCount;
    }


}

Entry.protoype.getConsonants = function(bodyEntry) {
    let consonantsCount = 0;
    for (i = 0; i <= bodyEntry.length; i += 1) {
        if (bodyEntry.charAt(i) === "a" || bodyEntry.charAt(i) === "e" || bodyEntry.charAt(i) === "i" || bodyEntry.charAt(i) === "o" || bodyEntry.charAt(i) === "u") {
            consonantsCount += 0;
        } else {
            consonantsCount += 1;
        }
        return consonantsCount;
    }


}


// Console Testing

let test = new Entry("blah", "easy");
let test2 = new Entry("blah", "plant");
console.log(test.getVowels());
console.log(test2.getConsonants());

