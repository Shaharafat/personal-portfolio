import About from "@/components/About";
import Container from "@/components/Container";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio | Shah Arafat</title>
        <meta name="description" content="Portfolio website of Shah Arafat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container>
          <Intro />
          <About />
          <Projects/>
        </Container>
      </main>
    </div>
  );
}
