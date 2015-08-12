var media;

initMedia = function(src) {
    console.log('1');
    if(media) {
        media.release();        
    } 


    console.log('1.5');
    media = new Media("/application"+src);
    console.log('2');
    play();        
    

}

getFirstSit = function(sit) {
    /* Change author name */
    var author = sit.author;
    $('.author').text(author);

    var src = sit.src;
    initMedia(src);
}

play = function() {
    // var media = Session.get("media");
    console.log('3');
    media.play();
    $("#toggle").removeClass('glyphicon-play');
    $("#toggle").addClass('glyphicon-pause');
}

pause = function() {
    // var media = Session.get("media");
    media.pause();
    $("#toggle").removeClass('glyphicon-pause');
    $("#toggle").addClass('glyphicon-play');                
}
/*****************************************************************************/
/* SitPage: Event Handlers */
/*****************************************************************************/
Template.SitPage.events({
    "click #toggle": function() {
        if ($("#toggle").hasClass('glyphicon-play')) {
            play();
        } else {
            pause();
        }   

    }, 

    "click .sits-item": function(item) {
        var el = item.currentTarget;

        /* Change author name */
        var author = $(el).attr('data-author');
        $('.author').text(author);

        /* Change audio SRC*/
        var src = $(el).attr('data-src');
        $('.audio-player').attr('src', src);
        console.log('4');
        initMedia(src);
    }
});

/*****************************************************************************/
/* SitPage: Helpers */
/*****************************************************************************/
Template.SitPage.helpers({
    sitList: function() {
        var name = Session.get('sit_name');
        var content = English.findOne({page: name});

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
    $('#header').css('background-color', '#2ECC71');
    var name = Session.get('sit_name');
    var content = English.findOne({page: name});
    getFirstSit(content.sits[0]);
});

Template.SitPage.onDestroyed(function () {
    // var media = Session.get('media');
    if(media) {
        media.release();    
    }
    
});
