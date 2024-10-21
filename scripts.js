  const observer = new IntersectionObserver(entries => {
    // перебор записей
    entries.forEach(entry => {
      // если элемент появился
      if (entry.isIntersecting) {
        // добавить ему CSS-класс
        entry.target.classList.add('square-animation');
      }
    });
  });
  observer.observe(document.querySelector('.text31'));
  observer.observe(document.querySelector('.text32'));
  observer.observe(document.querySelector('.text33'));   
  
  

  const observer3 = new IntersectionObserver(entries => {
    // перебор записей
    entries.forEach(entry => {
      // если элемент появился
      if (entry.isIntersecting) {
        // добавить ему CSS-класс
        entry.target.classList.add('hrAnimation');
      }
    });
  });
  observer3.observe(document.querySelector('.hrB'));
  observer3.observe(document.querySelector('.hrC'));
 
  
  


  const observer2 = new IntersectionObserver(entries => {
    // перебор записей
    entries.forEach(entry => {
      // если элемент появился
      if (entry.isIntersecting) {
        // добавить ему CSS-класс
        entry.target.classList.add('h1Animation');
      }
    });
  });
  observer2.observe(document.querySelector('.h1B'));
  observer2.observe(document.querySelector('.otz'));
  observer2.observe(document.querySelector('.h1Profile'));
  observer2.observe(document.querySelector('.h2s'));
  observer2.observe(document.querySelector('.h2s2'));
  observer2.observe(document.querySelector('.h2s3'));
  


  const observer4 = new IntersectionObserver(entries => {
    // перебор записей
    entries.forEach(entry => {
      // если элемент появился
      if (entry.isIntersecting) {
        // добавить ему CSS-класс
        entry.target.classList.add('btnAnimation');
      }
    });
  });
  observer4.observe(document.querySelector('.btn1'));

  const observer5 = new IntersectionObserver(entries => {
    // перебор записей
    entries.forEach(entry => {
      // если элемент появился
      if (entry.isIntersecting) {
        // добавить ему CSS-класс
        entry.target.classList.add('textAnimation');
      }
    });
  });
  observer5.observe(document.querySelector('.pan'));
  observer5.observe(document.querySelector('.pan1'));
  observer5.observe(document.querySelector('.pan2'));
  observer5.observe(document.querySelector('.pan3'));
  observer5.observe(document.querySelector('.number1'));
  observer5.observe(document.querySelector('.number2'));
  observer5.observe(document.querySelector('.number3'));
  observer5.observe(document.querySelector('.h1service'));
  observer5.observe(document.querySelector('.h1team'));
  observer5.observe(document.querySelector('.h1team1'));
  observer5.observe(document.querySelector('.h1team2'));
  observer5.observe(document.querySelector('.h1team3'));
  observer5.observe(document.querySelector('.pteam1'));
  observer5.observe(document.querySelector('.pteam2'));
  observer5.observe(document.querySelector('.pteam3'));


  /*Треш полнейший*/ 

  