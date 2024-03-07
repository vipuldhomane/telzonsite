import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { pageTitle } from "../../helper";
import Cta from "../Cta";
import PageHeading from "../PageHeading";
import Div from "../Div";
import Sidebar from "../Sidebar.jsx";
import Spacing from "../Spacing";

export default function BlogDetailsPage() {
  const post = `<p><img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1isf4K.img?w=768&amp;h=512&amp;m=6" alt="Gold rate today in India on March 7, 2024: India is the largest importer of gold, which mainly caters to the demand of the jewellery industry. (Representative image)"></p><p><strong>Gold Rate Today In India:&nbsp;</strong>Gold prices on Tuesday surged Rs 800 to hit a fresh record high of Rs 65,000 per 10 grams in the national capital amid strong global trends. On March 7, 2024, gold rates in India experienced fluctuations. However, the fundamental price for 10 grams stayed close to Rs 65,000. A detailed examination revealed that the average price for 10 grams of 24-carat gold was approximately Rs 65,560, while 22-carat gold averaged around Rs 60,100.</p><p><br></p><p>At the same time, the silver market displayed an upward trend, reaching Rs 74,400 per kilogram.</p><p><strong>Gold rate today in India: Retail gold price on March 7</strong></p><p><strong>Gold Rate Today In Delhi</strong></p><p>As of March 7, 2024, in Delhi, the current price for 10 grams of 22-carat gold is approximately Rs 60,250, whereas 10 grams of 24-carat gold is priced at around Rs 65,710.</p><p><strong>Gold Rate Today In Mumbai</strong></p><p>Currently in Mumbai, the price of 10 grams of 22-carat gold stands at Rs 60,100, while the equivalent amount of 24-carat gold is valued at Rs 65,560.</p><p><strong>Gold Rate Today In Ahmedabad</strong></p><p>In Ahmedabad, the price for 10 grams of 22-carat gold is Rs 60,150, and for the same amount of 24-carat gold, it’s Rs 65,610.</p><p><strong><em>Check gold rates today in different cities on March 7, 2024; (In Rs/10 grams)</em></strong></p><p><strong>Multi Commodity Exchange</strong></p><p>On March 7, 2024, the Multi Commodity Exchange (MCX) saw active trading in gold futures contracts expiring on April 5, 2024. These contracts were priced at Rs 65,399 per 10 grams. Additionally, silver futures contracts expiring on May 3, 2024, were quoted at Rs 74,167 on the MCX.</p><p><img src="https://assets.msn.com/staticsb/statics/latest/icons-wc/icons/VideoBlue.svg">Related video:&nbsp;Gold Hits All Time High Of $2,152/oz; Prices Gain 19% In Last 1 Year &amp; 6% In Last 1 Month |CNBC TV18&nbsp;(CNBCTV18)</p><p><br></p><p><a href="https://www.msn.com/en-in/video/money/gold-hits-all-time-high-of-2152oz-prices-gain-19-in-last-1-year-6-in-last-1-month-cnbc-tv18/vi-BB1jsXrR?ocid=msedgntphdr" rel="noopener noreferrer" target="_blank" style="background-color: transparent;"><img src="https://assets.msn.com/staticsb/statics//latest/video-card-wc/icons/watch-more.svg" alt="View on Watch"></a></p><p><strong>Retail Cost of Gold</strong></p><p>The retail price of gold in India, often referred to as the gold rate, is the final cost per unit weight that customers pay when purchasing gold. This price is influenced by several factors beyond the inherent value of the metal itself.</p><p>Gold is highly important in India because of its cultural significance, its value for investment, and its traditional role in weddings and festivals.</p><p><strong>2024 Outlook</strong></p><p>As per the recent statement from the All India Gem and Jewellery Domestic Council (GJC), they anticipate that ongoing global economic uncertainties and geopolitical tensions will drive gold prices to reach a historic peak of Rs 70,000 per 10 grams in the coming year. This projection highlights gold’s role as a reliable investment and a valuable safeguard against inflation.</p>`;
  const params = useParams();
  pageTitle("Blog Details");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="Blog Single"
        bgSrc="/images/blog_details_hero_bg.jpeg"
        pageLinkText={params.blogDetailsId}
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
                dangerouslySetInnerHTML={{ __html: post }}
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
