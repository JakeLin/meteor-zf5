Package.describe({
  summary: "Foundation 5 with Sass for Meteor",
  version: "0.0.14",
  name: "juliancwirko:zf5",
  git: "https://github.com/juliancwirko/meteor-zf5.git",
});

Package.on_use(function (api) {
    api.imply('fourseven:scss@0.9.6');
	api.use([
		'jquery@1.0.0',
		'fourseven:scss@0.9.6',
	], 'client');

	api.add_files([
        'js/vendor/modernizr.js',
        'js/foundation.js'
	], 'client');

    api.add_files([

        'scss/normalize.scss',
        'scss/foundation.scss',

        'scss/foundation/_functions.scss',
        'scss/foundation/_settings.scss',

        'scss/foundation/components/_xy-center.scss',
        'scss/foundation/components/_visibility.scss',
        'scss/foundation/components/_type.scss',
        'scss/foundation/components/_top-bar.scss',
        'scss/foundation/components/_tooltips.scss',
        'scss/foundation/components/_toolbar.scss',
        'scss/foundation/components/_thumbs.scss',
        'scss/foundation/components/_tabs.scss',
        'scss/foundation/components/_tables.scss',
        'scss/foundation/components/_switches.scss',
        'scss/foundation/components/_switch.scss',
        'scss/foundation/components/_sub-nav.scss',
        'scss/foundation/components/_split-buttons.scss',
        'scss/foundation/components/_side-nav.scss',
        'scss/foundation/components/_reveal-new.scss',
        'scss/foundation/components/_reveal.scss',
        'scss/foundation/components/_range-slider.scss',
        'scss/foundation/components/_progress-bars.scss',
        'scss/foundation/components/_pricing-tables.scss',
        'scss/foundation/components/_panels.scss',
        'scss/foundation/components/_pagination.scss',
        'scss/foundation/components/_orbit.scss',
        'scss/foundation/components/_offcanvas.scss',
        'scss/foundation/components/_magellan.scss',
        'scss/foundation/components/_labels.scss',
        'scss/foundation/components/_keystrokes.scss',
        'scss/foundation/components/_joyride.scss',
        'scss/foundation/components/_inline-lists.scss',
        'scss/foundation/components/_icon-bar.scss',
        'scss/foundation/components/_iconbar.scss',
        'scss/foundation/components/_grid.scss',
        'scss/foundation/components/_global.scss',
        'scss/foundation/components/_forms.scss',
        'scss/foundation/components/_flex-video.scss',
        'scss/foundation/components/_dropdown-buttons.scss',
        'scss/foundation/components/_dropdown.scss',
        'scss/foundation/components/_clearing.scss',
        'scss/foundation/components/_buttons.scss',
        'scss/foundation/components/_button-groups.scss',
        'scss/foundation/components/_breadcrumbs.scss',
        'scss/foundation/components/_block-grid.scss',
        'scss/foundation/components/_alert-boxes.scss',
        'scss/foundation/components/_accordion.scss'

    ], 'client', {isAsset: true});
});