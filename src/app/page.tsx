import Image from "next/image";
import poster from "./images/poster.png";
import design from "./images/design.png";

export default function Home() {
  return (
    <div className="w-full h-screen bg-cover bg-center bg-no-repeat bg-[#35006b]" style={{ backgroundImage: `url(${design.src})` }}>
      {/* Image as background with proper scaling */}
      <div className="absolute inset-0">
        <Image
          src={poster}
          alt="Poster"
          layout="fill"
          objectFit="contain" // Ensure the image fits within the container while maintaining its aspect ratio
          objectPosition="center" // Center the image in the view
          priority // Optional: load image faster
        />
      </div>
      {/* Your content can go here */}
    </div>
  );
}
