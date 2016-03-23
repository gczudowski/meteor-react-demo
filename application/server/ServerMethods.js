Meteor.onConnection(function (conn) {
    conn.onClose(function () {

        var userRecord = Users.findOne({connectionId: conn.id, isOnline: true});
        if (userRecord != undefined) {

            Users.update(
                {
                    connectionId: conn.id
                },
                {
                    $set: {
                        isOnline: false,
                        connectionId: null
                    }
                },
                {
                    upsert: true
                }
            );
        }
        console.log('user left');
    });
    console.log('New connection %s from %s', conn.id, conn.clientAddress);
});