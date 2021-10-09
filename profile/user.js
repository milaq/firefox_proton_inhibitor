//
// Firefox user settings overrides
// Copy to Firefox profile directory as 'user.js'
//

// Enable user chrome (ui) customizations
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Disable menu popup on alt-key
user_pref("ui.key.menuAccessKeyFocuses", false);

// Disable domain autocompletion
user_pref("browser.fixup.alternate.enabled", false);

// Open suggestions only when starting to type
user_pref("browser.urlbar.openViewOnFocus", false);

// Disable telemetry
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.server", "");
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("extensions.shield-recipe-client.enabled", false);
user_pref("experiments.supported", false);
user_pref("experiments.enabled", false);
user_pref("experiments.manifest.uri", "");
user_pref("network.allow-experiments", false);
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
user_pref("browser.discovery.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
user_pref("loop.logDomains", false);
user_pref("browser.send_pings", false);
user_pref("browser.send_pings.require_same_host", true);

// Disable "Pocket" crap
user_pref("extensions.pocket.enabled", false);
user_pref("browser.pocket.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);

// Remove "sponsored" content aka ads
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.sponsored-collections.enabled", false);
user_pref("browser.urlbar.sponsoredTopSites", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.showSponsored", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);

// Disable artificial save file "ok" button delay
user_pref("dom.disable_open_click_delay", 0);

// Disable spell cecker
user_pref("layout.spellcheckDefault", 0);

// Disable PIP indicator
user_pref("media.videocontrols.picture-in-picture.video-toggle.enabled", false);

// Disable unnecessary fancy animations
user_pref("ui.prefersReducedMotion", 1);

// Disable Extension recommendations (Firefox >= 65)
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr", false);

// Disable FlyWeb (discovery of LAN/proximity IoT devices that expose a Web interface)
user_pref("dom.flyweb.enabled", false);

// Disable querying Google Application Reputation database for downloaded binary files
user_pref("browser.safebrowsing.downloads.remote.enabled", false);

// Disable DNS prefetching
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);

// Disable automatic captive portal detection (Firefox >= 52.0)
user_pref("network.captive-portal-service.enabled", false);

// Disable downloading homepage snippets/messages from Mozilla
user_pref("browser.aboutHomeSnippets.updateUrl", "");

// Disable privacy breaking speculative pre-connections
user_pref("network.http.speculative-parallel-limit", 0);

// Disable automatic region update for country specific ads and "features"
user_pref("browser.region.update.enabled", false);
user_pref("browser.region.network.url", "");

// Disable GeoIP lookup on your address to set default search engine region
user_pref("browser.search.countryCode", "US");
user_pref("browser.search.region", "US");
user_pref("browser.search.geoip.url", "");

// Restore compact mode
user_pref("browser.compactmode.show", true);

// Disable quicksuggest aka "Inject Mozilla ads into your address bar"
user_pref("browser.urlbar.suggest.quicksuggest", false);
