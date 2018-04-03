var About = React.createClass({

  displayName: "About",

  propTypes: {
      aboutData: React.PropTypes.object
  },

  render: function() {
      return (
          <section className="about">
            <h2 className="text-uppercase"><i className="fa fa-lg fa-user"></i> About</h2>
            <div>{this.props.aboutData}</div>
          </section>
      )
  }

});
