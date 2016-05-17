var BreweryDb = require('brewerydb-node');
var brewdb = new BreweryDb('44665a51583c7e1afe237d1dfa5c45b9');

$('#searchForm').on('submit',function(event){
  event.preventDefault();

  var searchItem = ($('#searchItem').val());
  $('#searchItem').val('').fadeOut('slow');

  brewdb.search.all({q:searchItem}, function(req,res){
    console.log(res);
  });

});
