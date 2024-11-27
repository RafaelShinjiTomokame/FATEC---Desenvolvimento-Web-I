function exer5() {
    const nome = document.querySelector('#entrada').value;
    
    const pElement = document.createElement('p');
    
    pElement.textContent = nome;
    
    const divSaida = document.querySelector('#saida');
    
    divSaida.appendChild(pElement);
  }