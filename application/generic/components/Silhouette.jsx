var React = require("react/addons");

var Silhouette = React.createClass({
  render: function () {
    
    //console.log('meow ', this.props.src);

    return (
      <div 
        className={
          [
            "Silhouette",
            this.props.className || "" 
          ].join(" ")
        }
        style={
          { "WebkitMaskImage": `url(${ this.props.src })`}
        }
      >
        <img src={ this.props.src }/>
      </div>
    )
  }
});

module.exports = Silhouette;
