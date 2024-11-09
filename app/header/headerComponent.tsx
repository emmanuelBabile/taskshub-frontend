"use client";

import React from "react";
import { BellAlertIcon } from "@heroicons/react/24/outline";

const HeaderComponent: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full flex items-center justify-between px-4 py-2 bg-background shadow-md z-10">
      
      <div className="flex items-center">
      <BellAlertIcon className="h-7 w-7 text-[#0cc0df] cursor-pointer" />
      </div>

      <div className="flex items-center justify-center">
        <img src="/7.png" alt="Logo" className="h-12 w-auto mx-auto" style={{ height: "70px" }} />
      </div>

      <div className="flex items-center text-[#0cc0df] font-semibold">
        Username
      </div>
    </div>
  );
};

export default HeaderComponent;
