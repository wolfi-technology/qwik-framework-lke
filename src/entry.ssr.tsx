import {
  renderToStream,
  type RenderToStreamOptions,
} from "@builder.io/qwik/server";
import { manifest } from "@qwik-client-manifest";
import Root from "./root";

export default function (opts: RenderToStreamOptions) {
  // access the current server data for the application.
  const { serverData } = opts;
  // create a variable to be used to set the theme based on the cookie value.
  let theme: string;
  // here we check to see if there is a theme already set and if not we default to light.
  if (
      (serverData as any)?.qwikcity?.ev?.cookie?.get("theme")?.value !== undefined
  ) {
    theme = (serverData as any).qwikcity.ev.cookie.get("theme").value as string;
  } else {
    theme = "light";
  }

  return renderToStream(<Root />, {
    manifest,
    ...opts,
    // Use container attributes to set attributes on the html tag.
    containerAttributes: {
      "data-theme": theme,
      lang: "en-us",
      ...opts.containerAttributes,
    },
    serverData: {
      ...opts.serverData,
    },
  });
}
