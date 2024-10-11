import Image from "next/image";
import poster from "./images/poster.png";
import design from "./images/design.png";
import logoDate from "./images/logo_and_date.png";
import partners from "./images/partners.png";

export default function Home() {
  return (
    <div className="w-full h-screen bg-cover bg-center bg-no-repeat bg-[#35006b] grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20" style={{ backgroundImage: `url(${design.src})` }}>
      
      <main className="flex flex-col gap-4 row-start-2 items-center">
        <Image
          src={logoDate}
          alt="Logo and Date"
          width={400}
          //layout="fill"
          //objectFit="contain" // Ensure the image fits within the container while maintaining its aspect ratio
          objectPosition="center" // Center the image in the view
          priority // Optional: load image faster
        />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Image
          src={partners}
          alt="Partners"
          width={400}
          priority
        />
      </footer>
    </div>
  );
}
