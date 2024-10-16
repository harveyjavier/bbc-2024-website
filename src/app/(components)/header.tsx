import React from 'react';

const navigationItems = [
  'About',
  'Speakers',
  'Schedule',
  'Partners',
  'Sponsors'
];

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center h-[90px] p-4 font-medium text-white bg-neutral-800 shadow-md"> {/* Added fixed and shadow */}
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/94bb008f73721f453bc2a98c4adb0de6fa49ec525619419202d7c181229c74fa?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e"
        alt="Company Logo"
        className="object-contain h-[60px] my-auto" // Maintain height for centering
      />
      <nav className="flex gap-7 justify-center items-center flex-grow">
        {navigationItems.map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase()}`}
            className="self-stretch my-auto text-lg whitespace-nowrap hover:text-[#E3C24E] transition-colors duration-300"
          >
            {item}
          </a>
        ))}
      </nav>
      <button className="flex items-center justify-center px-4 py-1.5 text-base bg-amber-300 rounded-xl min-h-[35px] w-[100px] whitespace-nowrap transition-transform transform hover:scale-105 hover:shadow-lg hover:text-black duration-300">
        Join Us
      </button>
    </header>
  );
};

export default Header;
