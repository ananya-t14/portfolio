"use client";
import "../../styles/globals.css";
import Head from "next/head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Head>
      <title>Ananya Tripathy Resume</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="description"
        content="Resume | Ananya Tripathy | Hello Everyone..."
      />
      <link rel="icon" href="/logo.svg" />
      </Head>
    <div>

          {children}
    </div>
    </div>
  );
}
