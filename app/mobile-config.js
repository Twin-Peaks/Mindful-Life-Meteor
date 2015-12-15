// This section sets up some basic app metadata,
// the entire section is optional.
App.info({
  id: 'com.mindfullife.chris',
  name: 'Mindful Life Project',
  description: 'Empower underserved children through mindfulness and other transformative skills to gain self-awareness, confidence, self-regulation and resilience, leading to lifelong success',
  author: 'Chris Queen',
  email: 'chrisqueen10@gmail.com '
});

// Set up resources such as icons and launch screens.
// App.icons({
//   'iphone': 'icons/icon-60.png',
//   'iphone_2x': 'icons/icon-60@2x.png',
//   // ... more screen sizes and platforms ...
// });

App.icons({
  // iOS
  'iphone': 'public/images/icon-120x.png',
  'iphone_2x': 'public/images/icon-120x.png',
  'iphone_3x': 'public/images/icon-120x.png',
  'ipad': 'public/images/icon-76x.png',
  'ipad_2x': 'public/images/icon-152x.png',
  'android_ldpi': 'public/images/icon-logo.png',
  'android_mdpi': 'public/images/icon-logo.png',
  'android_hdpi': 'public/images/icon-logo.png',
  'android_xhdpi': 'public/images/icon-logo.png'
});

App.launchScreens({
    'iphone_2x': 'public/images/splash.png',
    'iphone5': 'public/images/splash.png',
    'iphone6': 'public/images/splash.png',
    'iphone6p_portrait': 'public/images/splash.png',
    'iphone6p_landscape': 'public/images/splash.png',
    'iphone6p_landscape': 'public/images/splash.png',
    'ipad_portrait': 'public/images/splash.png',
    'ipad_portrait_2x': 'public/images/splash.png',
    'ipad_landscape': 'public/images/splash.png',
    'ipad_landscape_2x': 'public/images/splash.png',
    'ipad_landscape': 'public/images/splash.png',
    'ipad_landscape_2x': 'public/images/splash.png',
    'android_ldpi_portrait': 'public/images/splash.png',
    'android_ldpi_landscape': 'public/images/splash.png',
    'android_mdpi_portrait': 'public/images/splash.png',
    'android_mdpi_landscape': 'public/images/splash.png',
    'android_hdpi_portrait': 'public/images/splash.png',
    'android_hdpi_landscape': 'public/images/splash.png',
    'android_xhdpi_portrait': 'public/images/splash.png',
    'android_xhdpi_landscape': 'public/images/splash.png'
});

// Set PhoneGap/Cordova preferences
App.setPreference('BackgroundColor', '0xff0000ff');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('AllowInlineMediaPlayback', true);
App.setPreference('BackupWebStorage', 'none');
App.accessRule('http://*');
App.accessRule('https://*');
App.accessRule('https://w.soundcloud.com/*');
App.accessRule('*');