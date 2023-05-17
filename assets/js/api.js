fetch('https://mindicador.cl/api')
  .then(response => response.json())
  .then(data => {
    const dolar = data.dolar.valor;
    const euro = data.euro.valor;

    document.getElementById('dolar').textContent = dolar;
    document.getElementById('euro').textContent = euro;
  });