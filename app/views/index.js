import Renderer, { createElement } from "complate-stream";
import * as views from "./manifest";

let renderer = new Renderer("<!DOCTYPE html>");

Object.keys(views).forEach(viewName => {
	renderer.registerView(views[viewName]);
});

export default (stream, view, params, callback) => {
	let fragment = params && params._fragment === true;
	return renderer.renderView(view, params, stream, { fragment }, callback);
};
