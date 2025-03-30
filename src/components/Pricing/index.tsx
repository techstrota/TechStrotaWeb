"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Simple and Affordable Pricing"
          paragraph="Choose the plan that fits your needs and take your business to the next level."
          center
          width="665px"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Starter Website"
            price="$350"
            subtitle="A sleek and responsive 5-page website tailored to your brand."
          >
            <OfferList text="Custom Website Design" status="active" />
            <OfferList text="Mobile-Friendly & Responsive" status="active" />
            <OfferList text="Basic SEO Optimization" status="active" />
            <OfferList text="Contact Form & Map Integration" status="active" />
            <OfferList text="Email Support" status="active" />
          </PricingBox>

          <PricingBox
            packageName="Business Website"
            price="$750"
            subtitle="An advanced website with enhanced features for businesses."
          >
            <OfferList text="Everything in Starter Plan" status="active" />
            <OfferList text="Up to 10 Pages" status="active" />
            <OfferList text="E-Commerce Functionality" status="active" />
            <OfferList text="Advanced SEO Optimization" status="active" />
            <OfferList text="24/7 Priority Support" status="active" />
          </PricingBox>

          <PricingBox
            packageName="Web Application"
            price="$1250"
            subtitle="A fully customized web application built for scalability."
          >
            <OfferList text="Everything in Business Plan" status="active" />
            <OfferList text="Custom Web App Development" status="active" />
            <OfferList text="User Authentication & Dashboard" status="active" />
            <OfferList text="API Integrations" status="active" />
            <OfferList text="Ongoing Maintenance & Support" status="active" />
          </PricingBox>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
