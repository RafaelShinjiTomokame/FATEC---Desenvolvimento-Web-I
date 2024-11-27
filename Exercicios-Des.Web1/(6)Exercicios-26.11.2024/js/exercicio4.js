function exer4() {
    const nome = document.querySelector('#entrada').value;
    
    const pElement = document.createElement('p');
    
    const texto = document.createTextNode(nome);
    
    pElement.appendChild(texto);
    
    const divSaida = document.querySelector('#saida');
    
    divSaida.appendChild(pElement);
  }