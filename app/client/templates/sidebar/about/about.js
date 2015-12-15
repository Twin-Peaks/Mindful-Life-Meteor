/*****************************************************************************/
/* About: Event Handlers */
/*****************************************************************************/
Template.About.events({
});

/*****************************************************************************/
/* About: Helpers */
/*****************************************************************************/
Template.About.helpers({
    about: function() {
        var content = English.findOne({page: "about"}); 
        return content;
    }
});

/*****************************************************************************/
/* About: Lifecycle Hooks */
/*****************************************************************************/
Template.About.onCreated(function () {
});

Template.About.onRendered(function () {
    $('.home-btn').css('visibility', 'visible');
    $('#header').css('background-color', '#519CDF');
    $('#header-title').text("About");

});

Template.About.onDestroyed(function () {
});
