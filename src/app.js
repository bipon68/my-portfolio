var Resume = React.createClass({

    displayName: "Resume",

    getInitialState: function() {
        return {
            jsonObj: null
        }
    },

    componentDidMount: function() {
      $.get(this.props.source, function(result) {
        if (this.isMounted()) {
    			// this.setState({jsonObj: JSON.parse(result)});
    			this.setState({jsonObj: result});
        }
  		}.bind(this));
  	},

    render: function() {
        if (this.state.jsonObj) {
          // console.log(this.state.jsonObj.basics);
          var profile = this.state.jsonObj.basics;
          var about = profile.summary;
          var work = this.state.jsonObj.work;
          var education = this.state.jsonObj.education;
          var skills = this.state.jsonObj.skills;
          return (
              <div className="container">
                <div className="row">
                  <aside className="col-md-4">
                    <div className="helper-block">
                      <Profile profileData={profile} />
                    </div>
                  </aside>
                  <main className="col-md-8">
                    <div className="helper-block">
                      <About aboutData={about} />
                      <Work workData={work} />
                      <Skills skillsData={skills} />
                      <Education educationData={education} />
                    </div>
                  </main>
                </div>
              </div>
          )
        }else{
          return <p>Loading</p>
        }
    }
});

React.render(
  <Resume source="biponresume.json" />,
  document.getElementById('app')
);
