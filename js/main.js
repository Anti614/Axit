$(document).ready(function () {
  let nav = $("#navbarContent");
  $(".navbar a").click(function () {

    $("body,html").animate({
      scrollTop: $("#" + $(this).data('value')).offset().top - $("#header").height()
    }, 700);
    nav.removeClass("show");

  });

  
  const cards = document.querySelectorAll('.product__card');
  cards.forEach((card) => {
    card.addEventListener('click', cardClick);
  });

  function cardClick(event) {
    let p = event.currentTarget?.querySelector('.product__ad');

    if (!p) {
      return;
    }

    if (p.style.display == 'none') {
      p.style.display = 'block';
    } else {
      p.style.display = 'none';
    }
  }

});

