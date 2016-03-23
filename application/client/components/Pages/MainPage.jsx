MainPage = React.createClass({
    
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
				Dodaj nowego użytkownika
                <input type="text" ref="newUserField" className="input-responsive-normal"/>
                <button onClick={this.addUser} className="button-responsive-normal">add User</button>
                <br/><br/>
				Lista użytkowników
                <UniversalList  list={this.data.usersList}
                                fieldsToShow={this.fieldsToShow()}
                />

            </div>
        );
    },
	
    addUser() {
        let newUserName = this.refs.newUserField.value;
        Meteor.call("addUser", newUserName);
        this.refs.newUserField.value = "";
    },
	
    fieldsToShow() {
        return ["username", "isOnline"];
    },

});
