"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import profile from "@/public/profile.jpg";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const MotionLink = motion(Link);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 15,
              duration: 0.6,
            }}
          >
            <Image
              src={profile}
              alt="Prashant portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl select-none"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              rotate: [0, 15, -10, 15, -10, 0]
            }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
              rotate: {
                delay: 0.5,
                duration: 1.2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 3
              }
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-[16px] font-medium !leading-[1.5] sm:text-[32px]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          delay: 0.05
        }}
      >
        Hello, I&apos;m{" "}
        <span className="font-bold">Prashant Sagar Shakya,</span> a{" "}
        <span className="font-bold">Computer Science Student</span> interested
        in <span className="font-bold">Full Stack Development</span>,{" "}
        <span className="font-bold">AI/ML</span> &{" "}
        <span className="font-bold">Cloud Technologies.</span> I enjoy building{" "}
        <span className="italic">sites & apps,</span> currently focusing on{" "}
        <span className="underline">React (Next.js)</span> &{" "}
        <span className="underline">DevOps.</span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          delay: 0.15,
        }}
      >
        <MotionLink
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none active:scale-95 transition-colors border border-black/5 hover:bg-gray-950 dark:bg-white/10 dark:hover:bg-white/15 dark:border-white/5"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition-transform" />
        </MotionLink>

        <motion.a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none active:scale-95 transition-colors cursor-pointer borderBlack dark:bg-white/10 dark:hover:bg-white/15"
          href="/CV.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition-transform" />
        </motion.a>

        <motion.a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full active:scale-95 transition-colors cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-white dark:hover:bg-white/15"
          href="https://www.linkedin.com/in/prashant-sagar-shakya01//"
          target="_blank"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
        >
          <BsLinkedin />
        </motion.a>

        <motion.a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full active:scale-95 transition-colors cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-white dark:hover:bg-white/15"
          href="https://github.com/prashant-sagar-shakya"
          target="_blank"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaGithubSquare />
        </motion.a>
      </motion.div>
    </section>
  );
}
