
// var BreweryDb = require('brewerydb-node'),
//     brew      = new BreweryDb(44665a51583c7e1afe237d1dfa5c45b9);


$(document).ready(function(){

  $('form').on('submit', initialSearch);

});

function initialSearch(event){
  event.preventDefault();


  // Link submission to an request in a listening server.

  // CORS anywhere test.

  var corsTest = jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
  });

  var urlTest = 'https://galvanize-cors-proxy.herokuapp.com/https://api.brewerydb.com/v2/locations?key=44665a51583c7e1afe237d1dfa5c45b9&format=json';

  var ajaxTest = $.ajax({
    type:'GET',
    dataType:'json',
    url:urlTest
  }).done(function(data){
    console.log(data);
  });

  // corsTest({
  //   method:'GET',
  //   url: 'https://api.brewerydb.com/v2/locations?key=44665a51583c7e1afe237d1dfa5c45b9&format=json',
  // }, function(data){
  //   console.log(data);
  // });
}


function generateLanding() {
  var landing = React.createClass({
    render: function () {
      return React.createElement(
        "section",
        { "class": "landing" },
        React.createElement(
          "h1",
          null,
          "Hidden City Brews"
        ),
        React.createElement(
          "h2",
          null,
          "Where do you wanna go?"
        ),
        React.createElement(
          "form",
          { id: "searchForm" },
          React.createElement("input", { type: "text", id: "searchItem", name: "searchField" })
        )
      );
    }
  });

  ReactDOM.render(React.createElement(landing, null), document.querySelector('body'));
}
