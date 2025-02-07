import Link from "next/link";
import React from "react";

const TopHeader = () => {
  return (
    <div className="bg-black text-white py-[9px] text-center text-xs">
      <span>Sign up and get 20% off to your first order.</span>
      <Link href="/sign-up" className="ml-0.5 border-b border-b-white">Sign Up Now</Link>
    </div>
  );
};

export default TopHeader;
