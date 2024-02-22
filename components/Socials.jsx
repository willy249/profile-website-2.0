"use client";

import { RiGithubFill } from "react-icons/ri";

import Link from "next/link";

const icon = [
  {
    path: "https://github.com/willy249?tab=repositories",
    name: <RiGithubFill />,
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icon.map((icon, index) => {
        return (
          <Link target="_blank" href={icon.path} key={index}>
            {" "}
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
