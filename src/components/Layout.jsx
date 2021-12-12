import _Navbar from "./_Navbar";
import _Footer from "./_Footer";

export default function Layout({ children }) {
  return (
    <>
      <_Navbar />
      <main>{children}</main>
      <_Footer />
    </>
  );
}
