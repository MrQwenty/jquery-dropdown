$('item.').click(function(){

  $('.item').removeclass('white');
  $('.first_dropdown').removeclass('open');

  $(this).addclass('white');

  var thisdropdown = $(this).children('.first_dropdown')
  thisdropdown.addclass('open');
})
