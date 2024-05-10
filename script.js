function calcularGasto() {
    const distancia = parseFloat(document.getElementById("distancia").value);
    const consumo = parseFloat(document.getElementById("consumo").value);
    const preco = parseFloat(document.getElementById("preco").value);
  
    if (isNaN(distancia) || isNaN(consumo) || isNaN(preco)) {
      alert("Por favor, insira valores válidos.");
      return;
    }
  
    const gasto = (distancia / consumo) * preco;
    document.getElementById("resultado").textContent = "R$ " + gasto.toFixed(2);
  }