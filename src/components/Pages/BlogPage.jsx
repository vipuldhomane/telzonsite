import React, { useEffect, useState } from "react";
import { pageTitle } from "../../helper";
import Cta from "../Cta";
import PageHeading from "../PageHeading";
import Pagination from "../Pagination";
import PostStyle2 from "../Post/PostStyle2";
import Div from "../Div";
import Sidebar from "../Sidebar.jsx";
import Spacing from "../Spacing";
import SectionHeading from "../SectionHeading/index.jsx";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { domain } from "../../hostDomainHelper.js";
import { blogs } from "./blogs.js";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [pageNo, setPageNo] = useState(0);
  pageTitle(
    "Telzon Marketing Blog | Latest Digital Marketing Trends - Pune & Nagpur"
  );

  useEffect(() => {
    // window.scrollTo(0, 0);
    setPosts(blogs);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    async function getBlogs() {
      // const res = await fetch("http://localhost:5173/api/post/getPosts");
      let data;
      if (pageNo !== 0) {
        const res = await fetch(
          `${domain}/api/post/getposts?startIndex=${pageNo * 6}?limit=6?`
        );

        data = await res.json();
      } else {
        const res = await fetch(`${domain}/api/post/getposts?limit=6`);

        data = await res.json();
      }
      // console.log(data.posts);
      // setPosts(data.posts);
      // setPosts((prevPosts) => [...prevPosts, ...data.posts]);
      setPosts((prevPosts) => {
        const existingIds = new Set(prevPosts.map((post) => post.id));
        const newPosts = data.posts.filter((post) => !existingIds.has(post.id));
        return [...prevPosts, ...newPosts];
      });
    }
    getBlogs();
  }, [pageNo]);

  function handlePageIncrease() {
    if (pageNo * 6 < posts.length) setPageNo(pageNo + 1);
    // console.log(pageNo);
  }
  function handlePageReduce() {
    // console.log(postData.length);
    if (pageNo > 0) setPageNo(pageNo - 1);
    // console.log(pageNo);
  }
  return (
    <>
      {/* <PageHeading
        title="Our Blog"
        bgSrc="/images/blog_hero_bg.jpeg"
        pageLinkText="Blog"
      /> */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <SectionHeading
            title="Read The Latest Trends In The World Of Business!!"
            subtitle="Latest Posts"
            variant="cs-style1 text-center"
          />
          <Spacing lg="65" md="45" />
          <Div className="posts_grid">
            {posts.map((item, index) => (
              <Div key={index}>
                <PostStyle2
                  thumb={item.image}
                  title={item.title}
                  subtitle={item.subtitle}
                  date={item.createdAt}
                  category={item.category}
                  categoryHref={item.categoryHref}
                  href={item.slug}
                />
                {/* {postData.length > index + 1 && <Spacing lg="95" md="60" />} */}
              </Div>
            ))}
            <Spacing lg="60" md="40" />
          </Div>
          <Spacing lg="60" md="40" />

          {/* <Pagination /> */}
          <ul className="cs-pagination_box cs-center cs-white_color cs-mp0 cs-semi_bold ">
            <li>
              <Link
                onClick={handlePageReduce}
                to="#"
                className="cs-pagination_item cs-center"
              >
                <Icon icon="akar-icons:chevron-left" />
              </Link>
            </li>
            <li>
              <Link
                onClick={handlePageIncrease}
                to="#"
                className="cs-pagination_item cs-center"
              >
                <Icon icon="akar-icons:chevron-right" />
              </Link>
            </li>
          </ul>

          {/* <Div className="col-xl-3 col-lg-4 offset-xl-1">
            <Spacing lg="0" md="80" />
            <Sidebar />
          </Div> */}
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title="Let’s disscuse make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
    </>
  );
}
