function openPanel(name){
  $('.panel').removeClass('open');
  $('#panel-' + name).addClass('open');
}

function closePanels(){
  $('.panel').removeClass('open');
}

$('[data-panel]').on('click', function(){
  openPanel($(this).data('panel'));
});

$('.panel .close').on('click', function(){
  closePanels();
});

$(document).on('keydown', function(e){
  if(e.key === 'Escape') closePanels();
});

$('#panel-ships .card').on('click', function(){
  $('#panel-ships .card').removeClass('selected');
  $(this).addClass('selected');
  $('#pickedShip').text($(this).data('ship'));
});

$('#panel-maps .card').on('click', function(){
  $('#panel-maps .card').removeClass('selected');
  $(this).addClass('selected');
  $('#pickedMap').text($(this).data('map'));
});

$('#musicVol').on('input', function(){
  $('#musicVolValue').text($(this).val());
});

$('#newGame').on('click', function(){
  alert('New Game (demo)');
});

$('#continueGame').on('click', function(){
  alert('Continue (demo)');
});

$('#quit').on('click', function(){
  alert('Quit (demo)');
});
