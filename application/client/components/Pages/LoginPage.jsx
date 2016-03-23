LoginPage = React.createClass({

    mixins: [
        ReactMeteorData,
    ],
	
    getMeteorData() {
        var usersList = Users.find().fetch();
        return {
            usersList
        };
    },

    render() {
        return (
            <div>
                <input className="input-responsive-normal" type="text" ref="loginInput"/>
                <button className="button button-non-selectable button-responsive-normal" onClick={this.logIn} ref="loginButton">Login</button>
            </div>
        );
    },
	
    logIn() {
        var username = this.refs.loginInput.value;
        UserState.logIn(username);
    }

});
