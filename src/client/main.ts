console.log("Loaded ", new Date());

function main() {
    let number1 = (document.getElementById("number1") as HTMLInputElement).value;
    let number2 = (document.getElementById("number2") as HTMLInputElement).value;
    let calculateButton = (document.getElementById("calculateButton") as HTMLInputElement);
    let result = (document.getElementById("result") as HTMLDivElement);

    calculateButton.addEventListener("click", (e) => {
        console.log("Button clicked... getting sum from service")
        httpGetAsync("/api/add?a=" + number1 + "&b=" + number2, (response) => {
            result.innerText = "And the result is " + response.sum;
        });
    });
}

main();

function httpGetAsync(url: string, callback: (response: any) => void) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(JSON.parse(xmlHttp.responseText));
    }
    xmlHttp.open("GET", url, true); // true for asynchronous 
    xmlHttp.send(null);
}