"use client";

import Hero from "@/app/sections/Hero/hero";
import Features from "@/app/sections/Features/features";
import Pricing from "@/app/sections/Pricing/pricing";
import About from "@/app/sections/About/abouts";
import BlogSection from "@/app/sections/Blog/blog";

export default function Home() {
  return (
    <div>
        <Hero />
        <Features/>
        <Pricing/>
        <About/>
        <BlogSection/>
    </div>
  );
}
