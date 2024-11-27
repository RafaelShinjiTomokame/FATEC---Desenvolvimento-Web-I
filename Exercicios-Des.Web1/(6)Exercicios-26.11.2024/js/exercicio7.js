function exer7() {
    const nome = document.querySelector('#entrada').value;
  
    const itemLista = document.createElement('li');
  
    itemLista.textContent = nome;
  
    const atributoTitle = document.createAttribute('title');
    atributoTitle.value = nome;
  
    itemLista.setAttributeNode(atributoTitle);
  
    const lista = document.querySelector('ol');
  
    lista.appendChild(itemLista);
  
    document.querySelector('#entrada').value = '';
  }