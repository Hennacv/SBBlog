import { type NextPage } from "next";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Logo } from "../components/Logo";
import { NavList } from "../components/NavList";
import { PostList } from "../components/PostList";
import { Pagination } from "../components/Pagination";
import { Title } from "../components/Title";
import { usePosts } from "../hooks/getPosts";
import { useRouter } from "next/router";

function getCurrentPage(query: any) {
  if (
    query.hasOwnProperty("page") &&
    !Array.isArray(query.page) &&
    !isNaN(parseInt(query.page))
  ) {
    return parseInt(query.page);
  }
  return 1;
}

const About: NextPage = () => {
  const { query } = useRouter();
  const currentPage = getCurrentPage(query);
  const posts = usePosts({ pageCount: currentPage, itemCount: 8 });

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
              <Title name="Blog" />
            </Hero>
            <div className="p-6 xs:p-[49.5px]">
              <div className="h-fit bg-white p-6">
                <div className="grid justify-items-center gap-6 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                  {/* @ts-ignore */}
                  <PostList {...posts} />
                </div>
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/* @ts-ignore */}
                <Pagination {...posts} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
