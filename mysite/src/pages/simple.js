import React from "react";
import { BrowserView, MobileView } from "react-device-detect";

import TextCard from "../components/text";
import Header from "../components/header";
import Socials from "../components/socials";
import SpotifyPlaylists from "../components/spotifyplaylists";
import Footer from "../components/footer";
import { bio, secondary_bio } from "../components/writing/descriptions";

export default function SimpleAbout() {
  return (
    <>
      <BrowserView>
        <div style={{ marginLeft: "100px", marginTop: "100px" }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ marginRight: "50px" }}>
              <Header
                title="Alvin Zhang"
                subtitle="Student, Software Engineer"
                hstyle={{ fontSize: "70px", paddingBottom: "25px" }}
                mstyle={{ padding: "30px" }}
                sstyle={{ fontSize: "20px" }}
              />
              <TextCard content={bio} />
              <TextCard content={secondary_bio} />
              <Socials />
            </div>
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <div style={{ width: "85%", margin: "auto", marginTop: "7.5%" }}>
          <Header
            title="Alvin Zhang"
            subtitle="Student, Software Engineer"
            hstyle={{ fontSize: "50px", paddingBottom: "15px" }}
            mstyle={{ padding: "20px" }}
            sstyle={{ fontSize: "20px" }}
          />
          <TextCard content={bio} />
          <TextCard content={secondary_bio} />
          <Socials style={{ flexDirection: "row" }} />
        </div>
      </MobileView>
    </>
  );
}
