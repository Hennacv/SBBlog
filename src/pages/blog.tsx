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
            <div>
              <PostList/>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
      )

}

export default About;