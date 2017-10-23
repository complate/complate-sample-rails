import Renderer, { createElement } from "complate-stream";
import registerViews from "./manifest";

let renderer = new Renderer("<!DOCTYPE html>");

registerViews(renderer);

export default (stream, view, params, callback) => {
	let fragment = params && params._fragment === true;
	return renderer.renderView(view, params, stream, { fragment }, callback);
};
