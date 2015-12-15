/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({

    "click #checkin-btn": function(e) {
        e.preventDefault();
        // Router.go(e.currentTarget.href);
        Router.go("/checkin");
    },

    "click #sits-btn": function(e) {
        e.preventDefault();
        Router.go("/sits");
    },

    "click #def-btn": function(e) {
        e.preventDefault();
        Router.go("/definition");
    }
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
    checkin: function() {
        if(Session.get('language') == 'spanish') {
            return "Antes de Empezar";
        } else {
            return "Mindful Check-in"
        }
    }, 
    sits: function() {
        if(Session.get('language') == 'spanish') {
            return "Practica de Atencion Plena ";
        } else {
            return "Mindful Sits"
        }
    }, 
    definition1: function() {
        if(Session.get('language') == 'spanish') {
            return "¿Qué es";
        } else {
            return "What is";
        }
    }, 
    definition2: function() {
        if(Session.get('language') == 'spanish') {
            return "Atencion Plena?";
        } else {
            return "Mindfulness?"
        }
    }

});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.onCreated(function () {
});

Template.Home.onRendered(function () {
    $('.home-btn').css('visibility', 'hidden');
    $('#header-title').text("Mindful Life");
    $('#header').css('background-color', '#163850');
});

Template.Home.onDestroyed(function () {
});
