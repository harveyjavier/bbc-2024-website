import React from "react";

const Content: React.FC = () => {
  return (
    <div>
      {/* First image */}
      <div className="relative flex items-center justify-center mt-20">
        <img
          src="./assets/image1.png"
          alt="Content Image"
          className="w-full h-auto max-w-full max-h-full"
        />
      </div>

      {/* Second image */}
      <div className="bg-white">
        <div className="flex flex-col items-start p-10">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/636b5844a0abc6b5e3079a43cd8a66f85f93673724e409ffc585c3ff07670ddd?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e"
            alt="Main image description"
            className="object-contain w-full aspect-[1.7] max-w-[395px]"
          />

          {/* Third image */}
          <div className="flex items-start mt-4 ml-36">
            <h1 className="text-black font-poppins font-semibold text-[36px] leading-tight mr-4">
              BLOCKCHAIN FOUND ITS <br />
              <span className="block">NEW HOME, BICOL</span>
            </h1>

            {/* Third image aligned to the top of the second image */}
            <div className="flex items-start">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5491ad8248fd085fc4f4fbeee3f0a8f79f97d28a6c2e57a7268bd686a9ff6d95?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e"
                alt="Description of the image"
                className="object-contain aspect-[1.85] max-w-[800px] h-auto ml-6 mt-[-200px]"
              />
            </div>
          </div>

          {/* Flex container for Section and Article */}
          <div className="flex items-start px-10 py-32 gap-10">
            {/* Adjusted Section */}
            <section className="gap-2.5 self-stretch text-5xl font-medium text-white bg-neutral-800 min-w-[240px] w-[600px] max-md:max-w-full max-md:text-4xl">
              {/* Added ml-36 to align with the second image */}
            </section>

            {/* Article (con) content aligned with the section */}
            <article className="con flex-1 w-[600px] max-w-full ml-20">
              <h2 className="text-4xl text-black">
                A SHOWCASE OF <br />
                <span className="text-5xl font-bold">BICOL’S ORAGON SPIRIT</span> <br />
                <span className="text-2xl">IN TECH</span>
              </h2>
              <p className="mt-6 text-2xl font-semibold text-neutral-800 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </article>
          </div>
        </div>
      </div>

      <div className="flex flex-col px-px">
        <div className="flex flex-wrap justify-center items-center">
          <div className="flex grow shrink self-stretch my-auto bg-neutral-800 h-[43px] min-w-[240px] w-[578px]" />
          <div className="flex grow shrink self-stretch my-auto bg-amber-300 h-[43px] min-w-[240px] w-[578px]" />
        </div>
      </div>

      {/* White space with white background */}
      <div className="bg-white w-full h-[100px]"></div> {/* Adjusted white space */}

    </div>
  );
};

export default Content;
