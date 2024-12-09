import "../globals.css";

export const metadata = {};

export default function EmptyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="m-4">{children}</body>
    </html>
  );
}
