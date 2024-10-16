import * as React from "react";

function Part() {
  return (
    <div>
      <div
        className="flex flex-col justify-center items-center px-20 py-16 font-semibold max-md:px-5 bg-[url('https://your-image-url')] bg-cover bg-center" // Background image added
      >
        <div className="text-4xl text-amber-300 max-md:max-w-full text-center">
          A DAY FOR ALL-THINGS-BLOCKCHAIN
        </div>

        <div className="mt-5 text-base text-white w-[1021px] max-md:max-w-full text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>

        <div className="flex flex-wrap gap-10 items-end mt-5 max-w-full text-xl font-medium text-center text-zinc-50 w-[1274px]">
          {/* First Block */}
          <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/93df74784c6fab9b46cc12593fdedd013018e063a3d2f3884498b7ca0e8f8cff"
              className="object-contain w-full aspect-[1.54]"
              alt="Panel Discussions"
            />
            <div className="mt-2">PANEL DISCUSSIONS</div>
          </div>

          {/* Second Block */}
          <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/271b7ffe1e17f72939ca72180971c8cf9483f36f084c2fd90c7d3e0907636c4c"
              className="object-contain w-full aspect-[1.54]"
              alt="Side Sessions"
            />
            <div className="mt-2">SIDE SESSIONS</div>
          </div>

          {/* Third Block */}
          <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b80861729b37a49584d283c4810e2881150236b5c7140cd6f4066e65c6b254ad"
              className="object-contain w-full aspect-[1.55]"
              alt="Networking"
            />
            <div className="mt-2">NETWORKING</div>
          </div>
        </div>
      </div>

      {/* Second Content with White Background */}
      <div className="bg-white py-10"> {/* Added background color and padding */}
        <div className="flex flex-col justify-center">
          <div className="flex flex-col self-center max-w-full w-[305px]">
            <div className="text-4xl font-medium text-black">Meet the Speaker</div>
            <div className="flex items-center w-full">
              <div className="flex shrink-0 self-stretch my-auto h-2 bg-amber-300 w-[152px]" />
              <div className="flex shrink-0 self-stretch my-auto h-2 bg-neutral-800 w-[152px]" />
            </div>
          </div>
          <div className="mt-7 text-base font-medium text-black max-md:max-w-full pr-14 pl-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </div>
        </div>
      </div>

    <div className="flex flex-col justify-center items-center px-20 py-16 font-medium text-white bg-neutral-800 max-md:px-5">
      <div className="flex flex-wrap gap-10 items-center w-full max-w-[1257px] max-md:max-w-full">
        <div className="flex gap-5 items-center self-stretch my-auto min-w-[240px] w-[388px]">
          <div className="flex shrink-0 self-stretch my-auto bg-violet-200 rounded-xl h-[150px] w-[150px]" />
          <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0">
            <div className="text-2xl">Ismael Jerusalem</div>
            <div className="text-base text-amber-300">CEO & Founder</div>
            <div className="text-xs">Ownly</div>
          </div>
        </div>
        <div className="flex flex-wrap flex-1 shrink gap-5 items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-1 shrink gap-5 items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
            <div className="flex shrink-0 self-stretch my-auto bg-violet-200 rounded-xl h-[150px] w-[150px]" />
            <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px]">
              <div className="text-2xl">Deneley Mirabueno</div>
              <div className="text-base text-amber-300">
                Finance and Risk Professional
              </div>
              <div className="text-xs">IT</div>
            </div>
          </div>
          <div className="flex gap-5 items-center self-stretch my-auto min-w-[240px] w-[379px]">
            <div className="flex shrink-0 self-stretch my-auto bg-violet-200 rounded-xl h-[150px] w-[150px]" />
            <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0">
              <div className="text-2xl">Ismael Jerusalem</div>
              <div className="text-base text-amber-300">CEO & Founder</div>
              <div className="text-xs">Ownly</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-10 items-center mt-12 w-full max-w-[1258px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 items-center self-stretch my-auto min-w-[240px] w-[389px]">
          <div className="flex shrink-0 self-stretch my-auto bg-violet-200 rounded-xl h-[150px] w-[150px]" />
          <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0">
            <div className="text-2xl">Harvey Javier</div>
            <div className="text-base text-amber-300">Co-founder & CEO</div>
            <div className="text-xs">SparkPoint</div>
          </div>
        </div>
        <div className="flex flex-wrap flex-1 shrink gap-5 items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-1 shrink gap-5 items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
            <div className="flex shrink-0 self-stretch my-auto bg-violet-200 rounded-xl h-[150px] w-[150px]" />
            <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px]">
              <div className="text-2xl">Will Añonuevo</div>
              <div className="text-base text-amber-300">Head of Creatives</div>
              <div className="text-xs">Bicol IT</div>
            </div>
          </div>
          <div className="flex gap-5 items-center self-stretch my-auto min-w-[240px] w-[379px]">
            <div className="flex shrink-0 self-stretch my-auto bg-violet-200 rounded-xl h-[150px] w-[150px]" />
            <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0">
              <div className="text-2xl">Felix Oliver Zuñiga</div>
              <div className="text-base text-amber-300">Finance Officer</div>
              <div className="text-xs">Bicol IT</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-5 items-center mt-12 w-full max-w-[1257px] min-h-[156px] max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap flex-1 shrink gap-10 items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex gap-5 items-center self-stretch my-auto min-w-[240px] w-[388px]">
            <div className="flex shrink-0 self-stretch my-auto bg-violet-200 rounded-xl h-[150px] w-[150px]" />
            <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0">
              <div className="text-2xl">Harris Osianna</div>
              <div className="text-base text-amber-300">
                Head of Partnership & Relation
              </div>
              <div className="text-xs">Bicol IT</div>
            </div>
          </div>
          <div className="flex flex-1 shrink gap-5 items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
            <div className="flex shrink-0 self-stretch my-auto bg-violet-200 rounded-xl h-[150px] w-[150px]" />
            <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px]">
              <div className="text-2xl">Karl Nestor Buensalida</div>
              <div className="text-base text-amber-300">Volunteer</div>
              <div className="text-xs">Cheerz</div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 items-center self-stretch my-auto min-w-[240px] w-[379px]">
          <div className="flex shrink-0 self-stretch my-auto bg-violet-200 rounded-xl h-[150px] w-[150px]" />
          <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0">
            <div className="text-2xl">Christian Asejo</div>
            <div className="text-base text-amber-300">Volunteer</div>
            <div className="text-xs">Cheerz</div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-10 items-center mt-12 w-full max-w-[1257px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 items-center self-stretch my-auto min-w-[240px] w-[388px]">
          <div className="flex shrink-0 self-stretch my-auto bg-violet-200 rounded-xl h-[150px] w-[150px]" />
          <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0">
            <div className="text-2xl">Ace Dazal</div>
            <div className="text-base text-amber-300">Volunteer</div>
            <div className="text-xs">Cheerz</div>
          </div>
        </div>
        <div className="flex flex-wrap flex-1 shrink gap-5 items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-1 shrink gap-5 items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
            <div className="flex shrink-0 self-stretch my-auto bg-violet-200 rounded-xl h-[150px] w-[150px]" />
            <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px]">
              <div className="text-2xl">Cyril imperial</div>
              <div className="text-base text-amber-300">
                Student Council President
              </div>
              <div className="text-xs">Bicol IT</div>
            </div>
          </div>
          <div className="flex gap-5 items-center self-stretch my-auto min-w-[240px] w-[379px]">
            <div className="flex shrink-0 self-stretch my-auto bg-violet-200 rounded-xl h-[150px] w-[150px]" />
            <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0">
              <div className="text-2xl">Clarissa Vega</div>
              <div className="text-base text-amber-300">
                Student Council Secretary
              </div>
              <div className="text-xs">Bicol IT</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white">
    <div className="flex flex-col pt-40 pb-96 font-medium px-[585px] max-md:px-5 max-md:py-24 text-center items-center bg-black">
    <div className="flex flex-col w-full max-w-[268px] items-center"> 
        <div className="text-5xl text-white max-md:text-4xl">SCHEDULE</div>
        <div className="flex gap-1 items-center self-center max-w-full text-sm w-[172px]">
        <div className="self-stretch my-auto text-zinc-50">Oct. 25 2024</div>
        <div className="shrink-0 self-stretch my-auto w-0 border border-white border-solid h-[21px]" />
        <div className="flex-1 shrink self-stretch my-auto text-amber-300 basis-0">
            Oct. 26 2024
        </div>
        </div>
    </div>
    </div>

    <div className="p-20 mt-[-400px]">
    <div className="flex gap-2.5 justify-center items-center -mt-10 font-medium rounded-xl border border-black border-solid bg-neutral-800 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] px-5"> {/* Negative margin on the outer div */}
        <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[1216px] px-9 py-24 max-md:">
            <div className="text-sm text-neutral-800 max-md:max-w-full">
            <span className="text-3xl text-amber-300">
                Bicol Blockchain Conference 2024 Program
            </span>
            <br />
            <span className="text-xl text-white">
                October 25, 2024 | Dimatagpuan Hotel, Legazpi City, Albay
            </span>
            <br />
            <span className="text-base text-white">
                Master of Ceremonies: Carl Andre Bongalos, CMO SparkPoint
            </span>
            </div>
            <div className="flex flex-col px-28 mt-20 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-wrap gap-10 items-center w-full text-3xl text-white max-md:max-w-full">
                <div className="self-stretch my-auto">9:00 AM - 10:00 AM</div>
                <div className="grow shrink self-stretch my-auto w-[540px] max-md:max-w-full">
                Registration and Networking
                </div>
            </div>
            <div className="flex flex-col items-end mt-7 w-full max-md:max-w-full">
                <div className="flex flex-wrap gap-10 items-center self-stretch w-full text-3xl text-white max-md:max-w-full">
                <div className="self-stretch my-auto">10:00 AM - 11:00 AM</div>
                <div className="grow shrink self-stretch my-auto w-[538px] max-md:max-w-full">
                    Opening Ceremonies
                </div>
                </div>
                <div className="flex flex-col mt-1.5 max-w-full w-[600px]">
                <div className="flex flex-col w-full max-md:max-w-full">
                    <div className="flex flex-col w-full max-md:max-w-full">
                    <div className="text-2xl text-amber-300 max-md:max-w-full">
                        Welcome Message
                    </div>
                    <div className="text-xl text-white max-md:max-w-full">
                        -Hon. Gov. (name), Governor Province of Albay
                    </div>
                    </div>
                    <div className="mt-1.5 text-2xl text-amber-300 max-md:max-w-full">
                    DTI Region V Message
                    </div>
                </div>
                <div className="text-xl text-white max-md:max-w-full">
                    -Rodrigo Aguilar, Regional Director
                </div>
                </div>
                <div className="flex flex-col mt-1.5 max-w-full w-[600px]">
                <div className="text-2xl text-amber-300 max-md:max-w-full">
                    Keynote Message
                </div>
                <div className="text-xl text-white max-md:max-w-full">
                    -Rosemarie Rey Quinto, AICTA Chairman
                </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-10 items-start mt-7 w-full max-md:max-w-full">
                <div className="text-3xl text-white">11:00 AM - 11:30 AM</div>
                <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
                <div className="text-3xl text-amber-300 max-md:max-w-full">
                    The Foundations and Evolution of Modern Traditional Finance{" "}
                </div>
                <div className="text-xl text-white max-md:max-w-full">
                    -Denley Mirabueno, Finance and Risk Professional
                </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-10 items-start mt-7 w-full max-md:max-w-full">
                <div className="text-3xl text-white">11:30 AM - 12:00 AM</div>
                <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
                <div className="text-3xl text-amber-300 max-md:max-w-full">
                    Intro to Blockchain and Web3
                </div>
                <div className="text-xl text-white max-md:max-w-full">
                    -Harvey Javier, Co-founder & CEO, SparkPoint
                </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-10 items-center mt-7 w-full text-white max-md:max-w-full">
                <div className="self-stretch my-auto text-3xl">
                12:00 NN - 1:30 AM
                </div>
                <div className="grow shrink self-stretch my-auto text-5xl w-[544px] max-md:max-w-full max-md:text-4xl">
                LUNCH BREAK
                </div>
            </div>
            <div className="flex flex-wrap gap-10 items-start mt-7 w-full max-md:max-w-full">
                <div className="text-3xl text-white">1:15 PM - 1:30 AM</div>
                <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
                <div className="text-3xl text-amber-300 max-md:max-w-full">
                    Building IT Community in Bicol
                </div>
                <div className="text-xl text-white max-md:max-w-full">
                    -Loreleen Mae Sablot, VP for Events, Bicol IT
                </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-10 items-start mt-7 w-full max-md:max-w-full">
                <div className="text-3xl text-white">1:15 PM - 1:30 AM</div>
                <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
                <div className="text-3xl text-amber-300 max-md:max-w-full">
                    The Story of Crypto in the Philippines
                </div>
                <div className="text-xl text-white max-md:max-w-full">
                    -Michael Mislos, Editor-in-Chief BitPinas
                </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-10 items-start mt-7 w-full max-md:max-w-full">
                <div className="text-3xl text-white">1:50 PM - 2:10 AM</div>
                <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
                <div className="text-3xl text-amber-300 max-md:max-w-full">
                    Filipicoin: Decentralized Network for Transportation
                </div>
                <div className="text-xl text-white max-md:max-w-full">
                    -Michael Mislos, Editor-in-Chief BitPinas
                </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-10 items-start mt-7 w-full max-md:max-w-full">
                <div className="text-3xl text-white">2:10 PM - 2:30 AM</div>
                <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
                <div className="text-3xl text-amber-300 max-md:max-w-full">
                    Legal Considerations of Crypto and NFTs in PH
                </div>
                <div className="text-xl text-white max-md:max-w-full">
                    -Atty. Enrique dela Cruz, Senior Partner{" "}
                </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-10 items-start mt-7 w-full max-md:max-w-full">
                <div className="text-3xl text-white">2:30 PM - 2:50 AM</div>
                <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
                <div className="text-3xl text-amber-300 max-md:max-w-full">
                    How to keep on Building
                </div>
                <div className="text-xl text-white max-md:max-w-full">
                    -Andy Agnas, SparkPoint
                </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-10 items-start mt-7 w-full max-md:max-w-full">
                <div className="text-3xl text-white">2:50 PM - 3:20 AM</div>
                <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
                <div className="text-3xl text-amber-300 max-md:max-w-full">
                    Future of Blockchain in Philippines
                </div>
                <div className="text-xl text-white max-md:max-w-full">
                    -Raimund Abalos, De La Salle University
                </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-10 items-start mt-7 w-full max-md:max-w-full">
                <div className="text-3xl text-white">3:20 PM - 4:00 AM</div>
                <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
                <div className="text-3xl text-amber-300 max-md:max-w-full">
                    Networking with the Stakeholders and Investors
                </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-10 items-start mt-7 w-full max-md:max-w-full">
                <div className="text-3xl text-white">4:00 PM - 4:30 AM</div>
                <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
                <div className="text-3xl text-amber-300 max-md:max-w-full">
                    Closing Remarks
                </div>
                <div className="text-xl text-white max-md:max-w-full">
                    -TBA
                </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-10 items-start mt-7 w-full max-md:max-w-full">
                <div className="text-3xl text-white">4:30 PM - 5:00 AM</div>
                <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
                <div className="text-3xl text-amber-300 max-md:max-w-full">
                    Closing Program
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
</div>

  );
};

export default Part;