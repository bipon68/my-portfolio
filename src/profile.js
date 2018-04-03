var Profile = React.createClass({

    displayName: "Profile",

    propTypes: {
		    profileData: React.PropTypes.object
	  },

    getProfileDetails: function() {
        // console.log("getProfileDetails");
        var profile = this.props.profileData;
        // console.log(profile);
        return  <div>
                  <div className="profileImg"><img className="img-circle center-block" src={profile.picture} width="200" /></div>
                  <h1 className="text-center">{profile.name}</h1>
                  <h2 className="text-center">{profile.label}</h2>
                  <div className="divider"></div>
                  <ul className="list-unstyled contact-links text-center">
                    <li><i className="fa fa-lg fa-location-arrow"></i>{profile.location.city}, {profile.location.region}, {profile.location.countryCode}</li>
                    <li><i className="fa fa-lg fa-envelope"></i><a href="mailto:{profile.email}">{profile.email}</a></li>
                  </ul>
                  <div className="divider"></div>
                  <ul className="profileLinks list-inline text-center">
                    <li><a className="fa fa-twitter fa-2x" href={'https://twitter.com/'+profile.profiles[0].username}></a></li>
                    <li><a className="fa fa-github fa-2x" href={'https://github.com/'+profile.profiles[1].username}></a></li>
                  </ul>
                </div>
    },

    render: function() {
        if (this.props.profileData !== null) {
            // console.log("request getProfileDetails");
            return (
                <div className="profile">{this.getProfileDetails()}</div>
            )
        }else{
            return (
                <p>Loading</p>
            )
        }
    }
});
