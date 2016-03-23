Users = new Mongo.Collection("users");
ApplicationParams = new Mongo.Collection("applicationParams");

if (Meteor.isServer) {
    Meteor.publish("users", () => {
        return Users.find();
    });
    Meteor.publish("applicationParams", () => {
        return ApplicationParams.find();
    });
}

if (Meteor.isClient) {
    Meteor.startup(() => {
        Meteor.subscribe("users");
        Meteor.subscribe("applicationParams");
    });
}