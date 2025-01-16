import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Header = () => {
  return (
    <>
      <nav className="py-4 px-6 text-white flex items-center justify-between shadow-lg">
        <Link href="/" className="-ml-48">
          <img src="/jobsy-logo01.svg" alt="Jobsy" className="h-[50px]" />
        </Link>

        <Button
          variant="outline"
          className="border border-gray-500 text-gray-200 hover:bg-gray-700 hover:text-white transition-colors duration-300 mr-0"
        >
          Login
        </Button>

        {/* <SignedOut>
    //       <SignInButton />
    //     </SignedOut>
    //     <SignedIn>
    //       <UserButton />
    //     </SignedIn> */}
      </nav>
    </>
  );
};

export default Header;
