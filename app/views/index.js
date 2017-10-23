import Renderer, { createElement } from "complate-stream";

let renderer = new Renderer("<!DOCTYPE html>");

// This has to register every single view to be used
import DemoIndex from './demo/index.jsx';
import DemoStreaming from './demo/streaming.jsx';
import DemoError from './demo/error.jsx';

renderer.registerView(DemoIndex);
renderer.registerView(DemoStreaming);
renderer.registerView(DemoError);

export default (stream, view, params, callback) => {
	let fragment = params && params._fragment === true;
	return renderer.renderView(view, params, stream, { fragment }, callback);
};
