var resultsArray,
    brewURL;


$(document).ready(function(){

  $('form').on('submit', pages.initialSearch);
  $('#home').on('click', pages.generateHomePage);
  $('#about').on('click', pages.generateAboutPage);
  $('#contact').on('click', pages.generateContactPage);

});

//Pushes the IDs of the search results back to the array "resultsArray" for use later.
