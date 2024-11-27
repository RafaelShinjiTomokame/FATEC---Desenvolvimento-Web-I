function exer3() {
    const entrada = document.getElementById('entrada');
    const saida = document.getElementById('saida');
    
    saida.value = entrada.value;
  }
  
  document.getElementById('btnOk').addEventListener('click', exer3);