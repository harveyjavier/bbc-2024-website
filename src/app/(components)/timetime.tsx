"use client"; // Add this line to mark the component as a client component
import React, { useEffect, useState } from "react";

function Timetime() {
  const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2024-10-25T00:00:00+08:00");
    
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference <= 0) {
        clearInterval(intervalId);
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const seconds = Math.floor((difference / 1000) % 60);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));

      setTimeRemaining({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-wrap gap-10 justify-center items-center px-24 py-16 max-md:px-5 bg-gradient-to-r from-custom-gray-dark to-custom-gray-light">
      <div className="flex flex-col grow shrink self-stretch my-auto text-xl min-w-[240px] w-[420px] max-md:max-w-full">
        <div className="flex overflow-hidden relative gap-3.5 items-start px-3.5 pt-32 max-w-full font-extrabold text-white w-[385px] max-md:pt-24">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/15a22ba911876d066170635d00ad48af7bb5520da77a38b2350a9df412142da5?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/15a22ba911876d066170635d00ad48af7bb5520da77a38b2350a9df412142da5?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/15a22ba911876d066170635d00ad48af7bb5520da77a38b2350a9df412142da5?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/15a22ba911876d066170635d00ad48af7bb5520da77a38b2350a9df412142da5?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/15a22ba911876d066170635d00ad48af7bb5520da77a38b2350a9df412142da5?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/15a22ba911876d066170635d00ad48af7bb5520da77a38b2350a9df412142da5?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/15a22ba911876d066170635d00ad48af7bb5520da77a38b2350a9df412142da5?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/15a22ba911876d066170635d00ad48af7bb5520da77a38b2350a9df412142da5?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e"
            className="object-contain absolute top-0 right-0 z-0 aspect-[2.75] h-[140px] min-w-[240px] w-[385px]"
          />
          <div className="z-0 flex-1 shrink basis-0">
            BICOL BLOCKCHAIN CONFERENCE
          </div>
        </div>
        <div className="mt-5 text-white text-opacity-70 max-md:max-w-full">
          The biggest gathering of blockchain enthusiasts, crypto curious,
          influencers, and experts on south of the metro.
        </div>
      </div>
      <div className="flex flex-col grow shrink items-center self-stretch my-auto min-w-[240px] w-[299px]">
        <div className="self-stretch text-2xl font-bold text-white">
          25 OCT 2024
          <br />
          Legazpi City Convention Center
          <br />
          <span className="text-base text-white">LEGAZPI CITY, ALBAY</span>
        </div>
        <div className="flex gap-7 items-start mt-12 max-w-full whitespace-nowrap w-[317px] max-md:mt-10">
          <div className="flex gap-6 items-center w-[122px]">
            <div className="flex flex-col self-stretch my-auto w-[46px]">
              <div className="text-4xl font-bold text-white">
                {String(timeRemaining.days).padStart(2, '0')}
              </div>
              <div className="text-base font-semibold text-white text-opacity-70">DAYS</div>
            </div>
            <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 items-center"> {/* Center alignment added here */}
              <div className="self-start text-4xl font-bold text-center text-white">
                {String(timeRemaining.hours).padStart(2, '0')}
              </div>
              <div className="text-base font-semibold text-white text-opacity-70">HOURS</div>
            </div>
          </div>
          <div className="flex flex-col w-[69px]">
            <div className="text-4xl font-bold text-center text-white">
              {String(timeRemaining.minutes).padStart(2, '0')}
            </div>
            <div className="text-base font-semibold text-white text-opacity-70">MINUTES</div>
          </div>
          <div className="flex flex-col flex-1 shrink basis-0">
            <div className="self-start text-4xl font-bold text-center text-white">
              {String(timeRemaining.seconds).padStart(2, '0')}
            </div>
            <div className="text-base font-semibold text-white text-opacity-70">SECONDS</div>
          </div>
        </div>
        <div className="flex justify-center mt-12 max-w-full">
          <button className="gap-2.5 py-1.5 px-2 text-base font-medium text-white bg-amber-300 rounded-xl min-h-[35px] w-[120px] transition duration-300 ease-in-out hover:bg-black hover:text-white">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timetime;
