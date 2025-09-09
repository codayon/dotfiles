// PREF: disable login manager
user_pref("signon.rememberSignons", false);

// PREF: disable address and credit card manager
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);

// PREF: hide site shortcut thumbnails on New Tab page
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);

// PREF: hide weather on New Tab page
user_pref("browser.newtabpage.activity-stream.showWeather", false);

// PREF: hide dropdown suggestions when clicking on the address bar
user_pref("browser.urlbar.suggest.topsites", false);

// PREF: ask where to save every file
user_pref("browser.download.useDownloadDir", false);

// PREF: disable all DRM content
user_pref("media.eme.enabled", false);

// PREF: hide the UI setting; this also disables the DRM prompt (optional)
user_pref("browser.eme.ui.enabled", false);
