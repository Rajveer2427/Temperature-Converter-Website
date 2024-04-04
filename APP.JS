function convert() {
    var inputTemperature = parseFloat(document.getElementById("inputTemperature").value);
    var selectUnit = document.getElementById("selectUnit").value;
    var resultElement = document.getElementById("result");
    var convertedTemperature;

    if (selectUnit === "celsius") {
        convertedTemperature = (inputTemperature - 32) * (5/9);
        resultElement.innerText = inputTemperature + " Fahrenheit = " + convertedTemperature.toFixed(2) + " Celsius";
    } else if (selectUnit === "fahrenheit") {
        convertedTemperature = (inputTemperature * (9/5)) + 32;
        resultElement.innerText = inputTemperature + " Celsius = " + convertedTemperature.toFixed(2) + " Fahrenheit";
    }
}
