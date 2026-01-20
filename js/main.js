// Toggle nav móvil
$('.nav-toggle').on('click', function () {
  const isOpen = $('.nav').hasClass('open');
  $('.nav').toggleClass('open');
  $(this).attr('aria-expanded', String(!isOpen));
});

// Slideshow
let currentSlide = 0;
const $slides = $('.slide');
const $dots = $('.dot');

function showSlide(i){
  currentSlide = (i + $slides.length) % $slides.length;
  $slides.removeClass('active').eq(currentSlide).addClass('active');
  $dots.removeClass('active').eq(currentSlide).addClass('active');
}

$('#prevSlide').on('click', () => showSlide(currentSlide - 1));
$('#nextSlide').on('click', () => showSlide(currentSlide + 1));
$dots.on('click', function(){ showSlide(parseInt($(this).data('i'), 10)); });

// Form
function setError(field, msg){
  $(`.error[data-for="${field}"]`).text(msg || '');
}

$('#betaForm').on('submit', function(e){
  e.preventDefault();

  $('#formOk').text('');
  setError('name',''); setError('email',''); setError('platform',''); setError('terms','');

  const name = $('#name').val().trim();
  const email = $('#email').val().trim();
  const platform = $('#platform').val();
  const terms = $('#terms').is(':checked');

  let ok = true;

  if(name.length < 2){ setError('name','Escribe tu nombre (mín. 2 letras).'); ok = false; }
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){ setError('email','Email no válido.'); ok = false; }
  if(!platform){ setError('platform','Elige una plataforma.'); ok = false; }
  if(!terms){ setError('terms','Necesitas aceptar para apuntarte.'); ok = false; }

  if(ok){
    $('#formOk').text('✅ Request sent. See you in the beta!');
    this.reset();
  }
});
