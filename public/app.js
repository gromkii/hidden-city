var resultsArray;


$(document).ready(function(){

  $('form').on('submit', initialSearch);

});

function initialSearch(event){
  event.preventDefault();

  var searchItem = $("#searchItem").val();
  $('#searchItem').fadeOut('slow');
  $('.landing h2').slideUp('slow');
  $('.landing h1').slideUp('slow',function(){
    $('.landing').fadeOut('slow', function(){
      $('.landing').remove();
      generatePreviews();
    });
  });


  var urlTest = 'https://galvanize-cors-proxy.herokuapp.com/https://api.brewerydb.com/v2/search?q='+ searchItem +'&withLocations=Y&key=44665a51583c7e1afe237d1dfa5c45b9&format=json';

  var ajaxTest = $.ajax({
    type:'GET',
    dataType:'json',
    url:urlTest
  }).done(pushData);
}

//Pushes the IDs of the search results back to the array "resultsArray" for use later.
function pushData(data){
  var resultsArray    = [],
      newArray   = data,
      maxResults = 20;

  if (newArray.length < 20 && newArray.length > 0) {

  } else if (newArray.length <= 0) {
    console.log('No results found.');
  }

  for (var i = 0; i < maxResults; i++){
    resultsArray.push(data.data[i].id);
  }

  console.log(resultsArray);

}

function generatePreviews() {
  var newSection = React.createClass({
    render: function () {
      return React.createElement(
        "div",
        { "class": "previewObject" },
        React.createElement("div", { "class": "preview" })
      );
    }
  });

  ReactDOM.render(React.createElement(
    "section",
    { "class": "images" },
    React.createElement("newSection", null)
  ), null, document.querySelector('body'));
}
