import { createElement } from "complate-stream";
import ApplicationLayout from "../layouts/application.jsx";

export function DemoError() {
	return <ApplicationLayout title="Error Demo Page">
    <h1>This site contains an error</h1>
    <BadJSXError></BadJSXError>
  </ApplicationLayout>
};
