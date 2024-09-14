import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import bootstrap from "../assets/bootstrap.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";

import nodejs from "../assets/nodejs.png";
import figma from "../assets/figma.png";
import wordpress from "../assets/wordpress.png";
import c from "../assets/c.png";

import python from "../assets/python.png";
import java from "../assets/java.png";
import mysql from "../assets/mysql.png";
import github from "../assets/github.png";

import mongodb from "../assets/mongodb.png";
import express from "../assets/express.png";

const Skill = () => {
  const skills = [
    {
      id: 1,
      src: html,
      title: "Html",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "Css",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-500",
    },
    {
      id: 4,
      src: js,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: react,
      title: "React.js",
      style: "shadow-blue-500",
    },    
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-blue-300",
    },
    {
      id: 7,
      src: nodejs,
      title: "Node.js",
      style: "shadow-green-500",
    },
    {
      id: 8,
      src: express,
      title: "Express.js",
      style: "shadow-blue-200",
    },
    {
      id: 9,
      src: figma,
      title: "Figma",
      style: "shadow-orange-500",
    },
    {
      id: 10,
      src: wordpress,
      title: "Wordpress",
      style: "shadow-blue-400",
    },
    {
      id: 11,
      src: c,
      title: "C",
      style: "shadow-blue-400",
    },
    {
      id: 12,
      src: python,
      title: "Python",
      style: "shadow-purple-300",
    },
    {
      id: 13,
      src: java,
      title: "Java",
      style: "shadow-orange-700",
    },
    {
      id: 14,
      src: mysql,
      title: "MySql",
      style: "shadow-blue-400",
    },
    {
      id: 15,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-400",
    },
    {
      id: 16,
      src: github,
      title: "Github",
      style: "shadow-blue-200",
    },
  ];

  return (
    <div
      name="𝚂𝚔𝚒𝚕𝚕𝚜"
      className="pb-20 md:pb-28 bg-gradient-to-b from-gray-800 to-black w-full h-full md:pt-0 pt-2 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col h-full">
        <p className="text-4xl font-bold">
          <span className='inline border-b-4 border-gray-500'>My Skills:</span>
        </p>
      </div>
      <div className="mt-8 w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-80">
        {skills.map(({ id, src, title, style }) => (
          <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
            <img className="w-20 mx-auto" src={src} alt="" />
            <p className="mt-4">{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;