import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

export const metadata: Metadata = {
  title: "Dorrot Blog",
  description: "A blog about web development and other things.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>

      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
