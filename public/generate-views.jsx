function generateBreweryInfo(breweryArray){
  var BreweryInfo = React.createClass({
    render:function(){
      return (
        <section className="lists">
        <img src="the thing" />
        <ul>
        {breweryArray.map(function(element){
            return (<li>{element.name}</li>);
          })}
        </ul>
        </section>
      );
    }
  });
}
