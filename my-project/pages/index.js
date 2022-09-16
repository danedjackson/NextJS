//import Head from 'next/head';
import { Fragment } from 'react';
import BlogItem from "../components/BlogItem/BlogItem.js";

const BLOG_POSTS = [
  {
    id: 1, 
    title: "First Blog", 
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vayne_25.jpg", 
    description: "Sentinel Vayne Blog",
    details: "Skin from League of legends",
  }, 
  {
    id: 2, 
    title: "Second Blog", 
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vayne_1.jpg", 
    description: "Vindicator Vayne Blog",
    details: "Skin from League of legends early days",
  }
];

const HomePage = () => {
  return (
    <Fragment>
      {/* <Head>
        <link href="https://fonts.googleapis.com/css2?family=Mali&display=swap" rel="stylesheet"/>
      </Head> */}

      <h1>Blog Page</h1>
      {
        BLOG_POSTS.map((blog) => (
          <div key = {blog.id}>
            <BlogItem
              title = {blog.title} 
              image = {blog.image} 
              description = {blog.description} 
              details = {blog.details} 
            />
          </div>
        ))
      }
      
      {/* <BlogItem key = {BLOG_POSTS[0].id} title = {BLOG_POSTS[0].title} image = {BLOG_POSTS[0].image} description = {BLOG_POSTS[0].description} details = {BLOG_POSTS[0].details}/>
      <BlogItem key = {BLOG_POSTS[1].id} title = {BLOG_POSTS[1].title} image = {BLOG_POSTS[1].image} description = {BLOG_POSTS[1].description} details = {BLOG_POSTS[1].details}/> */}
    </Fragment>
  )
}

export default HomePage;