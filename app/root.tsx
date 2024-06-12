import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
  useActionData,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css?url";
import type { ActionFunctionArgs, LinksFunction } from "@remix-run/node";
import { NextUIProvider } from "@nextui-org/react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const themeValue = formData.get("themeValue");
  console.log("🚀 ~ action ~ themeValue:", themeValue);

  return json({ data: themeValue });
}

export default function App() {
  const actionData = useActionData<typeof action>();
  const toggleTheme = actionData?.data;
  return (
    <NextUIProvider>
      <section
        className={`${
          toggleTheme === "true" ? "light" : "black"
        }   text-foreground bg-background h-screen`}
      >
        <Outlet />
      </section>
    </NextUIProvider>
  );
}
