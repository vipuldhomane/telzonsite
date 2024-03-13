import React from "react";
import { useState } from "react";
import PricingTable from ".";
import Section from "../Div";
import Spacing from "../Spacing";

export default function PricingTableList() {
  const [tab, setTab] = useState("monthly");
  return (
    <Section className="position-relative">
      <Section className="row">
        <Section className="col-lg-4">
          <PricingTable
            title="Standard"
            price="29"
            currency="$"
            timeline="monthly"
            features={[
              "Static responsive website",
              "Video marketing",
              "Keywords research",
              "Facebook campaign",
              "eCommerce solution",
              "Google adword",
            ]}
            btnText="Contact Now"
            btnLink="/"
          />
          <Spacing lg="25" md="25" />
        </Section>
        <Section className="col-lg-4">
          <PricingTable
            title="Standard"
            price="29"
            currency="$"
            timeline="monthly"
            features={[
              "Static responsive website",
              "Video marketing",
              "Keywords research",
              "Facebook campaign",
              "eCommerce solution",
              "Google adword",
            ]}
            btnText="Contact Now"
            btnLink="/"
          />
          <Spacing lg="25" md="25" />
        </Section>
        <Section className="col-lg-4">
          <PricingTable
            title="Standard"
            price="29"
            currency="$"
            timeline="monthly"
            features={[
              "Static responsive website",
              "Video marketing",
              "Keywords research",
              "Facebook campaign",
              "eCommerce solution",
              "Google adword",
            ]}
            btnText="Contact Now"
            btnLink="/"
          />
          <Spacing lg="25" md="25" />
        </Section>
        <Section className="col-lg-4">
          <PricingTable
            title="Standard"
            price="29"
            currency="$"
            timeline="monthly"
            features={[
              "Static responsive website",
              "Video marketing",
              "Keywords research",
              "Facebook campaign",
              "eCommerce solution",
              "Google adword",
            ]}
            btnText="Contact Now"
            btnLink="/"
          />
          <Spacing lg="25" md="25" />
        </Section>
        <Section className="col-lg-4">
          <PricingTable
            title="Standard"
            price="29"
            currency="$"
            timeline="monthly"
            features={[
              "Static responsive website",
              "Video marketing",
              "Keywords research",
              "Facebook campaign",
              "eCommerce solution",
              "Google adword",
            ]}
            btnText="Contact Now"
            btnLink="/"
          />
          <Spacing lg="25" md="25" />
        </Section>
        <Section className="col-lg-4">
          <PricingTable
            title="Standard"
            price="29"
            currency="$"
            timeline="monthly"
            features={[
              "Static responsive website",
              "Video marketing",
              "Keywords research",
              "Facebook campaign",
              "eCommerce solution",
              "Google adword",
            ]}
            btnText="Contact Now"
            btnLink="/"
          />
          <Spacing lg="25" md="25" />
        </Section>
      </Section>
    </Section>
  );
}
