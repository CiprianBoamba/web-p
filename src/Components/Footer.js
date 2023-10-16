import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-200 py-6 dark:bg-slate-600 bottom-0">
      <div className="container mx-auto text-center">
        <p className="text-sm font-medium text-slate-900 dark:text-white">
          &copy; {new Date().getFullYear()} Your Website Name. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
