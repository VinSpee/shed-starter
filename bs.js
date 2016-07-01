var html_out = process.env.npm_package_config_html_out;
var css_out = process.env.npm_package_config_css_out;
var out = process.env.npm_package_config_out;

/**
 * Require Browsersync
 */
var bs = require('browser-sync').create();

/**
 * Run Browsersync with server config
 */
bs.init({
	server: out,
	files: [css_out],
	port: 1337,
	open: false,
	plugins: [
		{
			module: 'bs-html-injector',
			options: {
				files: [html_out]
			}
		}
	]
});
