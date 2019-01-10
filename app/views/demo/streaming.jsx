import { createElement } from "complate-stream";
import ApplicationLayout from "../layouts/application.jsx";

export default ({ sleep }) => {
	return <ApplicationLayout title="Streaming Demo Page">
    <h1>Some Streaming for you</h1>
		<p>Hope you're using puma...</p>
		{() => sleep()}
		<p>We won't let you wait for too long.</p>
		{() => sleep()}
		<p>But let's see what comes next...</p>
		{() => sleep()}
		<p>We're done.</p>
  </ApplicationLayout>
};
