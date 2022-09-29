import React from "react";

export const Header = () => {
  return (
    <header className="bg-indigo-600">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <img
              className="h-10 w-auto text-white"
              src="/images/logo.svg"
              alt=""
            />
            {/* <span className="text-white">Meteor Wallet</span> */}
          </div>
        </div>
      </nav>
    </header>
  );
};
