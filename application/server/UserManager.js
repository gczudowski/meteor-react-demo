Meteor.startup(() => {
    Users.remove({});
    Meteor.call("addUser", "admin");
});

Meteor.methods({

    addUser: (newUserName) => {
        console.log("UserManager -> addUser: start (" + newUserName + ")");
        Users.insert({
            username: newUserName,
            isOnline: false,
            connectionId: null
        });
        console.log(Users.find().fetch());
    },
	
    removeUser: (userId) => {
        console.log("UserManager -> removeUser: start (" + userId + ")");
        Users.remove({_id: userId});
    },
	
    logIn: (username) => {
        console.log("UserManager -> logIn: start (" + username + ")");
        var userRecord = Users.findOne({username: username});
        if (userRecord != null && userRecord != undefined) {
            Users.update(
                {
                    username: username
                },
                {
                    $set: {
                        isOnline: true,
                        connectionId: DDP._CurrentInvocation.get().connection.id
                    }
                },
                {
                    upsert: true
                }
            );
            return {
                loggedIn: true,
                userId: userRecord._id
            };
        } else {
            return false;
        }
    }
	
});
