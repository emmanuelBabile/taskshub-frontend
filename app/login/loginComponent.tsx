"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; 

const LoginComponent: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center bg-background">

      <div className="mt-16">
        <img
          src="/8.png"
          alt="Logo"
          className="w-24 sm:w-32 md:w-64 lg:w-40 xl:w-[400px] h-auto mx-auto"
        />
      </div>

      <div className="mt-8">
        
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-[#0cc0df] rounded-[35px] mt-2 text-gray-700"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-[#0cc0df] rounded-[35px] mt-2 text-gray-700"
          />
        </div>

        <button
          type="button"
          onClick={() => router.push("/projectspage")} 
          className="w-full bg-[#0cc0df] text-white py-2 rounded-[35px] hover:bg-[#0a98b3]"
        >
          Log in
        </button>

        <p className="text-center text-sm mt-4">
          <span className="text-black">Can't log in? </span>
          <span className="text-[#0cc0df] cursor-pointer">Contact the admin</span>
        </p>
        
      </div>
    </div>
  );
};

export default LoginComponent;
