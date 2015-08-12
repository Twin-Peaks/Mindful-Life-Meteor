getDefContent = function(checkin) {
    var data = {};
    if(Session.get('language') == 'spanish') {
        data = Spanish.findOne({page: checkin});    
    } else {
        data = English.findOne({page: checkin});
    }
    
    var lines = data.lines;
    var lines_array = [];
    for(i in lines) {
        lines_array.push({line: lines[i]});
    }
    var copy = {
        header: data.header, 
        lines: lines_array
    }

    return copy;
}

/*****************************************************************************/
/* Definition: Event Handlers */
/*****************************************************************************/
Template.Definition.events({
});

/*****************************************************************************/
/* Definition: Helpers */
/*****************************************************************************/
Template.Definition.helpers({
    definition: function() {
        var content = {};
        if(Session.get('language') == 'spanish') {
            content = Spanish.findOne({page: 'definition'});    
        } else {
            content = English.findOne({page: 'definition'});
        }
        return content;
    },
});

/*****************************************************************************/
/* Definition: Lifecycle Hooks */
/*****************************************************************************/
Template.Definition.onCreated(function () {
});

Template.Definition.onRendered(function () {
    $('#header').css('background-color', '#F0C418');
});

Template.Definition.onDestroyed(function () {
});
