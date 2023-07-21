import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-container">
      <footer className="fixed bottom-0 w-full h-16 bg-[#17345f] text-gray-300 flex justify-center items-center">
        {`Copyright ${currentYear} By Recep Taylanhan & All Rights Reserved`}
      </footer>
    </div>
  );
};

export default Footer;

