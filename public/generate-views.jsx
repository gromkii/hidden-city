function generateHomePage(){
  var HomePage = React.createClass({
    render:function(){
      return (
        <section class="landing" id="searchLanding">

            <h1>Hidden City Brews</h1>
            <h2>Where do you wanna go?</h2>

            <form id="searchForm">
                <input type="text" id="searchItem" name="searchField" />
            </form>

        </section>
      );
    }
  });
}
