import { type NextPage } from "next";
import Head from "next/head";
import { Hero } from "../components/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>SB Blog</title>
        <meta name="sb blog" content="Case for SB" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="relative">
          <div className="mx-auto container">
            <Hero>
              <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
                Hello <span className="text-[hsl(280,100%,70%)]">Everyone</span>
              </h1>
            </Hero>
            <div className="flex flex-col items-center justify-center gap-12 px-4 py-16 ">
              test
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
