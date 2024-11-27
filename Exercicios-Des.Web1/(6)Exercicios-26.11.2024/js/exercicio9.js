function exer9() {
    const nome = document.querySelector('#entrada').value;
  
    if (nome.length > 0) {
      const itemLista = document.createElement('li');
  
      itemLista.textContent = nome;
  
      const atributoTitle = document.createAttribute('title');
      atributoTitle.value = nome;
  
      itemLista.setAttributeNode(atributoTitle);
  
      const lista = document.querySelector('ol');
  
      lista.appendChild(itemLista);
  
      const total = document.querySelectorAll('ol li').length;
      document.querySelector('#total').innerText = total;
  
      document.querySelector('#entrada').value = '';
    } else {
      alert('Por favor, insira um nome.');
    }
  }