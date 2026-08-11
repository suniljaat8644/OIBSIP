document.getElementById('convertBtn').addEventListener('click', function() {
    const val = parseFloat(document.getElementById('tempInput').value);
    const unit = document.getElementById('unitInput').value;
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('errorMsg');

    resultDiv.textContent = '';
    errorDiv.textContent = '';

    if (isNaN(val)) {
        errorDiv.textContent = 'Please enter a valid numeric temperature!';
        return;
    }

    let c, f, k;

    if (unit === 'C') {
        if (val < -273.15) { errorDiv.textContent = 'Temperature below absolute zero (-273.15°C)!'; return; }
        c = val;
        f = (val * 9/5) + 32;
        k = val + 273.15;
    } else if (unit === 'F') {
        if (val < -459.67) { errorDiv.textContent = 'Temperature below absolute zero (-459.67°F)!'; return; }
        f = val;
        c = (val - 32) * 5/9;
        k = c + 273.15;
    } else {
        if (val < 0) { errorDiv.textContent = 'Temperature below absolute zero (0 K)!'; return; }
        k = val;
        c = val - 273.15;
        f = (c * 9/5) + 32;
    }

    resultDiv.textContent = `Celsius: ${c.toFixed(2)} °C\nFahrenheit: ${f.toFixed(2)} °F\nKelvin: ${k.toFixed(2)} K`;
});
