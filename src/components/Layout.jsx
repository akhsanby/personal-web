import Head from "next/head";
import { useRouter } from "next/router";

// components
import _Navbar from "./_Navbar";
import _Footer from "./_Footer";

export default function Layout({ children }) {
  const { pathname } = useRouter();

  const pageName = () => {
    if (pathname === "/") return "Home";
    if (pathname === "/about") return "About Me";
    if (pathname === "/portfolio") return "Portfolio";
    if (pathname === "/blog") return "Blog";
    if (pathname === "/contact") return "Contact";
  };

  return (
    <>
      <Head>
        <title>{pageName()}</title>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossOrigin="anonymous"
        />
      </Head>
      <_Navbar />
      <main>{children}</main>
      <_Footer />
    </>
  );
}
