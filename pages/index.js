import Container from "@/components/Container";
import Intro from "@/components/Intro";
import { useTheme } from "next-themes";
import Head from "next/head";

export default function Home() {
  const { theme, setTheme } = useTheme();
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
        </Container>
      </main>
    </div>
  );
}
