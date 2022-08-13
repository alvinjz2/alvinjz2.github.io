import React from "react";
import Back from "../components/back";
import GitHubIcon from "../components/githublink";
import ReactIcon from "../components/reactlink";
import JavascriptIcon from "../components/javascripticon";
import TailwindCSSIcon from "../components/tailwindcssicon";
import PhotoCard from "../components/photocard";
const personal_website = "https://github.com/alvinjz2/alvinjz2.github.io";
const website_link = "https://alvinjz.me";
const website_mockup = require("../components/media/ChromeMockup.png");

export default function Interests() {
  return (
    <div class="bg-gradient-to-r from-neutral-100 to-slate-300 h-screen w-full">
      <div class="grid pt-20 ">
        <div class="grid grid-cols-1 place-items-center gap-24">
          <div class="flex flex-row gap-36 items-center">
            <PhotoCard
              link={website_link}
              path={website_mockup}
              alt="My Website"
            />

            <div class="py-15">
              <p class="pb-10 text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300  via-cyan-400">
                Personal Website
              </p>
              <div class="grid bg-white drop-shadow-md rounded-xl max-w-4xl place-items-center">
                <p class="text-xl p-9 leading-relaxed">
                  Building this website has been a fun and challenging
                  experience! I had to figure out things like how to host my
                  website, finding a domain, deciding which framework to use,
                  etc. Overall, I'm quite proud of the result!{" "}
                </p>
              </div>
              <div class="flex flex-row gap-6">
                <GitHubIcon link={personal_website} />
                <ReactIcon />
                <JavascriptIcon />
                <TailwindCSSIcon />
              </div>
              <div class="flex flex-row justify-start">
                <div class="">
                  <Back />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
