var resultsArray;


$(document).ready(function(){

  $('form').on('submit', initialSearch);
  $('#home').on('click', generateHomePage);
  $('#about').on('click', generateAboutPage);
  $('#contact').on('click', generateContactPage);

});

function initialSearch(event){
  event.preventDefault();

  var searchItem = $("#searchItem").val();
  $('#searchItem').fadeOut('slow');
  $('.landing h2').slideUp('slow');
  $('.landing h1').slideUp('slow',function(){
    $('.landing').fadeOut('slow', function(){
      $('.landing').remove();
    });
  });


  var firstQuery = 'http://dax-cors-anywhere.herokuapp.com/https://api.brewerydb.com/v2/search?q='+ searchItem +'&withLocations=Y&type=brewery&key=44665a51583c7e1afe237d1dfa5c45b9&format=json';

  var ajaxTest = $.ajax({
    type:'GET',
    dataType:'json',
    url:firstQuery
  }).done(pushData);
}

//Pushes the IDs of the search results back to the array "resultsArray" for use later.
function pushData(data){
  var resultsArray = data.data;

  $('<section class="images">').appendTo('main').hide().fadeIn('slow');

  resultsArray.forEach(generateBeerPreview);

  $('</section>').appendTo('main');

  $('.images').on('click','.previewObject',getBeerInfo);


}

function generateBeerPreview(element, index){
  setTimeout(function(){
    var self = element.id;
    $('<div class="previewObject" id="' + self + '">').appendTo('.images').hide().fadeIn('slow');
    if (element.hasOwnProperty('images')) {
      $('<img class="preview" src="' + element.images.squareMedium +'">').appendTo('#' + self);
    } else {
      $('<div class="preview">No Preview</div>').appendTo('#' + self);
    }
    $('<h3>' + element.name + '</h3>').appendTo('#' + self);
    $('</div>').appendTo(self);

  }, index * 200);
}

function generateHomePage(){

}

function generateAboutPage(){

}

function generateContactPage(){

}

function getBeerInfo(event){
 var getId = $(this).attr('id'),
     beerQuery = 'http://dax-cors-anywhere.herokuapp.com/https://api.brewerydb.com/v2/brewery/'+ getId +'/beers?key=44665a51583c7e1afe237d1dfa5c45b9&format=json',
     infoQuery = $.ajax({
       type:'GET',
       dataType:'json',
       url:beerQuery
     }).done(function(data){
       console.log(data); //data.data is an array.
     });
}
