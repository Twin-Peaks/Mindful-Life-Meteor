// This section sets up some basic app metadata,
// the entire section is optional.
App.info({
  id: 'com.mindfullife.chris',
  name: 'Mindful Life Project',
  description: 'Mindful Life Project empowers students through Mindfulness',
  author: 'Chris Queen',
  email: 'chrisqueen10@gmail.com '
});

// Set up resources such as icons and launch screens.
// App.icons({
//   'iphone': 'icons/icon-60.png',
//   'iphone_2x': 'icons/icon-60@2x.png',
//   // ... more screen sizes and platforms ...
// });

App.launchScreens({
  'iphone6': 'public/images/splash.png',
  'iphone5': 'public/images/splash.png'
  // 'iphone_2x': 'splash/Default@2x~iphone.png',
  // ... more screen sizes and platforms ...
});

// Set PhoneGap/Cordova preferences
App.setPreference('BackgroundColor', '0xff0000ff');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('AllowInlineMediaPlayback', true);
App.setPreference('BackupWebStorage', 'none');