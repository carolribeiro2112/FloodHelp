import "./globals.css";

export const metadata = {
  title: "FloodHelp",
  description: "Ajude os desabrigados pelas enchentes",
  charSet: "utf-8"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className="bg-slate-100 text-zinc-950">{children}</body>
    </html>
  );
}
