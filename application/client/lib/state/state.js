if (Meteor.isClient) {
    Meteor.startup(() => {
        UserState.setLoggedIn();
        UserState.setUsername();
        UserState.setUserId();
        UserState.setLoggingIn();
    });
}

UserState = new class {
    setLoggedIn(loginStatus = false) {
        Session.set("loggedIn", loginStatus);
    }
    getLoggedIn() {
        return Session.get("loggedIn");
    }
    setLoggingIn(loggingInStatus = false) {
        Session.set("loggingIn", loggingInStatus);
    }
    getLoggingIn() {
        return Session.get("loggingIn", false);
    }
    setUsername(username = "unknown") {
        Session.set("userName", username);
    }
    getUsername() {
        return Session.get("userName");
    }
    setUserId(userId = 0) {
        Session.set("userId", userId);
    }
    getUserId() {
        return Session.get("userId");
    }
    logIn(username = "test2") {
        if (!this.getLoggingIn()) {
            //this.setLoggingIn(true);
            //let beginTimestamp = new Date().getTime();
            Meteor.call("logIn", username, (err, userData) => {
                console.log("login" + userData);
                console.log("login" + userData.loggedIn);
                if (userData.loggedIn) {
                    console.log("login2");
                    this.setLoggedIn(true);
                    this.setUsername(username);
                    this.setUserId(userData.userId);
                    FlowRouter.go('/main');
                }
            });
        }
    }
    logOut() {
        this.setLoggedIn(false);
        this.setUsername()
        this.setUserId();
        FlowRouter.go('/');
    }
}