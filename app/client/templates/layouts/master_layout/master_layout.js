Template.MasterLayout.helpers({
});

Template.MasterLayout.events({
    'click .brand-logo': function(e) {
        e.preventDefault();
        Router.go("/home");
    }, 
    'click .home-btn': function(e) {
        e.preventDefault();
        Router.go("/home");
    }
});


Template.MasterLayout.rendered = function() {
    // Don't connect to the server
    Meteor.connection._stream._retryTimeout = function(){ return 365 * 24 * 60 * 60 * 1000};
    Meteor.connection._stream._lostConnection();
    $(document).ready(function() {
        $(".button-collapse").sideNav({
            edge: 'right'
        }); 

        $('.side-item').click(function() {
            $('.button-collapse').sideNav('hide');
        })
    })
    
}

