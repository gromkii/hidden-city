function generateHomePage() {
  var HomePage = React.createClass({
    render: function () {
      return React.createElement(
        "section",
        { "class": "landing", id: "searchLanding" },
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
}
