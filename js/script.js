document.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector('.burger');
  var links = document.querySelector('.nav-links');

  if (burger && links) {
    burger.addEventListener('click', function () {
      burger.classList.toggle('open');
      links.classList.toggle('open');
      burger.setAttribute('aria-expanded', links.classList.contains('open'));
    });

    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        burger.classList.remove('open');
        links.classList.remove('open');
      });
    });
  }

  // simple contact form -> opens WhatsApp / mail client with prefilled message
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('f-name').value.trim();
      var phone = document.getElementById('f-phone').value.trim();
      var service = document.getElementById('f-service').value;
      var message = document.getElementById('f-message').value.trim();

      var text = 'Olá, AQVIA Piscinas! Meu nome é ' + name +
        (service ? '. Tenho interesse em: ' + service : '') +
        (message ? '. Mensagem: ' + message : '') +
        (phone ? '. Meu telefone: ' + phone : '');

      var url = 'https://wa.me/5531983733004?text=' + encodeURIComponent(text);
      window.open(url, '_blank');
    });
  }

  // set current year in footer
  document.querySelectorAll('.year').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
});
