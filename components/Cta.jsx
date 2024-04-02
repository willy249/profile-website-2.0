"use client";
// next js
import Link from "next/link";

// npm package
import { Button } from "./ui/button"; // shadcn-ui

const Cta = () => {
  return (
    <section className="py-24 bg-tertiary dark:bg-secondary/40">
      <div className=" container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h2 max-w-xl text-center mb-8">
            感謝您閱讀我的簡介，期待有機會進一步交流。
          </h2>
          <Link href="/contact">
            <Button>Contact me</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
