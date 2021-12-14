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
      </Head>
      <_Navbar />
      <main>{children}</main>
      <_Footer />
    </>
  );
}
