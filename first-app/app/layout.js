import "./globals.css";

export const metadata = {
  title: "Next JS course app",
  description: "My first NextJS App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
