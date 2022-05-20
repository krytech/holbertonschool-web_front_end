function createElement(data) {
    let paragraph = document.createElement("p");
    paragraph.appendChild(document.createTextNode(data));
    document.head.append(paragraph);
}

function queryWikipedia(callback) {
    const req = new XMLHttpRequest();
    const url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";
    req.open("GET", url);

    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(JSON.parse(req.responseText))
        } else {
            const error = new Error("Error");
            return callback(error, null);
        }
    }
    req.send();
}

queryWikipedia(createElement);
