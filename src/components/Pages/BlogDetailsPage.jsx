import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { pageTitle } from "../../helper";
import Cta from "../Cta";
import PageHeading from "../PageHeading";
import Div from "../Div";
import Sidebar from "../Sidebar.jsx";
import Spacing from "../Spacing";

export default function BlogDetailsPage() {
  const [post, setPost] = useState({});
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const params = useParams();
  pageTitle("Blog Details");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    async function getBlog() {
      // const res = await fetch("http://localhost:5173/api/post/getPosts");
      const res = await fetch(
        `https://mern-blog-main-ds4m.onrender.com/api/post/getposts?slug=${params.blogDetailsId}`
      );

      const data = await res.json();
      // console.log(data.posts);
      setPost(data.posts[0]);
    }
    getBlog();
    // const createdAtDate = new Date(post.createdAt);
    // const date = createdAtDate.toDateString();
    // const time = createdAtDate.toTimeString().split(" ")[0];
    // // console.log(post);
    // setDate(date);
    // setTime(time);
  }, []);

  function dateTime() {
    const createdAtString = "2024-03-07T12:37:20.722+00:00";
    const createdAtDate = new Date(createdAtString);

    // Get the date
    const date = createdAtDate.toDateString();

    // Get the time
    const time = createdAtDate.toTimeString().split(" ")[0];

    console.log("Date:", date);
    console.log("Time:", time);
  }
  return (
    <>
      {/* Start Page Heading Section */}

      <PageHeading
        title={post.title}
        bgSrc="/images/blog_details_hero_bg.jpeg"
        pageLinkText="Blogs"
      />
      {/* End Page Heading Section */}

      {/* Start Blog Details */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-8">
            {/* Start Details Post Content */}
            {/* <Div className="cs-post cs-style2">
              <Div className="cs-post_thumb cs-radius_15">
                <img
                  src="/images/post_5.jpeg"
                  alt="Post"
                  className="w-100 cs-radius_15"
                />
              </Div>
              <Div className="cs-post_info">
                <Div className="cs-post_meta cs-style1 cs-ternary_color cs-semi_bold cs-primary_font">
                  <span className="cs-posted_by">07 Mar 2022</span>
                  <Link to="/blog" className="cs-post_avatar">
                    Tech
                  </Link>
                </Div>
                <h2 className="cs-post_title">
                  Creative studio programm coming soon
                </h2>
                <p>
                  Elit scelerisque mauris pellentesque pulvinar pellentesque
                  habitant morbi tristique. Tortor posuere ac ut consequat
                  semper viverra nam libero justo. Mauris commodo quis imperdiet
                  massa tincidunt nunc pulvinar sapien et. Aliquam purus sit
                  amet luctus venenatis lectus magna fringilla urna. Purus sit
                  amet luctus venenatis lectus. Nunc aliquet bibendum enim
                  facilisis. Pretium viverra suspendisse potenti nullam ac
                  tortor vitae.
                </p>
                <blockquote className="cs-primary_font">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, who expound the actual
                  teachings of the great explorer of the truth, the master.
                  <small>Loren Mulari</small>
                </blockquote>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment, so blinded by desire, that they
                  cannot foresee the pain and trouble that are bound to ensue;
                  and equal blame belongs to those who fail in their duty
                  through weakness of will, which is the same as saying through
                  shrinking from toil and pain. These cases are perfectly simple
                  and easy to distinguish. In a free hour, when our power of
                  choice is untrammelled and when nothing prevents our being
                  able to do what we like best, every pleasure is to be welcomed
                  and every pain avoided. But in certain circumstances and owing
                  to the claims of duty or the obligations of business it will
                  frequently occur that pleasures have to be repudiated.
                </p>
                <Div className="row">
                  <Div className="col-md-6">
                    <img
                      src="/images/blog_details_img_1.jpeg"
                      alt="Blog Details"
                      className="cs-radius_15 w-100"
                    />
                    <Div className="cs-height_45 cs-height_lg_45" />
                  </Div>
                  <Div className="col-md-6">
                    <img
                      src="/images/blog_details_img_2.jpeg"
                      alt="Blog Details"
                      className="cs-radius_15 w-100"
                    />
                    <Div className="cs-height_45 cs-height_lg_45" />
                  </Div>
                </Div>
                <h3>Art is powerful and imaginary source</h3>
                <p>
                  we denounce with righteous indignation and dislike men who are
                  so beguiled and demoralized by the charms of pleasure of the
                  moment, so blinded by desire, that they cannot foresee the
                  pain and trouble that are bound to ensue; and equal blame
                  belongs to those who fail in their duty through weakness of
                  will, which is the same as saying through shrinking from toil
                  and pain. These cases are perfectly simple and easy to
                  distinguish. In a free hour, when our power of choice is
                  untrammelled and when nothing prevents our being able to do
                  what we like best, every pleasure is to be welcomed and every
                  pain avoided. But in certain circumstances.
                </p>
                <p>
                  So, blinded by desire, that they cannot foresee the pain and
                  trouble that are bound to ensue; and equal blame belongs to
                  those who fail in their duty through weakness of will, which
                  is the same as saying through shrinking from toil and pain.
                  These cases are perfectly simple and easy to distinguish. In a
                  free hour, when our power of choice is untrammelled and when
                  nothing prevents our being able to do what we like best, every
                  pleasure is to be welcomed and every pain avoided. But in
                  certain amount of people.
                </p>
              </Div>
            </Div> */}
            {/* <Div className="cs-post cs-style2">
              <p>
                New Delhi:&nbsp;OnePlus launched a mid-range premium 5G OnePlus
                11R smartphone in India in February 2023. It is available in
                three colour options: Galactic Silver, Sonic Black, and Solar
                Red. Currently, the Chinese smartphone manufacturer is offering
                a discount on the OnePlus 11R 5G smartphone in India.&nbsp;
              </p>
              <p>
                <img
                  src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1jsSOX.img?w=700&amp;h=400&amp;m=6"
                  alt=" OnePlus 11R 5G Gets Bumper Discount In India; Check New Price, Bank Offers And Specs "
                />
              </p>
              <p>
                For the 8GB RAM/128GB storage variant, the company launched the
                OnePlus 11R at a tag price of Rs 39,999, and Rs 44,999 for the
                16GB RAM/256GB storage variant. The price of the OnePlus 11R 5G
                has been reduced by Rs 3,000 in India, with additional exchange
                offers available.&nbsp;
              </p>
              <h2>OnePlus 11R New Price:</h2>
              <p>
                For the 8GB RAM/128GB storage variant, the OnePlus 11R is now
                available for a price of Rs 37,999 after a discount of Rs 2,000.
                Meanwhile, the 16GB RAM/256GB storage variant carries a price
                tag of Rs 41,999 after a discount of Rs 3,000. Notably, buyers
                can purchase the premium mid-range smartphone at a discounted
                price via Amazon India and the OnePlus website.
              </p>
              <p>
                Consumers can also avail of an additional discount of Rs 1,000
                with ICICI Bank and OneCard transactions. The e-commerce giant
                Amazon is providing Rs. 2,500 welcome rewards with Amazon Pay
                ICICI credit cards.&nbsp;
                <a
                  href="https://zeenews.india.com/technology/realme-12-5g-series-launched-with-android-14-in-india-check-price-specs-2727846.html"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  (Also Read:&nbsp;Realme 12 5G Series Launched With Android 14
                  In India; Check Price, Specs)
                </a>
              </p>
            </Div> */}
            <Div className="cs-post cs-style2">
              <div
                className="p-3 max-w-2xl mx-auto w-full post-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              ></div>
            </Div>
            {/* End Details Post Content */}

            {/* Start Comment Section */}
            {/* <Spacing lg="30" md="30" />
            <h2 className="cs-font_50 cs-m0">Leave A Reply</h2>
            <Spacing lg="5" md="5" />
            <p className="cs-m0">
              Your email address will not be published. Required fields are
              marked *
            </p>
            <Spacing lg="40" md="30" />
            <form className="row">
              <Div className="col-lg-6">
                <label>Full Name*</label>
                <input type="text" className="cs-form_field" />
                <Div className="cs-height_20 cs-height_lg_20" />
                <Div
                  data-lastpass-icon-root="true"
                  style={{
                    position: "relative !important",
                    height: "0px !important",
                    width: "0px !important",
                    float: "left !important",
                  }}
                />
              </Div>
              <Div className="col-lg-6">
                <label>Email*</label>
                <input type="text" className="cs-form_field" />
                <Div className="cs-height_20 cs-height_lg_20" />
              </Div>
              <Div className="col-lg-12">
                <label>Website*</label>
                <input type="text" className="cs-form_field" />
                <Div className="cs-height_20 cs-height_lg_20" />
              </Div>
              <Div className="col-lg-12">
                <label>Write Your Comment*</label>
                <textarea cols={30} rows={7} className="cs-form_field" />
                <Div className="cs-height_25 cs-height_lg_25" />
              </Div>
              <Div className="col-lg-12">
                <button className="cs-btn cs-style1">
                  <span>Send Message</span>
                  <Icon icon="bi:arrow-right" />
                </button>
              </Div>
            </form> */}
            {/* End Comment Section */}
          </Div>
          <Div className="col-xl-3 col-lg-4 offset-xl-1">
            {/* Start Sidebar */}
            {/* <Spacing lg="0" md="80" />
            <Sidebar /> */}
            {/* End Sidebar */}
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      {/* Start Blog Details */}

      {/* Start CTA Section */}
      {/* <Div className="container">
        <Cta
          title="Let’s disscuse make <b />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div> */}
      {/* End CTA Section */}
    </>
  );
}
