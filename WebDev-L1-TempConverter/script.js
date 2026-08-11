document.getElementById('convertBtn').addEventListener('click', function() {
    const rawVal = document.getElementById('tempInput').value;
    const val = parseFloat(rawVal);
    const unit = document.getElementById('unitInput').value;
    const errorDiv = document.getElementById('errorMsg');

    const resC = document.getElementById('resC');
    const resF = document.getElementById('resF');
    const resK = document.getElementById('resK');

    errorDiv.textContent = '';

    if (rawVal.trim() === '' || isNaN(val)) {
        errorDiv.textContent = '⚠️ Please enter a valid number!';
        return;
    }

    let c, f, k;

    if (unit === 'C') {
        if (val < -273.15) { errorDiv.textContent = '⚠️ Below absolute zero (-273.15°C)!'; return; }
        c = val;
        f = (val * 9/5) + 32;
        k = val + 273.15;
    } else if (unit === 'F') {
        if (val < -459.67) { errorDiv.textContent = '⚠️ Below absolute zero (-459.67°F)!'; return; }
        f = val;
        c = (val - 32) * 5/9;
        k = c + 273.15;
    } else {
        if (val < 0) { errorDiv.textContent = '⚠️ Below absolute zero (0 K)!'; return; }
        k = val;
        c = val - 273.15;
        f = (c * 9/5) + 32;
    }

    resC.textContent = `${c.toFixed(2)} °C`;
    resF.textContent = `${f.toFixed(2)} °F`;
    resK.textContent = `${k.toFixed(2)} K`;
});
