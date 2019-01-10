import { createElement } from "complate-stream";
import ApplicationLayout from "../layouts/application.jsx";

export default () => {
	return <div>
    <h1>This site contains an error</h1>
    <BadJSXError></BadJSXError>
  </div>
};
