import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PopupWidget from "../components/popupWidget";

export default function Home() {
  return (
    <>
      <Head>
        <title>onelinepage</title>
        <meta
          name="description"
          content="Make your own landing page with just one line!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />

      <Footer />
      <PopupWidget />
    </>
  );
}
