"use strict";

var About = React.createClass({

    displayName: "About",

    propTypes: {
        aboutData: React.PropTypes.object
    },

    render: function render() {
        return React.createElement(
            "section",
            { className: "about" },
            React.createElement(
                "h2",
                { className: "text-uppercase" },
                React.createElement("i", { className: "fa fa-lg fa-user" }),
                " About"
            ),
            React.createElement(
                "div",
                null,
                this.props.aboutData
            )
        );
    }

});
"use strict";

var Resume = React.createClass({

  displayName: "Resume",

  getInitialState: function getInitialState() {
    return {
      jsonObj: null
    };
  },

  componentDidMount: function componentDidMount() {
    $.get(this.props.source, (function (result) {
      if (this.isMounted()) {
        // this.setState({jsonObj: JSON.parse(result)});
        this.setState({ jsonObj: result });
      }
    }).bind(this));
  },

  render: function render() {
    if (this.state.jsonObj) {
      // console.log(this.state.jsonObj.basics);
      var profile = this.state.jsonObj.basics;
      var about = profile.summary;
      var work = this.state.jsonObj.work;
      var education = this.state.jsonObj.education;
      var skills = this.state.jsonObj.skills;
      return React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "aside",
            { className: "col-md-4" },
            React.createElement(
              "div",
              { className: "helper-block" },
              React.createElement(Profile, { profileData: profile })
            )
          ),
          React.createElement(
            "main",
            { className: "col-md-8" },
            React.createElement(
              "div",
              { className: "helper-block" },
              React.createElement(About, { aboutData: about }),
              React.createElement(Work, { workData: work }),
              React.createElement(Skills, { skillsData: skills }),
              React.createElement(Education, { educationData: education })
            )
          )
        )
      );
    } else {
      return React.createElement(
        "p",
        null,
        "Loading"
      );
    }
  }
});

React.render(React.createElement(Resume, { source: "biponresume.json" }), document.getElementById('app'));
"use strict";

var Education = React.createClass({

  displayName: "Education",

  propTypes: {
    educationData: React.PropTypes.object
  },

  render: function render() {
    var getEducation = this.props.educationData.map(function (item) {
      var startdate = moment(item.startDate).format("MMM, YYYY");
      var enddate = moment(item.endDate).format("MMM, YYYY");
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h3",
          null,
          item.studyType,
          " ",
          item.area
        ),
        React.createElement(
          "h4",
          null,
          item.institution
        ),
        React.createElement(
          "p",
          null,
          "Studied: ",
          startdate,
          " - ",
          enddate
        )
      );
    });
    return React.createElement(
      "section",
      { className: "education" },
      React.createElement(
        "h2",
        { className: "text-uppercase" },
        React.createElement("i", { className: "fa fa-lg fa-mortar-board" }),
        " Education"
      ),
      getEducation
    );
  }

});
"use strict";

var Profile = React.createClass({

    displayName: "Profile",

    propTypes: {
        profileData: React.PropTypes.object
    },

    getProfileDetails: function getProfileDetails() {
        // console.log("getProfileDetails");
        var profile = this.props.profileData;
        // console.log(profile);
        return React.createElement(
            "div",
            null,
            React.createElement(
                "div",
                { className: "profileImg" },
                React.createElement("img", { className: "img-circle center-block", src: profile.picture, width: "200" })
            ),
            React.createElement(
                "h1",
                { className: "text-center" },
                profile.name
            ),
            React.createElement(
                "h2",
                { className: "text-center" },
                profile.label
            ),
            React.createElement("div", { className: "divider" }),
            React.createElement(
                "ul",
                { className: "list-unstyled contact-links text-center" },
                React.createElement(
                    "li",
                    null,
                    React.createElement("i", { className: "fa fa-lg fa-location-arrow" }),
                    profile.location.city,
                    ", ",
                    profile.location.region,
                    ", ",
                    profile.location.countryCode
                ),
                React.createElement(
                    "li",
                    null,
                    React.createElement("i", { className: "fa fa-lg fa-envelope" }),
                    React.createElement(
                        "a",
                        { href: "mailto:{profile.email}" },
                        profile.email
                    )
                )
            ),
            React.createElement("div", { className: "divider" }),
            React.createElement(
                "ul",
                { className: "profileLinks list-inline text-center" },
                React.createElement(
                    "li",
                    null,
                    React.createElement("a", { className: "fa fa-twitter fa-2x", href: 'https://twitter.com/' + profile.profiles[0].username })
                ),
                React.createElement(
                    "li",
                    null,
                    React.createElement("a", { className: "fa fa-github fa-2x", href: 'https://github.com/' + profile.profiles[1].username })
                )
            ),
            React.createElement("div", { className: "divider" }),
            React.createElement(
                "p",
                null,
                "Built this site with ",
                React.createElement(
                    "a",
                    { href: "https://facebook.github.io/react/" },
                    "React"
                )
            )
        );
    },

    render: function render() {
        if (this.props.profileData !== null) {
            // console.log("request getProfileDetails");
            return React.createElement(
                "div",
                { className: "profile" },
                this.getProfileDetails()
            );
        } else {
            return React.createElement(
                "p",
                null,
                "Loading"
            );
        }
    }
});
"use strict";

var Skills = React.createClass({

  displayName: "Skills",

  propTypes: {
    skillsData: React.PropTypes.object
  },

  componentWillMount: function componentWillMount() {
    this.setState({ 'keywords': this.props.skillsData[0].keywords });
  },

  render: function render() {

    var getSkills = this.state.keywords.map(function (item) {
      return React.createElement(
        "li",
        null,
        React.createElement(
          "span",
          { className: "label label-success" },
          item
        )
      );
    });

    return React.createElement(
      "section",
      { className: "skills" },
      React.createElement(
        "h2",
        { className: "text-uppercase" },
        React.createElement("i", { className: "fa fa-lg fa-code" }),
        " Skills"
      ),
      React.createElement(
        "ul",
        { className: "skills-list list-inline" },
        getSkills
      )
    );
  }

});
"use strict";

var Work = React.createClass({

  displayName: "Work",

  propTypes: {
    workData: React.PropTypes.object
  },

  getWorkExperience: function getWorkExperience() {
    // console.log("getWorkExperience");
    // console.log(this.props.workData);
    var workItems = [];
    $.each(this.props.workData, function (i, val) {
      // console.log(val);
      workItems.push(React.createElement(WorkItem, { workItemData: val }));
    });
    return workItems;
  },

  render: function render() {
    return React.createElement(
      "section",
      { className: "work" },
      React.createElement(
        "h2",
        { className: "text-uppercase" },
        React.createElement("i", { className: "fa fa-lg fa-building" }),
        " Work experience"
      ),
      this.getWorkExperience()
    );
  }

});
"use strict";

var WorkItem = React.createClass({

  displayName: "WorkItem",

  propTypes: {
    workItemData: React.PropTypes.object
  },

  getWorkDates: function getWorkDates() {
    var startdate = moment(this.props.workItemData.startDate).format("MMM, YYYY");
    var enddate;
    if (this.props.workItemData.endDate !== "") {
      enddate = moment(this.props.workItemData.endDate).format("MMM, YYYY");
    } else {
      enddate = "Present";
    }

    return React.createElement(
      "span",
      { "class": "startdate" },
      startdate,
      " - ",
      enddate
    );
  },

  render: function render() {
    var getHighlights = this.props.workItemData.highlights.map(function (item) {
      return React.createElement(
        "li",
        null,
        item
      );
    });
    return React.createElement(
      "div",
      { className: "workItem" },
      React.createElement(
        "h3",
        null,
        this.props.workItemData.position,
        ", ",
        React.createElement(
          "span",
          null,
          this.props.workItemData.company
        )
      ),
      React.createElement(
        "p",
        { className: "workDates" },
        this.getWorkDates()
      ),
      React.createElement(
        "p",
        null,
        this.props.workItemData.summary
      ),
      React.createElement(
        "ul",
        null,
        getHighlights
      )
    );
  }

});
