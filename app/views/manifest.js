// This has to register every single view to be used
import DemoIndex from './demo/index.jsx';
import DemoStreaming from './demo/streaming.jsx';
import DemoError from './demo/error.jsx';

export default (renderer) => {
  renderer.registerView(DemoIndex);
  renderer.registerView(DemoStreaming);
  renderer.registerView(DemoError);
}
