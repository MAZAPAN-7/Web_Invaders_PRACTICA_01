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

// --- Preview helpers ---
const shipImages = {
  "Ship 1": "../assets/Nave1L.png",
  "Ship 2": "../assets/Nave2L.png",
  "Ship 3": "../assets/Nave3L.png",
  "Ship 4": "../assets/Nave4L.png",
};

// (por ahora no tienes mapas -> lo dejamos preparado)
const mapImages = {
  // "Map 1": "../assets/maps/Map1.png",
};

function setShipPreview(shipName){
  const src = shipImages[shipName];
  const $box = $('#shipPreview');
  const $img = $('#shipPreview img');
  const $ph  = $('#shipPreview .placeholder');

  if(src){
    $img.attr('src', src).show();
    $ph.hide();
  }else{
    $img.attr('src', '').hide();
    $ph.show();
  }
}

function setMapPreview(mapName){
  const src = mapImages[mapName];
  const $img = $('#mapPreview img');
  const $ph  = $('#mapPreview .placeholder');

  if(src){
    $img.attr('src', src).show();
    $ph.hide();
  }else{
    $img.attr('src', '').hide();
    $ph.show();
  }
}

// Selección de nave
$('#panel-ships .card').on('click', function(){
  $('#panel-ships .card').removeClass('selected');
  $(this).addClass('selected');

  const ship = $(this).data('ship');
  $('#pickedShip').text(ship);

  setShipPreview(ship);
});

// Selección de mapa
$('#panel-maps .card').on('click', function(){
  $('#panel-maps .card').removeClass('selected');
  $(this).addClass('selected');

  const map = $(this).data('map');
  $('#pickedMap').text(map);

  setMapPreview(map);
});

// Volumen: actualizar numerito
$('#musicVol').on('input', function(){
  $('#musicVolValue').text($(this).val());
});

// Botones main
$('#newGame').on('click', function(){
  alert('En Construccion... 🏗️');
});

$('#continueGame').on('click', function(){
  alert('En Construccion... 🏗️');
});

$('#quit').on('click', function(){
  $('body').fadeOut(300, function(){
    window.location.href = "../index.html";
  });
});

// Inicializar previews con lo que haya por defecto en el texto
setShipPreview($('#pickedShip').text().trim());
setMapPreview($('#pickedMap').text().trim());
