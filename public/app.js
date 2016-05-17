$('#searchForm').on('submit',function(event){
  event.preventDefault();

  var searchItem = ($('#searchItem').val());
  $('#searchItem').val('').fadeOut('slow');
});
