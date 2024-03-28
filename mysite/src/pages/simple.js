import React from "react";
import { BrowserView, MobileView } from "react-device-detect";

import Header from "../components/header";
import Socials from "../components/socials";

var email = 'alvin.zhang295 [at] gmail.com'

export default function SimpleAbout() {
  return (
    <>
      <BrowserView>
        <div style={{ marginLeft: "100px", marginTop: "100px" }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ marginRight: "50px" }}>
              <Header
                title="Alvin Zhang"
                subtitle="Software Engineer"
                email={email}
               />

              <Socials />
            </div>
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <div style={{ width: "85%", margin: "auto", marginTop: "7.5%" }}>
        <div class="py-15">
      <div>
        <p
          class="text-5xl font-medium mb-4"
 
        >
          Alvin Zhang
        </p>
        <p class="text-3xl font-medium">Software Engineer</p>
      </div>
    </div>

          <Socials style={{ flexDirection: "column", margin: '0px' }} />
        </div>
      </MobileView>
    </>
  );
}
