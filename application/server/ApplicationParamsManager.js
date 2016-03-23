Meteor.startup(() => {
	
	let appParams = ApplicationParams.findOne({});
	console.log(appParams);
	if (appParams == undefined) {
		ApplicationParams.insert({
			appTitle: "Moja super apka"
		});
    console.log("dodajemy tutuł");
	}
    
    console.log(ApplicationParams.find({}).fetch());
});

Meteor.methods({
   setAppTitle: (newAppTitle) => {
       let appParams = ApplicationParams.findOne({});
       ApplicationParams.update(
           {
               _id: appParams._id
           },
           {
               $set: {
                   appTitle: newAppTitle,
               }
           },
           {
               upsert: true
           }
       );
   }
});