const items = document.querySelectorAll(".accordion1 a");

function toggleAccordion1(){
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}

items.forEach(item => item.addEventListener('click', toggleAccordion1));