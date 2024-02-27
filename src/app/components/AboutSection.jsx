"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { Button } from "@/components/ui/button";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex flex-row justify-between pl-2">
        <Button variant={"ghost"}>React.js</Button>
        <Button variant={"ghost"}>Next.js</Button>
        <Button variant={"ghost"}>Node.js</Button>
        <Button variant={"ghost"}>Typescript</Button>
        <Button variant={"ghost"}>HTML/CSS/JS</Button>
        <Button variant={"ghost"}>JavaScript</Button>
        <Button variant={"ghost"}>Express</Button>
        <Button variant={"ghost"}>PostgreSQL</Button>
        <Button variant={"ghost"}>MongoDB</Button>
        <Button variant={"ghost"}>AWS</Button>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="mb-10 text-white" id="about">
      <div className="items-center gap-8 px-4 py-8 md:grid md:grid-cols-2 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.webp"
          width={500}
          height={500}
          alt={"About-Image"}
        />
        <div className="flex flex-col h-full mt-4 text-left md:mt-0">
          <h2 className="mb-4 text-4xl font-bold text-white">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am always looking to expand my
            knowledge and skill set.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8 px-4 py-8">
        <div className="flex flex-row items-center justify-around w-full mt-8 gap-15">
          <h2 className="text-4xl font-bold text-center text-white md:mb-12">
            Skills
          </h2>
        </div>
        <div>{TAB_DATA.find((t) => t.id === tab).content}</div>
      </div>
    </section>
  );
};

export default AboutSection;
