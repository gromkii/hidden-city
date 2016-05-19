function generateContactPage(){
  var ContactPage = React.createClass({
    render:function(){
      return(
        <section className="lists">
          <img className = "labelInfo" src={profileURL} />

          <h2>Find me on GitHub: gromkii</h2>
        </section>
      );
    }
  });

  ReactDOM.render(<ContactPage />, document.getElementById('mainSection'));
}
