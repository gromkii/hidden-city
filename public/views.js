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
