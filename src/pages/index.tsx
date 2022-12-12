import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Hero } from "../components/Hero";
import { FormCard } from "../components/FormCard";
import { PostList } from "../components/PostList";
import { Logo } from "../components/Logo";
import { NavList } from "../components/NavList";
import { Footer } from "../components/Footer";
import { PageButton } from "../components/PageButton";



const Home: NextPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const addPage = () => {
    setCurrentPage(currentPage + 1);
};

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
            <div className="grid gap-[24px] p-6 xs:p-[49.5px] lg:grid-cols-2">
              <FormCard/>
              <div className="bg-white p-6 h-fit">
                <div className="grid gap-6 justify-items-center xs:grid-cols-2">
                  <PostList pageCount={1} itemCount={4} currentPage={currentPage} />
                </div>
                <PageButton addPage={addPage} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
