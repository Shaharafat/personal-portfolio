/*
 *
 * Title: Site page container
 * Description: site page container
 * Author: Shah Arafat
 * Date: 01-05-2021
 *
 */
import { useTheme } from "next-themes";
import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";

const Container = (props) => {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const { theme, setTheme } = useTheme();
  const { children, ...customMeta } = props;

  const router = useRouter();

  const meta = {
    title: "Shah Arafat | Developer, writer, nerd",
    description: "Front-end developer, Javascript enthusiast, React lover",
    image: "https://shaharafat.info/static/images/shaharafat.png",
    type: "website",
    ...customMeta,
  };

  return (
    <div className="bg-white dark:bg-purpleDark relative">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://shaharafat.info${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://shaharafat.info${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Shah Arafat" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sharafhat" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      {/* navbar */}
      <nav className="w-full h-20 bg-white dark:bg-purpleDark sticky top-0 md:static px-4 md:px-10 lg:px-16 xl:px-20 flex justify-between items-center">
        <h1 className="font-bold text-2xl text-darkBlue font-merriweather">
          <NextLink href="/">SA.</NextLink>
        </h1>

        <ul
          className={`absolute md:static top-20 md:top-auto left-0 md:left-auto w-3/4 md:w-auto divide-solid md:divide-none divide-darkBlue divide-y-2 shadow-2xl md:shadow-none bg-white dark:bg-purpleDark md:flex md:items-center transform transition-all ${
            isMobileNavActive ? "" : "-translate-x-full"
          } md:-translate-x-0 nav-main `}
          id="nav-main"
        >
          <li className="mx-2">
            <NextLink href="/">
              <a className="text-md block md:inline-block px-3 py-4 md:py-2 md:rounded-lg text-darkBlue font-merriweather font-semibold">
                Home
              </a>
            </NextLink>
          </li>
          <li className="mx-2">
            <NextLink href="/blog">
              <a className="text-md block md:inline-block px-3 py-4 md:py-2 md:rounded-lg text-darkBlue font-merriweather font-semibold">
                Blog
              </a>
            </NextLink>
          </li>
          <li className="mx-2">
            <a
              href="#projects"
              className="text-md block md:inline-block px-3 py-4 md:py-2 md:rounded-lg text-darkBlue font-merriweather font-semibold"
            >
              Projects
            </a>
          </li>
          <li className="mx-2">
            <a
              href="#about"
              className="text-md block md:inline-block px-3 py-4 md:py-2 md:rounded-lg text-darkBlue font-merriweather font-semibold"
            >
              About
            </a>
          </li>
          <li className="mx-2">
            <a
              href="#contact"
              className="text-md block md:inline-block px-3 py-4 md:py-2 md:rounded-lg text-darkBlue font-merriweather font-semibold"
            >
              Contact
            </a>
          </li>
          <li className="mx-2">
            <button
              className="text-md block md:inline-block focus:outline-none px-3 py-4 md:py-2 md:rounded-lg text-darkBlue font-merriweather font-semibold"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </button>
          </li>
        </ul>
        <div
          className="text-xl md:hidden  rounded-full px-2 py-1"
          onClick={() => setIsMobileNavActive(!isMobileNavActive)}
        >
          <span className="text-darkBlue">
            {isMobileNavActive ? <FaTimes /> : <FaBars />}
          </span>
        </div>
      </nav>
      <main>
        {children}
      </main>
    </div>
  );
};

export default Container;
