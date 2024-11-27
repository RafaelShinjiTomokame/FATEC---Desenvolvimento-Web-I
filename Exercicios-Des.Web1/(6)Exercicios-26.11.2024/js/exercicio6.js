function exer6() {
    const nome = document.querySelector('#entrada').value;
  
    const paragrafo = document.createElement('p');
  
    paragrafo.textContent = nome;
  
    const atributoTitle = document.createAttribute('title');
    atributoTitle.value = 'Nome fornecido';
  
    paragrafo.setAttributeNode(atributoTitle);
  
    const saida = document.querySelector('#saida');
  
    saida.appendChild(paragrafo);
  }