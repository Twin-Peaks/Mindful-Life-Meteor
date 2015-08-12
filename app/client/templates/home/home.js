/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({

    "click #checkin-btn": function() {
        Router.go("/checkin");
    },

    "click #sits-btn": function() {
        Router.go("/sits");
    },

    "click #def-btn": function() {
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
            return "Checkin"
        }
    }, 
    sits: function() {
        if(Session.get('language') == 'spanish') {
            return "Practica de Atencion Plena ";
        } else {
            return "Sits"
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
    $('#header').css('background-color', '#3B87CC');
});

Template.Home.onDestroyed(function () {
});
