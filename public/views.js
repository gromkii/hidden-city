function generateBreweryInfo(breweryArray) {
  var BreweryInfo = React.createClass({
    render: function () {
      return React.createElement(
        "section",
        { className: "lists" },
        React.createElement("img", { src: "the thing" }),
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
      );
    }
  });
}
