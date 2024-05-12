import React from "react";
import { BiSolidSchool } from "react-icons/bi";
import { FaSchool } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Netflix from "@/public/Netflix.png";
import Compiler from "@/public/Code-Alpha.png";
import imaginify from "@/public/Imaginify.png";
import brainwave from "@/public/brainwave.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Secondary School",
        location: "Bihar, India",
        description:
            "I completed my Secondary Schooling from Ishwarchandra Vidyasagar Academy & scored 74.6% marks.",
        icon: React.createElement(BiSolidSchool),
        date: "2018",
    },
    {
        title: "High School",
        location: "Bihar, India",
        description:
            "I completed my High Schooling in science stream (PCM) from DAV School & scored 79.4% marks.",
        icon: React.createElement(FaSchool),
        date: "2018 - 2020",
    },
    {
        title: "Bachelor of Technology",
        location: "Mohali, Punjab",
        description:
            "I'm currently pursuing my Bachelor's degree from I.K Gujral Punjab Technical University Mohali Campus 1. Here I Learned Lot of things like - various programming languages (C, C++, jAVA, Python), React, AI/ML and currently working on Next.js",
        icon: React.createElement(LuGraduationCap),
        date: "2021 - present",
    },
] as const;

export const projectsData = [
    {
        title: "Netflix UI Clone",
        description:
            "I worked on this project when i was learning Tailwind CSS.",
        tags: ["HTML", "Tailwind CSS", "JavaScript"],
        imageUrl: Netflix,
    },
    {
        title: "Code-Alpha",
        description:
            "Code-Alpha is an Online Code Editor which can compile various languages like: C, C++, JAVA & Python, It also can handle multiple testcases at once.",
        tags: [
            "HTML",
            "BootStrap",
            "JavaScript",
            "CodeMirror",
            "Express",
            "Compilex",
        ],
        imageUrl: Compiler,
    },
    {
        title: "Imaginify",
        description:
            "An AI integrated SaaS Platform for image manupulation and transformation such as - Generative Fill, Object Recolour, Object Removal, Background Removal & Image Restore.",
        tags: ["Next.js", "MongoDB", "Tailwind CSS", "Stripe"],
        imageUrl: imaginify,
    },
    {
        title: "Brainwave",
        description:
            "AN UI/UX Design for an AI integrated SaaS Platform. Brainwave is a sleek and customizable UI/UX design crafted with React and Tailwind CSS, specifically tailored for AI chat interactions.",
        tags: ["React.js", "Tailwind CSS", "Vite"],
        imageUrl: brainwave,
    },
] as const;

export const skillsData = [
    "C",
    "C++",
    "JAVA",
    "HTML",
    "Tailwind CSS",
    "JavaScript",
    "React",
    "Redux Toolkit",
    "Node.js",
    "Express",
    "MySQL",
    "MongoDB",
    "TypeScript",
    "Next.js",
    "Git & Github",
    "Linux",
    "Python",
    "OpenCV",
    "Firebase",
    "AWS",
] as const;
