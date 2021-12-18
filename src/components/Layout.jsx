import Head from "next/head";

// components
import _Navbar from "./_Navbar";
import _Footer from "./_Footer";

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <_Navbar />
      <main>{children}</main>
      <_Footer />
    </>
  );
}
