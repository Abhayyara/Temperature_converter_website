function convertTemperature() {
    const temperature = parseFloat(document.getElementById("temperature").value);
    const unit = document.getElementById("unit").value;
    let convertedTemperature;
    
    if (unit === "celsius") {
      convertedTemperature = (temperature * 9/5) + 32;
    } else if (unit === "fahrenheit") {
      convertedTemperature = (temperature - 32) * 5/9;
    }
    
    document.getElementById("result").textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} °${unit === "celsius" ? "F" : "C"}`;
  }