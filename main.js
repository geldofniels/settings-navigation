$('.nav-content.details').click(function() {
  $('.settings-content.details').show();
  $('.settings-content.availability').hide();
  $('.settings-content.tables').hide();
});
$('.nav-content.availability').click(function() {
  $('.settings-content.details').hide();
  $('.settings-content.availability').show();
  $('.settings-content.tables').hide();
});
$('.nav-content.tables').click(function() {
  $('.settings-content.details').hide();
  $('.settings-content.availability').hide();
  $('.settings-content.tables').show();
});
