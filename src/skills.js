var Skills = React.createClass({

  displayName: "Skills",

  propTypes: {
      skillsData: React.PropTypes.object
  },

  componentWillMount() {
    this.setState({'keywords':this.props.skillsData[0].keywords});
  },

  render: function() {

    var getSkills = this.state.keywords.map(function(item) {
      return (<li><span className="label label-success">{item}</span></li>)
    });

  	return (
  	  <section className="skills">
        <h2 className="text-uppercase"><i className="fa fa-lg fa-code"></i> Skills</h2>
        <ul className="skills-list list-inline">{getSkills}</ul>
      </section>
  	)
  }

});
