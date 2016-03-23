MainLayout = React.createClass({

    mixins: [
        ReactMeteorData,
    ],
	
    getMeteorData() {
        var applicationParams = ApplicationParams.findOne({});
        return {
            applicationParams
        };
    },

    render() {
        return (
            <div className="layout-wrapper">
                <Header title={this.showTitle()}/>
                <div className="view-wrapper">
                    {this.props.show}
                </div>
            </div>
        );
    },
	
    showTitle() {
      if (this.data.applicationParams != null) {
          return this.data.applicationParams.appTitle;
      }  else {
          return "";
      }
    }

});