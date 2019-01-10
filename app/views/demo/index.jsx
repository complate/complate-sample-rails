import { createElement } from "complate-stream";

export default ({array}) => {
	return <span>
		<h1>Complate Rails Demo App</h1>

		<h3>Parameter <em>array</em></h3>
		<code>{array.join(', ')}</code>

		<h3>Rails helpers</h3>
		<tt>rails.url_for()</tt>: <code>{rails.url_for()}</code><br />
		<tt>rails.form_authenticity_token()</tt>: <code>{rails.form_authenticity_token()}</code><br />
		<tt>rails.form_tag()</tt>: <code>{rails.form_tag(rails.url_for())}</code>

		<h3>Further Stuff</h3>
		<a href={rails.streaming_url()}>Streaming</a> (Make sure your server supports this...)

	</span>;
};
