function iniciarExtension() {
  const interval = setInterval(() => {
    const botonNativo = document.querySelector('.x1fe8iih > button:nth-child(1)');
    
    if (botonNativo) {
      clearInterval(interval); // Detener la búsqueda cuando aparezca
      
      botonNativo.addEventListener('click', () => {
        document.body.classList.toggle('side-hidden');
      });
    }
  }, 1000);
}

iniciarExtension();