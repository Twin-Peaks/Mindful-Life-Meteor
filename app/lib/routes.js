
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

/*--------------------
    Routes
--------------------*/

// Open language selector when app starts
Router.route('/', {
  name: 'language_select',
  controller: 'HomeController',
  where: 'client'
});


/*--------------------
    Main Routes
--------------------*/
Router.route('/home', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});


// Sits
Router.route('/sits', {
  name: 'sitlist',
  controller: 'HomeController',
  where: 'client'
});

Router.route('/sit', {
  name: 'sit-page',
  controller: 'HomeController',
  where: 'client'
});

Router.route('/checkin', {
  name: 'checkin',
  controller: 'HomeController',
  where: 'client'
});

Router.route('/definition', {
  name: 'definition',
  controller: 'HomeController',
  where: 'client'
});

/*--------------------
    Sidebar
--------------------*/

Router.route('/about', {
  name: 'about',
  controller: 'HomeController',
  where: 'client'
});

Router.route('/donate', {
  name: 'donate',
  controller: 'HomeController',
  where: 'client'
});

Router.route('/resources', {
  name: 'resources',
  controller: 'HomeController',
  where: 'client'
});