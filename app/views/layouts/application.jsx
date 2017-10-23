import { createElement } from "complate-stream";

export default function ApplicationLayout({ title }, ...children) {
  return <html>
  <head>
    <title>{title}</title>
  </head>

  <body>
    {children}
  </body>
</html>
};
