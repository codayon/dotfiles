/****************************************************************************
 * START: MY OVERRIDES                                                      *
 ****************************************************************************/
// visit https://github.com/yokoffing/Betterfox/wiki/Common-Overrides
// visit https://github.com/yokoffing/Betterfox/wiki/Optional-Hardening
// Enter your personal overrides below this line:

// PREF: revert back to Standard ETP
user_pref('browser.contentblocking.category', 'standard');

// PREF: disable login manager
user_pref('signon.rememberSignons', false);

// PREF: disable address and credit card manager
user_pref('extensions.formautofill.addresses.enabled', false);
user_pref('extensions.formautofill.creditCards.enabled', false);

// PREF: do not allow embedded tweets, Instagram, Reddit, and Tiktok posts
user_pref('urlclassifier.trackingSkipURLs', '');
user_pref('urlclassifier.features.socialtracking.skipURLs', '');

// PREF: enable HTTPS-Only Mode
// Warn me before loading sites that don't support HTTPS
// when using Private Browsing windows.
user_pref('dom.security.https_only_mode_pbm', true);
user_pref('dom.security.https_only_mode_error_page_user_suggestions', true);

// PREF: hide site shortcut thumbnails on New Tab page
user_pref('browser.newtabpage.activity-stream.feeds.topsites', false);

// PREF: hide weather on New Tab page
user_pref('browser.newtabpage.activity-stream.showWeather', false);

// PREF: hide dropdown suggestions when clicking on the address bar
user_pref('browser.urlbar.suggest.topsites', false);

// PREF: ask where to save every file
user_pref('browser.download.useDownloadDir', false);

// PREF: ask whether to open or save new file types
user_pref('browser.download.always_ask_before_handling_new_types', true);

// PREF: display the installation prompt for all extensions
user_pref('extensions.postDownloadThirdPartyPrompt', false);
