# Firefox Proton Inhibitor

Aims at making Firefox a usable browser again.

This collection of fixes does the following:
* Enables a *good* UI and UX by mostly undoing Firefox's "Proton" UI trainwreck which brought multiple UI design antipatterns
* Disables various privacy jeapoardizing settings such as usage reports and behavior tracking
* Disables third-party crapware
* Re-enables some older convenience features which got disabled for no reason

## How to use

Recursively copy the **contents** of the `profile` directory (*not* the folder itself) to your Firefox profile directory.

You may find out your profile directory easily by typing in `about:support` clicking on "Open Directory" under "Application Basics" > "Profile Directory".

## More useful tweaks

Listed below are a few settings which are worth mentioning but are not necessarily applicable for every installation.
You may set these via advanced preferences (type `about_config` in your address bar).

* `mousewheel.min_line_scroll_amount` = `25` (or any other integer value) - Increases the amount of scroll distance when using the mouse wheel.
* `app.update.enabled` = `false` - Disables update check. Use this only if you don't rely on Firefox self-updating, e.g. if you're letting your distro package manager handle updates.
