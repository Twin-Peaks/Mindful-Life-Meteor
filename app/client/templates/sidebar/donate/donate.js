/*****************************************************************************/
/* Donate: Event Handlers */
/*****************************************************************************/
Template.Donate.events({
});

/*****************************************************************************/
/* Donate: Helpers */
/*****************************************************************************/
Template.Donate.helpers({
});

/*****************************************************************************/
/* Donate: Lifecycle Hooks */
/*****************************************************************************/
Template.Donate.onCreated(function () {
    // $(document).on 'click', (e) ->
    //   $link = $(e.target).closest('a[href]')
    //   return unless $link.length > 0
    //   url = $link.attr('href')
    //   return unless Paths.isUrl(url)
    //   switch platform
    //     when 'ios'
    //       window.open url, '_system'
    //     when 'android'
    //       navigator.app.loadUrl url, {openExternal: true}
    //   e.preventDefault()

});

Template.Donate.onRendered(function () {
    $('#header').css('background-color', '#519CDF');
    $('#header-title').text("Donate");

});

Template.Donate.onDestroyed(function () {
});
