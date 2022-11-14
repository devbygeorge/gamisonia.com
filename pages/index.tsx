import Head from "next/head";

// Import Components
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gamisonia Design</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div style={{ marginTop: "15rem" }}></div>
      <Hero />
      <div style={{ marginTop: "15rem" }}></div>
      <Projects />
      <div style={{ marginTop: "15rem" }}></div>
      <About />
      <div style={{ marginTop: "15rem" }}></div>
      <Contact />
      <div style={{ marginTop: "15rem" }}></div>
      <Footer />
    </>
  );
}
