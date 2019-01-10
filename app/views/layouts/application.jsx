import { createElement } from "complate-stream";

export default function ApplicationLayout({ title, content }, ...children) {
  return <html>
  <head>
    <title>{title}</title>
  </head>

  <body>
    {content}
    {children}
  </body>
</html>
};
