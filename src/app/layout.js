import Header from "./Header";
import Head from "./head";

export default function RootLayout({ children }) {
  return (
    <html>
      <Head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}