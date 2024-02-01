import About from "./components/About";
import Dealer from "./components/Dealer";
import Footer from "./components/Footer";
// import Let from "./components/Let";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Rectangle from "./components/Navbar";
import Slide from "./components/Slide";

export default function Home() {
  return (
    <>
      <Rectangle />
      <Nav />
      <Main />
      <Slide />
      <About />
      <Dealer />
      <Footer />
      {/* <Let /> */}
    </>
  );
}
