import { type NextPage } from "next";
import Head from "next/head";
import { Hero } from "../components/Hero";
import { FormCard } from "../components/FormCard";
import { PostList } from "../components/PostList";
import { Logo } from "../components/Logo";



const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>SB Blog</title>
        <meta name="sb blog" content="Case for SB" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <div className="relative ">
          <div className="mx-auto container bg-gray-100">
            <Hero>
              {/* <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-[5rem]">
                Hello <span className="text-[hsl(280,100%,70%)]">Everyone</span>
              </h1> */}
              <div className="absolute w-44 left-5 top-3 sm:w-full sm:left-[42px] sm:top-6">
                <Logo />
              </div>
            </Hero>
            <div className="flex flex-row">
              <FormCard/>
              <PostList/>
            </div>
            <div className="flex flex-col items-center justify-center gap-12 px-4 py-16 ">
              test
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
