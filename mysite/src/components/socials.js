import GitHubIcon from "../components/links/githublink";
import LinkedInIcon from "../components/links/linkedinlink";
import TwitterIcon from "../components/links/twitterlink";

const github_link = "https://github.com/alvinjz2";
const twitter_link = "https://twitter.com/alvinjz2 ";
const linkedin_link = "https://www.linkedin.com/in/alvinjz2/";

export default function Socials(props) {
  return (
    <div class="flex flex-row gap-6 pt-8" style={{ flexWrap: "wrap" }}>
      <GitHubIcon link={github_link} />
      <LinkedInIcon link={linkedin_link} />
      <TwitterIcon link={twitter_link} />
      <p className="text-8xl translate-y-[-50px]">_</p>
    </div>
  );
}