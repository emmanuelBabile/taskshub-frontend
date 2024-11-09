"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FolderIcon,
  HomeIcon,
  ArrowLeftOnRectangleIcon
} from "@heroicons/react/24/outline";

const SidebarComponent: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();
  
  const currentPath = window.location.pathname;

  const handleMouseEnter = () => setIsExpanded(true);
  const handleMouseLeave = () => setIsExpanded(false);

  return (
    <div
      className={`fixed bottom-0 left-0 bg-[#D9D9D9] text-white flex flex-col items-center py-4 ${
        isExpanded ? "w-48" : "w-16"
      } transition-all duration-300`}
      style={{
        borderTopRightRadius: "15px",
        height: "80vh", // Vous pouvez ajuster cette valeur pour réduire la hauteur
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        onClick={() => currentPath !== "/dashboard" && router.push("/dashboard")}
        className={`flex items-center justify-start w-full px-4 py-3 hover:bg-white cursor-pointer ${
          currentPath === "/dashboard" ? "pointer-events-none opacity-50" : ""
        }`}
      >
        <HomeIcon className="h-6 w-6 text-[#0cc0df]" />
        {isExpanded && <span className="ml-4 text-[#0cc0df] font-bold">Dashboard</span>}
      </div>

      <div
        onClick={() => currentPath !== "/projectspage" && router.push("/projectspage")}
        className={`flex items-center justify-start w-full px-4 py-3 hover:bg-white cursor-pointer ${
          currentPath === "/projectspage" ? "pointer-events-none opacity-50" : ""
        }`}
      >
        <FolderIcon className="h-6 w-6 text-[#0cc0df]" />
        {isExpanded && <span className="ml-4 text-[#0cc0df] font-bold">Projects</span>}
      </div>

      <div
        onClick={() => currentPath !== "/login" && router.push("/login")}
        className={`flex items-center justify-start w-full px-4 py-3 mt-auto hover:bg-white cursor-pointer ${
          currentPath === "/login" ? "pointer-events-none opacity-50" : ""
        }`}
      >
        <ArrowLeftOnRectangleIcon className="h-6 w-6 text-[#0cc0df]" />
        {isExpanded && <span className="ml-4 text-[#0cc0df] font-bold">Log out</span>}
      </div>
    </div>
  );
};

export default SidebarComponent;
