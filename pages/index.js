import Head from "next/head";
import Hero from "../src/components/hero";
import Navbar from "../src/components/navbar";
import Footer from "../src/components/footer";
import PopupWidget from "../src/components/popupWidget";

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
