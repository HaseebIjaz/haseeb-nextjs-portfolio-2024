"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Track Hero",
    description: "Automotive Country Club and Race Track Management Software, Reimagined.Discover the platform which gives you full visibility into your fleet and management of your experiential events.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://spa.trackhero.io/spa",
  },
  {
    id: 2,
    title: "xiQ WorkBench ",
    description: "Email Marketing Workflows, Helping you nurture today’s conversations, today. xiQ Workbench is a curation platform where you can quickly curate and publish content to build a loyal customer base.",
    image: "/images/projects/2.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://xiqonline.com/auth/login?redirectURL=https://xiqworkbench.xiqonline.com",
  },
  {
    id: 3,
    title: "Real Estate Application",
    description: "Explore all things property. Ever wondered what your property's worth? Get market leading insights and data by tracking it.Monitor and track your home loan with our Loan Tracker and get notified when you can save.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://www.realestate.com.au/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="mt-4 mb-8 text-4xl font-bold text-center text-white md:mb-12">
        My Projects
      </h2>
      <div className="flex flex-row items-center justify-center gap-2 py-6 text-white">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
      </div>
      <ul ref={ref} className="grid gap-8 md:grid-cols-3 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
