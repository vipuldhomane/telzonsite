import React, { useEffect, useState } from "react";
import Hero4 from "../Hero/Hero4";
import { pageTitle } from "../../helper";
import Div from "../Div";
import FunFact2 from "../FunFact/FunFact2";
import Spacing from "../Spacing";
import SectionHeading from "../SectionHeading";
import MovingText2 from "../MovingText/MovingText2";
import VideoModal from "../VideoModal";
import Portfolio from "../Portfolio";
import { Icon } from "@iconify/react";
import TimelineSlider from "../Slider/TimelineSlider";
import TestimonialSlider from "../Slider/TestimonialSlider";
import Cta from "../Cta";
import LogoList from "../LogoList";
import PostList from "../Post/PostList";
import Card from "../Card";
import HomeServices from "./HomeServices";
import { Link } from "react-router-dom";
import ServiceList from "../ServiceList";
import Timeline from "../Timeline";
const heroSocialLinks = [
  {
    name: "Instagram",
    links: "https://instagram.com/telzon.marketing?igshid=YzAwZjE1ZTI0Zg==",
  },
  {
    name: "YouTube",
    links: "https://youtube.com/@telzon_marketing?si=-F5F-ZaYi8-jh0UB",
  },
];
const funfaceData = [
  {
    title: "Digital Transformations",
    factNumber: "50",
  },
  {
    title: "Global happy clients",
    factNumber: "100+",
  },
  {
    title: "Project completed",
    factNumber: "300+",
  },
  {
    title: "Team members",
    factNumber: "250",
  },
];
const serviceData1 = [
  {
    title: "Web Development",
    href: "/service/service-details",
  },
  {
    title: "Marketing",
    href: "/service/service-details",
  },
  {
    title: "Branding",
    href: "/service/service-details",
  },
];
const serviceData2 = [
  {
    title: "SEO",
    href: "/service/service-details",
  },
  {
    title: "Creatives",
    href: "/service/service-details",
  },
  {
    title: "Photo Videography",
    href: "/service/service-details",
  },
];
const portfolioData = [
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_11.jpeg",
    category: "ui_ux_design",
  },
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_12.jpeg",
    category: "logo_design",
  },
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_13.jpeg",
    category: "web_design",
  },
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_14.jpeg",
    category: "mobile_apps",
  },
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_15.jpeg",
    category: "ui_ux_design",
  },
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_16.jpeg",
    category: "web_design",
  },
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_11.jpeg",
    category: "ui_ux_design",
  },
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_12.jpeg",
    category: "logo_design",
  },
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_13.jpeg",
    category: "web_design",
  },
];
const timelineData = [
  {
    heading: "Team of Young Leaders",
    // name: "SubHeading",
    desc: "Our vibrant team brings fresh perspectives and innovative ideas, driving your marketing forward with youthful energy and cutting-edge strategies.",
  },
  {
    heading: "Relatable Brand Marketing",
    // name: "SubHeading",
    desc: "We excel in creating campaigns where every audience can see themselves, ensuring your productor service resonates deeply with your customers.We excel in creating campaigns where every audience can see themselves, ensuring your product or service resonates deeply with your customers.",
  },
  {
    heading: "Proven Track Record",
    // name: "SubHeading",
    desc: "With experience in successfully marketing over 100+ diverse brands, our portfolio speaks for our ability to deliver results across various industries",
  },
  {
    heading: "Creativity as Our USP",
    // name: "SubHeading",
    desc: "Our unique creative approach sets us apart, ensuring your brand stands out in the marketplace with memorable and impactful marketing.",
  },
  {
    heading: "Trendsetters, Not Followers",
    // name: "SubHeading",
    desc: "We don't just keep up with trends, we create them. Our strategies are designed to position your brand as a leader, shaping the market's direction.",
  },
  {
    heading: "Efficient and Comprehensive Marketing",
    // name: "SubHeading",
    desc: "By using 20% of your budget, we aim to deliver 80% of the results, and offer both online and offline marketing solutions, ensuring high efficiency and comprehensive coverage",
  },
];

export default function DigitalAgencyHome() {
  const [itemShow, setItemShow] = useState(6);
  pageTitle("TelZon Marketing");
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  // start the development server on render
  useEffect(() => {
    async function startServer() {
      const res = await fetch(
        "https://mern-blog-main-ds4m.onrender.com/api/user/test"
      );
      const data = await res.json();
      console.log(data);
    }
    startServer();
  }, []);

  return (
    <>
      {/* Start Hero Section */}
      <Hero4
        title="We Are <span>Tel</span>Zon <br />Digital Marketing Agency"
        subtitle="We deliver best problem solving solution for our client and provide finest finishing product in present and upcoming future."
        scrollDownId="#service"
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        phoneNumber="+91 9307189776"
        email="info@telzonmarketing.in"
      />
      {/* End Hero Section */}

      {/* Start Funfact Section */}
      {/* <Div className="container">
        <FunFact2
          data={funfaceData}
          variant="cs-type1"
          bgUrl="/images/funfact_shape_bg.svg"
        />
      </Div> */}
      {/* End Funfact Section */}

      {/* Start Services Section */}

      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Our core services"
          subtitle="Services"
          variant="cs-style1 text-center"
        />
        <Spacing lg="70" md="45" />
        <ServiceList />
      </Div>

      <Spacing lg="145" md="80" />

      {/* Start Moving Text Section */}
      <MovingText2 data={serviceData1} />
      <Spacing lg="20" md="10" />
      <MovingText2 reverseDirection data={serviceData2} />
      {/* End Moving Text Section */}

      <Spacing lg="120" md="50" />
      <Div className="container">
        <h2 className="cs-font_50 cs-m0 cs-line_height_4 text-center">
          Where Content Meets Creativity!
        </h2>
        <h3 className="cs-font_20 cs-m0 cs-line_height_4 text-center mt-5">
          At Telzon Marketing, we're masters at making your brand shine. We
          create content that tells your story in a way that everyone remembers.
          We're young, full of energy, and passionate about what we do.
        </h3>
      </Div>
      <Spacing lg="90" md="70" />
      {/* End Services Section */}

      {/* Start About Section */}
      {/* <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-5 col-xl-4">
              <SectionHeading
                title="India’s best digital agency "
                subtitle="Why Choose Us"
                btnText="Learn More"
                btnLink="/about"
              />
              <Spacing lg="45" md="45" />
            </Div>
            <Div className="col-lg-7 offset-xl-1">
              <Div className="cs-half_screen">
                <VideoModal
                  videoSrc="https://www.youtube.com/watch?v=VcaAVWtP48A"
                  bgUrl="/images/video_bg.jpeg"
                  variant="cs-style1 cs-size1"
                />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div> */}
      {/* End About Section */}

      {/* Start Projects Section */}
      {/* <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Portfolio to explore"
          subtitle="Latest Projects"
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <Div className="row">
          {portfolioData.slice(0, itemShow).map((item, index) => (
            <Div
              className={`${
                index === 0 || index === 3 || index === 4
                  ? "col-lg-8"
                  : "col-lg-4"
              }`}
              key={index}
            >
              <Portfolio
                title={item.title}
                subtitle={item.subtitle}
                href={item.href}
                src={item.src}
                variant="cs-style1 cs-type1"
              />
              <Spacing lg="25" md="25" />
            </Div>
          ))}
        </Div>

        <Div className="text-center">
          {portfolioData.length <= itemShow ? (
            ""
          ) : (
            <>
              <Spacing lg="65" md="40" />
              <span
                className="cs-text_btn"
                onClick={() => setItemShow(itemShow + 3)}
              >
                <span>Load More</span>
                <Icon icon="bi:arrow-right" />
              </span>
            </>
          )}
        </Div>
      </Div> */}
      {/* End Projects Section */}

      {/* Start Awards Section */}

      {/* <Spacing lg="140" md="80" /> */}
      <Div className="container">
        <SectionHeading
          title="Why Choose Us"
          subtitle="Our Values"
          variant="cs-style1 text-center"
        />
        <Spacing lg="70" md="45" />
        {/* <Div className=" col-xl-7 offset-xl-1"> */}
        <Div className="values-container">
          {timelineData.map((item, index) => (
            <Div className="cs-time_line value-card" key={index}>
              <h3 className="cs-accent_color">{item.heading}</h3>
              <h5>{item.name}</h5>
              <p>{item.desc}</p>
              <p>{item.type}</p>
            </Div>
          ))}
        </Div>
      </Div>
      {/* </Div> */}
      {/* <Div className="container">
        <Div className="row">
          <Div className="col-xl-4">
            <SectionHeading
              title="Why Choose Us"
              subtitle="Our Methodology"
              variant="cs-style1"
            />
            <Spacing lg="90" md="45" />
          </Div>
          <Div className="col-xl-7 offset-xl-1">
            <TimelineSlider />
          </Div>
        </Div>
      </Div> */}
      <Spacing lg="145" md="80" />
      {/* End Awards Section */}

      {/* Start Testimonial Section */}
      <div className="text-center">
        <SectionHeading
          className="text-center"
          title="Watch Our Latest Videos!!"
          subtitle="Video Gallery"
        />
        <Spacing lg="45" md="45" />
      </div>
      {/* <TestimonialSlider /> */}
      <div className="testimonial-cont">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/videoseries?si=IPV_ek3DpbB-VC9_&amp;list=PL8Dn9GZ0GOee3ynqmRiLgX7ugG63cioXX"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/videoseries?si=GiIqaKGrYydfbALt&amp;list=PL8Dn9GZ0GOeegN32Kp1RzQ5PmFTGH_XMo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        {/* <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/videoseries?si=tHkzkmqfdEpqJnwp&amp;list=PLE0Jo6NF_JYPjGRiOfj44iQ-XGomdEYMk"
          title="YouTube video player"
          frameborder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/videoseries?si=Sy3CIbA3StnMcV29&amp;list=PLA_tb393dqDeOinVj1dMTpkguOTz8nv5y"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          cl
        ></iframe> */}
      </div>
      {/* End Testimonial Section */}

      {/* Start Blog Section */}
      {/* <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Spacing lg="145" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-5 col-xl-4">
              <SectionHeading
                title="Explore recent publication"
                subtitle="Our Blog"
                btnText="View More Blog"
                btnLink="/blog"
              />
              <Spacing lg="45" md="45" />
            </Div>
            <Link to={"/blog"}>Read Latest Blogs</Link>
            <Div className="col-lg-7 offset-xl-1">
              <PostList />
            </Div>
          </Div>
        </Div>
      </Div> */}
      <Spacing lg="145" md="80" />
      {/* End Blog Section */}

      {/* Start LogoList Section */}
      <Div className="container">
        <SectionHeading
          title="Our reputed partner"
          subtitle="Top Clients"
          variant="cs-style1 text-center"
        />
        <Spacing lg="70" md="45" />
        <LogoList />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End LogoList Section */}

      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="Let’s discuss & make <br />something <i>cool</i> together"
          btnText="Schedule a Meeting"
          btnLink="http://wa.me/+919307189776"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
