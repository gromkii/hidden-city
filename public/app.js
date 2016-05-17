// var express   = require('express'),
//     app       = express(),
//     BreweryDb = require('brewerydb-node'),
//     brew      = new BreweryDb();


$(document).ready(function(){

  $('form').on('submit', initialSearch);

});

function initialSearch(event){
  event.preventDefault();

  var $searchItem = $('#searchItem').val();

  $('#searchItem').fadeOut('slow', function(event){
    //Log when done!
    console.log($searchItem);
    $(".landing").hide().delay(2000, generateLanding);
  });
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
