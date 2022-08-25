import React from "react";
import Back from "../components/back";
import PhotoCard from "../components/photocard";
const chess_photo = require("../components/media/ChessIcon.png");
const chess_profile = "https://www.chess.com/member/alvinzhang1";
const spotify_profile =
  "https://open.spotify.com/user/alvin.zhang295?si=7a3b952219f04c15";
const spotify_photo = require("../components/media/SpotifyIcon.png");

export default function Interests() {
  return (
    <div class="bg-gradient-to-r from-indigo-50 to-emerald-100 h-full w-full">
      <div class="grid pt-20 ">
        <div class="grid grid-cols-1 place-items-center gap-24">
          <div class="flex flex-row gap-36 items-end ">
            <PhotoCard
              path={chess_photo}
              alt="Chess.com"
              caption="Chess.com Profile"
              link={chess_profile}
            />
            <div class="py-15">
              <p class="pb-10 text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-slate-100 to-green-300">
                Chess
              </p>
              <div class="grid bg-white drop-shadow-md rounded-xl max-w-4xl place-items-center">
                <p class="text-xl p-9 leading-relaxed">
                  I like Chess. I've been playing casually, ever since I was
                  around seven or eight. Since openings have been pretty well
                  studied, what makes or breaks games is the ability to leverage
                  incremental positional advantages into wins.{" "}
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    class="underline decoration-neutral-400 decoration-4 underline-offset-[5px]"
                    href="https://youtu.be/G90SVhxKeig"
                  >
                    Nezhmetdinov vs Chernikov (1962)
                  </a>{" "}
                  is a great example. He sacrificed his greatest piece to gain
                  supremacy of the center of the board, which transformed his
                  pieces into much stronger attackers. This game is legendary,
                  and I suggest you take a watch, even if you're not super into
                  chess. Anyways, feel free to{" "}
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    class="underline decoration-cyan-400 decoration-4 underline-offset-[5px]"
                    href="https://chess.com/play/alvinzhang1"
                  >
                    challenge me
                  </a>
                  !
                </p>
              </div>
            </div>
          </div>
          <div class="flex flex-col">
            <div class="flex flex-row gap-36 items-end ">
              <div class="">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={spotify_profile}
                >
                  <div class="grid bg-white drop-shadow-lg rounded-xl max-w-lg place-items-center p-7">
                    <div class="grid grid-cols-1 place-items-center w-[250px] pt-6 max-h-fit">
                      <img
                        class="max-w-[220px]"
                        src={spotify_photo}
                        alt="Spotify"
                      />
                      <p class=" place-items-center pt-6 pb-1">
                        Spotify Profile
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div class="py-15">
                <p class="pb-10 text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-slate-100 to-green-300">
                  Music
                </p>
                <div class="grid bg-white drop-shadow-md rounded-xl max-w-4xl place-items-center">
                  <p class="text-xl p-9 leading-relaxed">
                    If I had to choose, my{" "}
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      class="underline decoration-cyan-400 decoration-4 underline-offset-[5px]"
                      href="https://open.spotify.com/playlist/1qYdVxTrOmXJspQc52NYf4?si=129fb8de460f4cb6"
                    >
                      contemporary piano playlist
                    </a>{" "}
                    is probably my favorite. What makes the piano so interesting
                    to me is how different songs can be. Take my{" "}
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      class="underline decoration-cyan-400 decoration-4 underline-offset-[5px]"
                      href="https://open.spotify.com/playlist/7sfGx21H2cllSUsPzRUe34?si=102926b92df444a91"
                    >
                      classical piano playlist
                    </a>{" "}
                    as an example. Debussy's "
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://open.spotify.com/track/1WK2C8sg1h3khoTyBIiblf?si=1c1937a6e3dd4465
                  "
                      class="underline decoration-neutral-400 decoration-4 underline-offset-[4px]"
                    >
                      Claire De Lune
                    </a>
                    " is soft and calm songs while "
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://open.spotify.com/track/5zutcHvHUkZkUokND0MHlW?si=a0711e381c3546dd"
                      class="underline decoration-neutral-400 decoration-4 underline-offset-[4px]"
                    >
                      Liebesleid
                    </a>
                    ", by Kreisler, is much more expressive. The different ways
                    composers can create such different songs while using the
                    exact same instrument is fascinating to me.
                  </p>
                </div>
              </div>
            </div>
            <div class="flex flex-row justify-end">
              <div class="">
                <Back />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
