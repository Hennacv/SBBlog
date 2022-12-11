import { type NextPage } from "next";
import Head from "next/head";
import { Hero } from "../components/Hero";
import { FormCard } from "../components/FormCard";
import { PostList } from "../components/PostList";
import { Logo } from "../components/Logo";
import { NavList } from "../components/NavList";



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
          <div className="mx-auto w-full bg-gray-100">
            <Hero>
              <div className="absolute w-44 left-5 top-3 sm:w-full sm:left-[42px] sm:top-6">
                <Logo />
              </div>
              <NavList />
            </Hero>
            <div className="grid lg:grid-cols-2">
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
