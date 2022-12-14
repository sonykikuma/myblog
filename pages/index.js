import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featuredposts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util";
import Head from "next/head";

/*
const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React framework for production-it makes building fullstack react apps and sites a breeze.",
    date: "2022-11-13",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React framework for production-it makes building fullstack react apps and sites a breeze.",
    date: "2022-11-13",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React framework for production-it makes building fullstack react apps and sites a breeze.",
    date: "2022-11-13",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React framework for production-it makes building fullstack react apps and sites a breeze.",
    date: "2022-11-13",
  },
];
*/

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Welcome to my Blog</title>
        <meta
          name="description"
          content="I post about programming and development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 60,
  };
}

export default HomePage;
