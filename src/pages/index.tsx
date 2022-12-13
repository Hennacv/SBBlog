import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Hero } from "../components/Hero";
import { FormCard } from "../components/form/FormCard";
import { PostList } from "../components/PostList";
import { Logo } from "../components/Logo";
import { NavList } from "../components/NavList";
import { Footer } from "../components/Footer";
import { PageButton } from "../components/PageButton";
import { usePosts } from "../hooks/getPosts";

const Home: NextPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const posts = usePosts({ pageCount: currentPage, itemCount: 4 });

  if (!posts.data) return <></>;

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
              <div className="absolute left-5 top-3 w-44 sm:left-[42px] sm:top-6 sm:w-full">
                <Logo />
              </div>
              <NavList />
            </Hero>
            <div className="grid gap-[24px] p-6 xs:p-[49.5px] lg:grid-cols-2">
              <FormCard />
              <div className="h-fit bg-white p-6">
                <div className="grid justify-items-center gap-6 xs:grid-cols-2">
                  <PostList {...posts} />
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
