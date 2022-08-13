import React from "react";
import Back from "../components/back";
import TextCard from "../components/text";
import Header from "../components/header";
import PortraitPhoto from "../components/portraitphoto";
import GitHubIcon from "../components/githublink";
import LinkedInIcon from "../components/linkedinlink";
import TwitterIcon from "../components/twitterlink";
import GmailIcon from "../components/gmaillink";
const github_link = "https://github.com/alvinjz2";
const twitter_link = "https://twitter.com/alvinjz2 ";
const linkedin_link = "https://www.linkedin.com/in/alvinjz2/";

export default function About() {
  return (
    <div class="bg-gradient-to-r from-indigo-50 to-rose-200 h-screen w-screen content-center">
      <div class="grid grid-cols-2">
        <div class="grid place-content-around translate-y-[10%] translate-x-[5%] ">
          <Header title="Hello, I'm Alvin!" />
          <TextCard
            content="Currently, I'm a student at the University of Illinois Urbana Champaign.
                             I study Computer Engineering, and am set to graduate in the Spring of 2024."
          />
          <TextCard
            content="At the moment, I'm a member of Quant, a RSO at my school that focuses on Quantitative Trading. I 
                      also act as a robotics mentor for the FIRST Tech Challenge team I founded a few years ago, Future."
          />
          <div class="flex flex-row gap-6">
            <Back class="self-center" />
            <GitHubIcon link={github_link} />
            <LinkedInIcon link={linkedin_link} />
            <TwitterIcon link={twitter_link} />
            <GmailIcon email="alvinjz2@illinois.edu" />
          </div>
        </div>
        <div class="translate-y-[10%]">
          <PortraitPhoto />
        </div>
      </div>
    </div>
  );
}
