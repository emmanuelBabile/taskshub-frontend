"use client";

import React, { useState } from "react";

const DashboardComponent: React.FC = () => {
  return (
    <div className="flex flex-col ml-56 mt-40 p-4">

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-500 text-white p-8 rounded-lg flex items-center justify-center">
            Graphic unavailable
        </div>
        <div className="bg-gray-500 text-white p-8 rounded-lg flex items-center justify-center">
            Graphic unavailable
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-500 text-white p-8 rounded-lg flex items-center justify-center">
            Graphic unavailable
        </div>
        <div className="bg-gray-500 text-white p-8 rounded-lg flex items-center justify-center">
            Graphic unavailable
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;
