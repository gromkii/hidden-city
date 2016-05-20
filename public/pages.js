var pages = {
  initialSearch: function(event){
    event.preventDefault();

    var searchItem = $("#searchItem").val();
    $('#searchItem').fadeOut('slow');
    $('.landing h2').slideUp('slow');
    $('.landing h1').slideUp('slow',function(){
      $('.landing').fadeOut('slow', function(){
        $('.landing').remove();
      });
    });


    var firstQuery = 'https://dax-cors-anywhere.herokuapp.com/https://api.brewerydb.com/v2/search?q='+ searchItem +'&withLocations=Y&type=brewery&key=44665a51583c7e1afe237d1dfa5c45b9&format=json';

    var ajaxTest = $.ajax({
      type:'GET',
      dataType:'json',
      url:firstQuery
    }).done(pages.pushData);
  },


  pushData: function(data){
    var resultsArray = data.data;

    if (data.hasOwnProperty('data')){
      pages.generatePreviews(resultsArray);
    } else {
      $('section').fadeOut('slow',generateErrorPage);
    }
  },

  generateHomePage:function(){
    $('section').fadeOut('slow');

    var HomePage = React.createClass({
      render: function () {
        return React.createElement(
          "section",
          { "className": "landing", id: "searchLanding" },
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

    ReactDOM.render(React.createElement(HomePage, null), document.getElementById('mainSection'));
    $('form').on('submit', pages.initialSearch);
    $('.landing').hide().fadeIn('slow');

  },

  generateAboutPage: function(){
    $('section').fadeOut('slow');

    var AboutPage = React.createClass({
      render: function () {
        return React.createElement(
          "section",
          { className: "lists" },
          React.createElement("img", {src: "./images/logo.png" }),
          React.createElement(
            "p",
            null,
            "Hidden City Brews is a single page web application created by Dax Richardson. Using the BreweryDB API, ReactJS, and jQuery, users are able to search for breweries, and then retrieve a list of beers from that particular brewery. This project was created for educational purposes, and not inteded for commercial use!"
          )
        );
      }
    });

    ReactDOM.render(React.createElement(AboutPage, null), document.getElementById('mainSection'));
    $('.lists').hide().fadeIn('slow');
  },

   generateContactPage: function(){
    $('section').fadeOut('slow');

    var profileURL;
    var githubProfile = $.ajax({
      type:'GET',
      dataType:'json',
      url:'https://api.github.com/users/gromkii'
    }).done(function(data){
      profileURL = data.avatar_url;

      //Do React stuff.
      var ContactPage = React.createClass({
        render: function () {
          return React.createElement(
            "section",
            { className: "contactPage" },
            React.createElement(
              "div",
              { "className": "contactObject" },
              React.createElement("img", { src: profileURL }),
              React.createElement(
                "h2",
                null,
                "GitHub: gromkii"
              ),
              React.createElement(
                "h2",
                null,
                "Twitter: @v3rsac3raptor"
              )
            )
          );
        }
      });

      ReactDOM.render(React.createElement(ContactPage, null), document.getElementById('mainSection'));
      $('.lists').hide().fadeIn('slow');
    });
  },

  generatePreviews: function(resultsArray) {
    var ImageSection = React.createClass({
      render: function () {
        return React.createElement(
          "section",
          { className: "images" },
          resultsArray.map(function (element) {
            if (element.hasOwnProperty('images')) {
              return React.createElement(
                "div",
                { className: "previewObject",id:element.id },
                React.createElement("img", { className: "preview", src: element.images.squareMedium}),
                React.createElement(
                  "h3",
                  null,
                  element.name
                )
              );
            } else {
              return React.createElement(
                "div",
                { className: "previewObject",id:element.id},
                React.createElement(
                  "img",
                  { className: "preview",src:'images/beer.png',}
                ),
                React.createElement(
                  "h3",
                  null,
                  element.name
                )
              );
            }
          })
        );
      }
    });

    ReactDOM.render(React.createElement(ImageSection, null), document.getElementById('mainSection'));

    $('.images').hide().fadeIn('slow');



    $('.previewObject').on('click','img',function(event){
      var clickedLogo = $(this).attr('src');
      console.log(clickedLogo);

      var moreInfo = $.ajax({
        type:'GET',
        dataType:'json',
        url: 'https://dax-cors-anywhere.herokuapp.com/https://api.brewerydb.com/v2/brewery/' + $(this.parentNode).attr('id') +'/beers?withBreweries&key=44665a51583c7e1afe237d1dfa5c45b9&format=json/'
      }).done(function(data){
        breweryArray = data.data;
        pages.generateBreweryInfo(breweryArray,resultsArray,clickedLogo);
      });
    });
  },

  generateBreweryInfo: function(breweryArray,resultsArray,clickedLogo){

    //TODO: Get this img.src and this name!!

    $('section').fadeOut('slow');
    var BreweryInfo = React.createClass({
      render: function () {
        return React.createElement(
          "section",
          { className: "lists" },
          React.createElement("div",{className:"listObject"},
          React.createElement("img", { src:clickedLogo, className:"labelInfo" }),
          React.createElement("h2",null,"Beer Listing"),
          React.createElement(
            "ul",
            null,
            breweryArray.map(function (element) {
              return React.createElement(
                "li",
                null,
                element.name
              );
            })
          )
        ),

          React.createElement("div", {className:"backButton"},"Go Back")
        );
      }
    });
    ReactDOM.render(React.createElement(BreweryInfo,null), document.getElementById('mainSection'));
    $('.backButton').on('click',function(){
      pages.generatePreviews(resultsArray);
    });
    $('.lists').hide().fadeIn('slow');



  },

  generateErrorPage: function(){
    var ErrorPage = React.createClass({
      render:function(){
        return (
          React.createElement("section",{className:"contactPage"},

            React.createElement("div",{className:"contactObject"},
            React.createElement('h2',null,"Something went wrong!")
          ))
        );
      }
    });
    ReactDOM.render(React.createElement(ErrorPage, null),document.getElementById('mainSection'));
  }

};
