window.onscroll = function() {
    let navbar = document.getElementById('cambiaColore');
    let scrollPosition = window.scrollY;
    

    if (scrollPosition > 35) { 
      navbar.classList.add('cambiaColore');
    } else {
      navbar.classList.remove('cambiaColore');
    }
  };

  /*tentativo di funzione per aggiungere classe allo scroll*/
