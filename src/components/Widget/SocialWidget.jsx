import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Div from "../Div";

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <Link
        to="https://instagram.com/telzon.marketing?igshid=YzAwZjE1ZTI0Zg=="
        className="cs-center"
      >
        <Icon icon="fa6-brands:instagram" />
      </Link>
      <Link
        to="https://www.linkedin.com/company/telzonmarketing/"
        className="cs-center"
      >
        <Icon icon="fa6-brands:linkedin-in" />
      </Link>
      <Link
        to="https://youtube.com/@telzon_marketing?si=-F5F-ZaYi8-jh0UB"
        className="cs-center"
      >
        <Icon icon="fa6-brands:youtube" />
      </Link>
      <Link to="https://www.facebook.com/Telzonmarketing" className="cs-center">
        <Icon icon="fa6-brands:facebook" />
      </Link>
      <Link to="http://wa.me/+919307189776" className="cs-center">
        <Icon icon="fa6-brands:whatsapp" />
      </Link>
    </Div>
  );
}
