$('#searchForm').on('submit',function(event){
  event.preventDefault();

  var searchText = ($('#searchItem').val());
  $('#searchItem').val('').fadeOut('slow');

  var beerQuery = $.ajax({
    type:'GET',
    dataType:'json',
    url: 'https://api.brewerydb.com/v2/search?q=' + searchText + '&key=44665a51583c7e1afe237d1dfa5c45b9&format=json'
  });

  beerQuery.done(function(data){
    console.log(data);
  });
});
