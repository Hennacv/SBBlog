import { type NextPage } from "next"
import Head from "next/head";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Logo } from "../components/Logo";
import { NavList } from "../components/NavList";
import { PostList } from "../components/PostList";


const About: NextPage = () => {
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
            <div className="p-6 xs:p-[49.5px]">
              <div className="bg-white p-6 h-fit">
                <div className="grid gap-6 justify-items-center xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  <PostList pageCount={1} itemCount={8} />
                </div>
                {/* <Pagination /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
      )

}

export default About;