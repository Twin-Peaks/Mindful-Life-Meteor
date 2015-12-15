/*****************************************************************************/
/* LanguageSelect: Event Handlers */
/*****************************************************************************/
Template.LanguageSelect.events({

    "click #english-btn": function() {
        Session.set('language', 'english');
        Router.go("/home");
    }, 
    "click #spanish-btn": function() {
        Session.set('language', 'spanish');
        Router.go("/home");
    }
});

/*****************************************************************************/
/* LanguageSelect: Helpers */
/*****************************************************************************/
Template.LanguageSelect.helpers({
});

/*****************************************************************************/
/* LanguageSelect: Lifecycle Hooks */
/*****************************************************************************/
Template.LanguageSelect.onCreated(function () {
});

Template.LanguageSelect.onRendered(function () {
    $('.home-btn').css('visibility', 'visible');
    $('#header-title').text("Select Language");
    $('#header').css('background-color', '#359CD8');
});

Template.LanguageSelect.onDestroyed(function () {
});
