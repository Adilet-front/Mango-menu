// root.tsx
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import type { Route } from "./+types/root";

// -------- Links --------
export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "icon",
    type: "image/png",
    href: "/1046798.png",
  },
  {
    rel: "stylesheet",
    href: "/app/app.css",
  },
];

// -------- Layout Component --------
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
      </body>
    </html>
  );
}

// -------- App Component --------
export default function App() {
  return <Outlet />;
}

// -------- Error Boundary --------
export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const isDev = import.meta.env.DEV;

  const isRouteError = isRouteErrorResponse(error);
  const status = isRouteError ? error.status : null;

  const message = isRouteError ? (status === 404 ? "404" : "Error") : "Oops!";
  const details = isRouteError
    ? status === 404
      ? "The requested page could not be found."
      : error.statusText || "An unexpected error occurred."
    : error instanceof Error && isDev
    ? error.message
    : "An unexpected error occurred.";
  const stack = error instanceof Error && isDev ? error.stack : undefined;

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1 className="text-3xl font-bold">{message}</h1>
      <p className="mt-2 text-gray-700">{details}</p>
      {stack && (
        <pre className="mt-4 w-full p-4 overflow-x-auto bg-gray-100 text-sm text-red-600 rounded">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
