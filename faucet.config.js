"use strict";

module.exports = {
	js: [{
		source: "./app/views/index.js",
		target: "./dist/bundle.js",
		exports: "render",
		esnext: true,
		jsx: { pragma: "createElement" }
	}]
};
