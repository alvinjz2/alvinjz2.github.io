import React from "react";
import TextCard from "../components/text";
import Header from "../components/header";
import PortraitPhoto from "../components/portraitphoto";
import GitHubIcon from "../components/links/githublink";
import LinkedInIcon from "../components/links/linkedinlink";
import TwitterIcon from "../components/links/twitterlink";
import GmailIcon from "../components/links/gmaillink";
import ChessLink from "../components/links/chesslink";
import SpotifyPlaylists from "../components/spotifyplaylists";
import Footer from "../components/footer";


const github_link = "https://github.com/alvinjz2";
const twitter_link = "https://twitter.com/alvinjz2 ";
const linkedin_link = "https://www.linkedin.com/in/alvinjz2/";
const chess_link = "https://www.chess.com/member/alvinzhang1"
const resume_link = "https://drive.google.com/drive/folders/1C-gGJGQfr0IrSXqRokA3vCyJ9VwWoj2l?usp=sharing"

export default function SimpleAbout() {
  return (
    <div style={{ marginLeft: '100px', marginTop:'100px'}}>
      <div style={{display :'flex', flexDirection:'row'}} >
        <div style={{marginRight: '50px'}}>
          <Header title="Alvin Zhang" subtitle="Student" />
          <TextCard content="I am a student at the University of Illinois Urbana Champaign, majoring in Statistics
                              and Computer Science. Apart from my schoolwork, I also am an Undergraduate Research Assistant at the TIMAN
                               Group. "/>
          <TextCard content="I also like to play Chess, along with a variety of different PC/Mobile games.  "/>

          <div class="flex flex-row gap-6">
            <GitHubIcon link={github_link} />
            <LinkedInIcon link={linkedin_link} />
            <TwitterIcon link={twitter_link} />
            <GmailIcon email="alvinjz2@illinois.edu" />
            <ChessLink link={chess_link} />
            <div class="py-8">
              <button class="text-xl w-30 h-[52px] bg-neutral-100 py-3 px-6 shadow-md rounded-full hover:bg-violet-100 ease-in-out transition duration-500">
                <a class="hover:underline underline-offset-4 decoration-dashed decoration-blue-500" rel="noopener noreferrer" target="_blank" href={resume_link}>
                  Resume
                </a>
              </button>
            </div>
          </div>
        </div>
        <SpotifyPlaylists/>
      </div>
    </div>
  );
}
