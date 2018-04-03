var Work = React.createClass({

  displayName: "Work",

  propTypes: {
      workData: React.PropTypes.object
  },

  getWorkExperience: function() {
    // console.log("getWorkExperience");
    // console.log(this.props.workData);
    var workItems = [];
    $.each(this.props.workData, function(i, val) {
      // console.log(val);
      workItems.push(<WorkItem workItemData={val}/>);
    });
    return workItems;
  },

  render: function() {
      return (
          <section className="work">
            <h2 className="text-uppercase"><i className="fa fa-lg fa-building"></i> Work experience</h2>
            {this.getWorkExperience()}
          </section>
      )
  }

});
