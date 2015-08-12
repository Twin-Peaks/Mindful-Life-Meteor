getCheckinContent = function(checkin) {
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
/* Checkin: Event Handlers */
/*****************************************************************************/
Template.Checkin.events({

});

/*****************************************************************************/
/* Checkin: Helpers */
/*****************************************************************************/
Template.Checkin.helpers({
    templateGestures: {
        'swipeleft .checkin-content': function (event, templateInstance) {
            var num = Session.get('checkin_num');
            if(num == 4) {
                Session.set("checkin_num", 1);
            } else {
                num += 1;
                Session.set("checkin_num", num);
            }

            var content = getCheckinContent('checkin' + num);
            Session.set("checkin_content", content)
        }
    },

    content1: function() {
        var content = getCheckinContent('checkin1');
        return Session.get("checkin_content");
    },

    content2: function() {
        var content = getCheckinContent('checkin2');
        return content;
    }, 

    content3: function() {
        var content = getCheckinContent('checkin3');
        return content;
    }, 

    content4: function() {
        var content = getCheckinContent('checkin4');
        return content;
    }
});

/*****************************************************************************/
/* Checkin: Lifecycle Hooks */
/*****************************************************************************/
Template.Checkin.onCreated(function () {
});

Template.Checkin.onRendered(function () {
    $('#header').css('background-color', '#DB5C5C');
    Session.set("checkin_num", 1);
    var content = getCheckinContent('checkin1');
    Session.set("checkin_content", content)
});

Template.Checkin.onDestroyed(function () {
});
