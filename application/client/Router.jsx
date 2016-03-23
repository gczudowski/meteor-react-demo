FlowRouter.route( '/', {
    action: function() {
       ReactLayout.render(MainLayout, {show:<LoginPage/>});
    }
});

FlowRouter.route( '/main', {
    action: function() {
        ReactLayout.render(MainLayout, {show:<MainPage/>});
    }
});

FlowRouter.route( '/bmi', {
    action: function() {
       ReactLayout.render(MainLayout, {show:<CalculatePage/>});
    }
});

FlowRouter.route( '/admin', {
    action: function() {
        ReactLayout.render(MainLayout, {show:<AdminPage/>});
    }
});

FlowRouter.triggers.enter([function(context, redirect){
    var current = FlowRouter.current();
    var currentPath = current.path;
    if(UserState.getLoggedIn() != 1 && currentPath != "/"){
        console.log('redirecting to login page');
        FlowRouter.go('/');
    }
}]);