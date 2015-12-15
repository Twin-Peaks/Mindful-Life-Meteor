/*****************************************************************************/
/* SitPage: Event Handlers */
/*****************************************************************************/
Template.SitPage.events({
});

/*****************************************************************************/
/* SitPage: Helpers */
/*****************************************************************************/
Template.SitPage.helpers({
    sitList: function() {
        var name = Session.get('sit_name');
        var content = {};
        if(Session.get('language') == 'spanish') {
            content = Spanish.findOne({page: name}); 
        } else {
            content = English.findOne({page: name}); 
        }

        return content;

    },
    sitName: function() {
        return Session.get('sit_name');
    }
});

/*****************************************************************************/
/* SitPage: Lifecycle Hooks */
/*****************************************************************************/
Template.SitPage.onCreated(function () {

});

Template.SitPage.onRendered(function () {
    $('.home-btn').css('visibility', 'visible');
    $('#header').css('background-color', '#2ECC71');
    var name = Session.get('sit_name');
    $('#header-title').text(name);
    
    var content = English.findOne({page: name});
});

Template.SitPage.onDestroyed(function () {

});
