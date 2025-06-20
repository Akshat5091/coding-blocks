document.getElementById('btn').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('inp1').value);
    const num2 = parseFloat(document.getElementById('inp2').value);

    const sum = num1 + num2;
    const product = num1 * num2;
    const division = num2 !== 0 ? (num1 / num2).toFixed(2) : 'Infinity';

    document.querySelector('.sumVal').textContent = isNaN(sum) ? 'Invalid' : sum;
    document.querySelector('.productVal').textContent = isNaN(product) ? 'Invalid' : product;
    document.querySelector('.divisionVal').textContent = isNaN(division) ? 'Invalid' : division;
});
