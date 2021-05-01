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

      <main className=" grid place-items-center min-h-screen font-merriweather text-4xl font-bold bg-white dark:bg-purpleDark text-darkBlue">
        Hello
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          Toggle
        </button>
      </main>
    </div>
  );
}
