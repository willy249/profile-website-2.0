"use client";

import React from "react";
import Link from "next/link";

import { Button } from "./ui/button";
import { Download, Send } from "lucide-react"; // lucide-react
import { RiArrowDownSLine } from "react-icons/ri"; // react-icons

// components
import DevImg from "./DevImg"; // 照片
import Socials from "./Socials"; // 社群

const Hero = () => {
  return (
    <section className=" py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className=" text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Developer
            </div>
            <h1 className="h1 mb-4">嗨，我是潘錫諭!</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              一位深受 Tailwind CSS 吸引的「起名廢」網頁前端工程師。
            </p>
            {/* button */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Link
                target="_blank"
                href="https://pda.104.com.tw/profile/share/6QZJQkNvX38ZvJIfBhTUgmKM3OQXmN0S"
              >
                <Button variant="secondary" className="gap-x-2">
                  104人力銀行 CV <Download size={18} />
                </Button>
              </Link>
            </div>
            {/* 社群 */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconStyles=" text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/* imge */}
          <div className=" hidden xl:flex relative">
            <div className=" bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
              imgSrc="/hero/Developer.png"
              imgStyles="mt-2.5"
            />
          </div>
        </div>
        {/* icon 往下的動畫箭頭 */}
        <div className=" hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
