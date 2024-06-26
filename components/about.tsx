"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
    const { ref } = useSectionInView("About");

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                After completing my Intermediate degree, I decided to pursue my
                passion for coding & programming. I enrolled in a Computer
                Science College for Bachelor&apos;s degree and learned various
                programming languages like:
                <span className="font-medium"> C, C++, JAVA, Python</span>.{" "}
                <span className="italic">My favorite part of programming</span>{" "}
                is the problem-solving aspect. I{" "}
                <span className="underline">love</span> the feeling of finally
                figuring out a solution to a problem. My core stack is{" "}
                <span className="font-medium">
                    React, Next.js, Node.js, and MongoDB
                </span>
                . I&apos;m also familiar with TypeScript. I&apos;m always
                looking to learn new technologies. I&apos;m currently looking
                for a <span className="font-medium">full-time position</span> as
                a software developer.
            </p>
            <p>
                <span className="italic">When I&apos;m not coding</span>, I
                enjoy playing video games, watching movies etc. I also enjoy{" "}
                <span className="font-medium">learning new things</span>. I am
                currently learning <span className="font-medium">OpenCV</span>.
                I&apos;m also passionate about singing.
            </p>
        </motion.section>
    );
}
